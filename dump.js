const fs = require('fs');
const content = fs.readFileSync('src/components/Portfolio.tsx', 'utf8');
const htmlMatch = content.match(/__html: `([\s\S]*?)`/);
if(htmlMatch) {
  const html = htmlMatch[1];
  console.log("HTML length:", html.length);
  console.log("Contains id='stage':", html.includes('id="stage"'));
  console.log("Contains stage:", html.includes('stage'));
}
