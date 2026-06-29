const fs = require('fs');
const js = fs.readFileSync('legacy/script.js', 'utf8');
const urls = [...js.matchAll(/src:"(.*?)"/g)].map(m => m[1]);
console.log(urls.join('\n'));
