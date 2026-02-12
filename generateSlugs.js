const fs = require('fs');
const path = require('path');

// Configuration
const DATA_DIR = path.join(__dirname, 'data/cars');
const files = ['toyota.json', 'honda.json', 'lexus.json', 'bmw.json', 'mercedes.json'];

// Helper function to create slug
function createSlug(car) {
  return `${car.brand}-${car.name}-${car.model}`
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/-+/g, '-'); // Remove duplicate dashes
}

// Validate car object
function validateCar(car) {
  return car.brand && car.name && car.model && car.id;
}

// Process a single file
async function processFile(file) {
  const filePath = path.join(DATA_DIR, file);
  try {
    const data = JSON.parse(await fs.promises.readFile(filePath, 'utf-8'));
    const slugSet = new Set();

    const updated = data.map((car) => {
      if (!validateCar(car)) {
        console.warn(`⚠️ Skipping car due to missing properties:`, car);
        return car;
      }

      let slug = createSlug(car);
      if (slugSet.has(slug)) {
        slug = `${slug}-${car.id}`; // Ensure uniqueness by appending ID
      }
      slugSet.add(slug);

      return { ...car, slug };
    });

    await fs.promises.writeFile(filePath, JSON.stringify(updated, null, 2), 'utf-8');
    console.log(`✅ Updated ${file} with slugs`);
  } catch (error) {
    console.error(`❌ Error processing ${file}:`, error.message);
  }
}

// Process all files
async function main() {
  for (const file of files) {
    await processFile(file);
  }
}

main().catch((error) => console.error(`❌ Unexpected error:`, error.message));