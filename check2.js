const fs = require('fs');
const content = fs.readFileSync('src/components/Portfolio.tsx', 'utf8');
console.log('stage included in Portfolio.tsx:', content.includes('id="stage"'));
