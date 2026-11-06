const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'freight-tariff-calc', 'index.html');
const content = fs.readFileSync(htmlPath, 'utf8');

console.log("Analyzing index.html for JS syntax and DOM IDs...");

// Extract script tags
const scriptMatches = content.match(/<script[\s\S]*?>([\s\S]*?)<\/script>/gi);
if (!scriptMatches) {
  console.error("FAIL: No <script> tag found!");
  process.exit(1);
}

let scriptCode = "";
scriptMatches.forEach(tag => {
  // exclude external scripts if any
  if (!tag.includes('src=')) {
    const code = tag.replace(/<script[\s\S]*?>/i, '').replace(/<\/script>/i, '');
    scriptCode += code + "\n";
  }
});

// 1. Check JS Syntax using new Function
try {
  new Function(scriptCode);
  console.log("PASS: JavaScript syntax is 100% valid.");
} catch (err) {
  console.error("FAIL: JS Syntax Error:", err.message);
  process.exit(1);
}

// 2. Check DOM ID consistency
// Extract all id="..." in HTML
const idRegex = /\sid=["']([^"']+)["']/g;
const declaredIds = new Set();
let match;
while ((match = idRegex.exec(content)) !== null) {
  declaredIds.add(match[1]);
}

console.log(`Found ${declaredIds.size} declared DOM IDs.`);

// Extract all getElementById("...") in script
const getElemRegex = /getElementById\(["']([^"']+)["']\)/g;
const queriedIds = new Set();
while ((match = getElemRegex.exec(scriptCode)) !== null) {
  queriedIds.add(match[1]);
}

console.log(`Found ${queriedIds.size} queried getElementById calls.`);

const missingIds = [];
queriedIds.forEach(id => {
  if (!declaredIds.has(id)) {
    missingIds.push(id);
  }
});

if (missingIds.length > 0) {
  console.error("FAIL: Missing DOM IDs found in getElementById:", missingIds);
  process.exit(1);
} else {
  console.log("PASS: 0 missing DOM IDs! Every getElementById has a matching DOM element.");
}

console.log("ALL CHECKS PASSED SUCCESSFULLY!");
