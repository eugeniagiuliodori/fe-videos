import fs from "fs"
import path from "path"
import { optimize } from "svgo"

const inputPath = path.resolve("src/assets/logo/logo.svg")
const outputPath = path.resolve("src/assets/logo/logoPaths.ts")

// Leer SVG original
const rawSvg = fs.readFileSync(inputPath, "utf8")

// Optimizar y normalizar con SVGO
const result = optimize(rawSvg, {
  multipass: true,
  plugins: [
    "removeDimensions",
    "convertTransform",
    "convertPathData",
    "mergePaths",
    {
      name: "removeAttrs",
      params: {
        attrs: "(fill|stroke|style)"
      }
    }
  ]
})

const optimizedSvg = result.data

// Extraer viewBox
const viewBoxMatch = optimizedSvg.match(/viewBox="([^"]+)"/)
const viewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24"

// Extraer todos los paths
const pathMatches = [...optimizedSvg.matchAll(/<path[^>]*d="([^"]+)"[^>]*>/g)]
const paths = pathMatches.map(match => match[1])

// Generar archivo TypeScript
const fileContent = `export const logoPaths = {
  viewBox: "${viewBox}",
  paths: ${JSON.stringify(paths, null, 2)}
} as const
`

fs.writeFileSync(outputPath, fileContent)

console.log("✅ logoPaths.ts generado correctamente")
