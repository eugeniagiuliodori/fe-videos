import fs from "fs";
import { optimize } from "svgo";
import svgpath from "svgpath";
import { svgPathBbox } from "svg-path-bbox";

const input = process.argv[2];

if (!input) {
  console.error("❌ Debes pasar un SVG.\nEjemplo:\n npm run normalize src/assets/logo/logo.svg");
  process.exit(1);
}

if (!fs.existsSync(input)) {
  console.error("❌ El archivo no existe:", input);
  process.exit(1);
}

const rawSvg = fs.readFileSync(input, "utf-8");

const optimized = optimize(rawSvg, {
  path: input,
  configFile: "./svgo.config.js"
}).data;

// Extraer paths
const pathMatches = [...optimized.matchAll(/<path[^>]*d="([^"]+)"/g)];
const paths = pathMatches.map(m => m[1]);

if (!paths.length) {
  console.error("❌ No se encontraron <path> en el SVG.");
  process.exit(1);
}

// Calcular bounding box real
let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

for (const d of paths) {
  const [x1, y1, x2, y2] = svgPathBbox(d);
  minX = Math.min(minX, x1);
  minY = Math.min(minY, y1);
  maxX = Math.max(maxX, x2);
  maxY = Math.max(maxY, y2);
}

const width = maxX - minX;
const height = maxY - minY;

// 🔥 Normalizar correctamente usando svgpath
const normalizedPaths = paths.map(d =>
  svgpath(d)
    .translate(-minX, -minY)
    .round(3)
    .toString()
);

const result = {
  viewBox: `0 0 ${width} ${height}`,
  paths: normalizedPaths
};

const outputPath = input.replace(/\.svg$/, ".json");

fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));

console.log("✅ SVG normalizado correctamente");
console.log("📦 Output:", outputPath);
