const fs = require('fs');
let html = fs.readFileSync('legacy/index.html', 'utf8');
html = html.substring(html.indexOf('<body>') + 6, html.lastIndexOf('<script src=')).trim();
console.log(html.includes('id="stage"'));
