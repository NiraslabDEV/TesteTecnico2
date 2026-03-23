import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jsonl =
  "C:/Users/Gabriel/.cursor/projects/c-Users-Gabriel-Desktop-Projeto-Tecnico/agent-transcripts/df2eb0ed-559f-4a3d-869a-604c9341d466/df2eb0ed-559f-4a3d-869a-604c9341d466.jsonl";

const lines = fs.readFileSync(jsonl, "utf8").split("\n");
let found = "";
for (const line of lines) {
  if (!line.includes("filter0_d_116_106")) continue;
  try {
    const o = JSON.parse(line);
    const t = o.message?.content?.[0]?.text ?? "";
    if (t.includes("<svg width")) {
      found = t;
      break;
    }
  } catch {
    /* skip */
  }
}

if (!found) {
  console.error("Message with SVGs not found");
  process.exit(1);
}

const re = /<svg[\s\S]*?<\/svg>/g;
const svgs = [...found.matchAll(re)].map((m) => m[0]);
console.log("SVG count:", svgs.length);
svgs.forEach((s, i) => console.log(i, "length", s.length));

const outDir = path.join(__dirname, "../public/services");
fs.mkdirSync(outDir, { recursive: true });

/** Ordem no paste do utilizador → mapeamento para ordem da página */
const names = [
  "earthworks", // 116_106 blue — utilizador disse que é Earthworks
  "sanitation", // 116_95 white droplet
  "roads-transportation", // 116_84 blue buildings/infra
  "civil-construction", // 116_49 white building
  "hydrology", // 116_62 blue network
  "ports-waterways", // 116_73 white compass
];

if (svgs.length !== 6) {
  console.error("Expected 6 SVGs, got", svgs.length);
  process.exit(1);
}

for (let i = 0; i < 6; i++) {
  const file = path.join(outDir, `${names[i]}.svg`);
  fs.writeFileSync(file, svgs[i], "utf8");
  console.log("Wrote", file);
}
