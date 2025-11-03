const fs = require('fs');
const path = require('path');

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\//g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

// Keep brand names in sync with frontend/src/pages/Industries.js
const brandNames = [
  'Nissan',
  'Renault',
  'Mahindra',
  'Audi',
  'BMW',
  'Skoda',
  'Hyundai',
  'Honda',
  'Lamborghini',
  'Volkswagen',
  'KFC',
  'Pizza Hut',
  'Apollo',
  'Mankind Pharma',
  'GSK Pharma',
  'DeHaat',
  'FIITJEE',
  'ICICI',
  'Lenskart',
  'MakeMyTrip',
  'OYO',
  'TCPL / TATA',
  'MTR',
  'Eastern',
  'Blinkit',
  'Cadence',
  'Campa Cola',
  'Macmillan',
  'UCB',
  'Max',
  'Lifestyle',
  'HDFC',
  'Philip Morris',
  'Kamal Watch Co',
  'Omega Boutique',
  'Tata Motors',
  'Cars24',
  'Airtel Payments Bank',
  'Heritage',
  'Maruti Suzuki',
  'Hero',
  'Atomberg',
  'Toyota',
  'Eicher',
  'Royal Enfield',
  'Land Rover',
  'Jaguar',
  'KIA',
  'TVS',
  'Axis',
  'Ecom',
];

const SOURCE_DIR = process.env.SOURCE_DIR || 'C:/Users/navya/Desktop/Industries';
const DEST_DIR = process.env.DEST_DIR || path.resolve(__dirname, '..', 'frontend', 'public', 'images', 'industries');

function normalize(str) {
  return String(str)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '');
}

function findBestMatch(files, brand) {
  const target = normalize(brand);
  // prefer exact starts-with, then includes
  let best = files.find(f => normalize(path.parse(f).name).startsWith(target));
  if (!best) best = files.find(f => normalize(path.parse(f).name).includes(target));
  // handle special cases where filenames contain extra words like "logo"
  if (!best) best = files.find(f => normalize(path.parse(f).name).includes(target + 'logo'));
  return best || null;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function main() {
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`Source directory not found: ${SOURCE_DIR}`);
    process.exit(1);
  }

  ensureDir(DEST_DIR);

  const allFiles = fs.readdirSync(SOURCE_DIR).filter(f => {
    const ext = path.extname(f).toLowerCase();
    return ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.avif'].includes(ext);
  });

  let copied = 0;
  const missing = [];

  for (const brand of brandNames) {
    const match = findBestMatch(allFiles, brand);
    if (!match) {
      missing.push(brand);
      continue;
    }

    const ext = path.extname(match).toLowerCase();
    const destName = `${slugify(brand)}${ext}`;
    const srcPath = path.join(SOURCE_DIR, match);
    const destPath = path.join(DEST_DIR, destName);

    fs.copyFileSync(srcPath, destPath);
    copied += 1;
    // Remove from pool so it isn't reused for another brand by mistake
    const idx = allFiles.indexOf(match);
    if (idx >= 0) allFiles.splice(idx, 1);
  }

  console.log(`Copied ${copied} logos to: ${DEST_DIR}`);
  if (missing.length) {
    console.warn('No matching file found for these brands (check filenames or add images):');
    for (const m of missing) console.warn(` - ${m}`);
  }
}

main();


