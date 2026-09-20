import fs from "fs";
import path from "path";

const categories = [
  "Electronics",
  "Accessories",
  "Home",
  "Office",
  "Gaming",
];

const products = Array.from({ length: 1000 }, (_, index) => {
  const id = index + 1;

  return {
    id,
    name: `Product ${id}`,
    price: Number((Math.random() * 500 + 10).toFixed(2)),
    category: categories[index % categories.length],
    inStock: index % 4 !== 0,
  };
});

const output = `export const products = ${JSON.stringify(
  products,
  null,
  2
)};\n`;

const outputPath = path.resolve("src/data/products.js");

fs.writeFileSync(outputPath, output);

console.log(`Generated ${products.length} products`);
console.log(`Saved to ${outputPath}`);