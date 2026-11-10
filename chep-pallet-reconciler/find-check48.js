const fs = require('fs');
const content = fs.readFileSync('c:/Users/fanam/Downloads/hallmark/skills/hallmark/scripts/sloplint.mjs', 'utf8');
const lines = content.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('function check48')) {
    console.log(idx, lines.slice(idx, idx + 45).join('\n'));
  }
});
