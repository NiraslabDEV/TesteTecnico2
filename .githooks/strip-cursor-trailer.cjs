/**
 * Remove trailers que o Cursor acrescenta à mensagem de commit.
 * Chamado por prepare-commit-msg.
 */
const fs = require("fs");
const path = process.argv[2];
if (!path || !fs.existsSync(path)) process.exit(0);

let t = fs.readFileSync(path, "utf8");
const before = t;

t = t.replace(/^Made-with:\s*.+\r?\n?/gim, "");
t = t.replace(/^Co-authored-by:\s*.+Cursor.+\r?\n?/gim, "");
t = t.replace(/^Co-authored-by:\s*.*cursoragent@.+\r?\n?/gim, "");

if (t !== before) {
  fs.writeFileSync(path, t.trimEnd() + "\n");
}
