import fs from "fs";

const lines = fs.readFileSync("unused-assets.txt", "utf-8")
  .split("\n")
  .filter(Boolean);

for (const file of lines) {
  fs.unlinkSync(file);
  console.log("🗑️  Deleted:", file);
}

console.log(`\n✅ ${lines.length} file dihapus.`);