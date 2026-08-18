import fs from "fs";
import path from "path";
import { glob } from "glob";

const IMAGE_DIR = "./public/images";
const CODE_DIRS = ["./src/**/*.{ts,tsx,js,jsx,css,svg}"];

function getAllAssets(dir) {
  const results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      results.push(...getAllAssets(fullPath));
    } else {
      results.push(fullPath);
    }
  }
  return results;
}

async function getAllCodeContent() {
  const files = await glob(CODE_DIRS);
  let content = "";
  for (const file of files) {
    content += fs.readFileSync(file, "utf-8");
  }
  return content;
}

function isUsed(assetPath, codeContent) {
  const normalized = assetPath.replace(/\\/g, "/").replace("./public", "");
  const filename = path.basename(assetPath);
  return codeContent.includes(normalized) || codeContent.includes(filename);
}

async function main() {
  const assets = getAllAssets(IMAGE_DIR);
  const codeContent = await getAllCodeContent();
  const unused = assets.filter((a) => !isUsed(a, codeContent));

  if (unused.length === 0) {
    console.log("✅ Semua aset terpakai!");
    return;
  }

  console.log(`\n🗑️  Aset tidak terpakai (${unused.length} file):\n`);
  unused.forEach((f) => console.log(" -", f));

  fs.writeFileSync("unused-assets.txt", unused.join("\n"), "utf-8");
  console.log("\n📄 Daftar disimpan ke unused-assets.txt");
  console.log('💡 Kalau sudah yakin, jalankan: node delete-unused.mjs');
}

main();