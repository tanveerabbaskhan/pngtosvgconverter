import fs from 'node:fs';
const rel = process.argv[2];
const norm = (h) => h.replace(/<!--[\s\S]*?-->/g, '').replace(/\s*\n\s*/g, '').replace(/>\s+</g, '><').replace(/ \/>/g, '>').replace(/\s+/g, ' ').trim();
const get = (f) => norm((fs.readFileSync(f, 'utf8').match(/<main id="main">([\s\S]*?)<\/main>/) || [])[1] || '');
const a = get('../' + rel), b = get('dist/' + rel);
let i = 0; while (i < a.length && a[i] === b[i]) i++;
console.log('len', a.length, b.length, 'first diff at', i);
console.log('OLD:', a.slice(i - 80, i + 160));
console.log('NEW:', b.slice(i - 80, i + 160));
