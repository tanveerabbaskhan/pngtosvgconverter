// Reusable fix for untranslated SVG-tool runtime strings.
// The runtime translator (public/assets/site.js) falls back to English for any
// label or pattern missing from window.I18N.svg, so a string that has no entry
// in the dictionaries shows in English on localized tool pages.
// This script adds the missing entries to keys.js and all 16 locale files.
// It is IDEMPOTENT: re-running it only adds entries that are still missing,
// then verifies coverage. To fix a NEW untranslated string later, add its
// English key (and, for dynamic strings, its pattern) plus the translations
// to the ENTRIES table below and run:  node scripts/fix-i18n-runtime.cjs
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

// --- entries to ensure exist -------------------------------------------------
// exact keys: [english, {locale: translation}]
const EXACT_KEYS = [
  ['smaller', { hi: 'छोटा', es: 'más pequeño', fr: 'plus petit', de: 'kleiner', it: 'più piccolo', pt: 'menor', ru: 'меньше', ja: '小さい', ko: '더 작음', ms: 'lebih kecil', pl: 'mniejszy', id: 'lebih kecil', ar: 'أصغر', bg: 'по-малък', tr: 'daha küçük', sv: 'mindre' }],
  ['smaller than the SVG', { hi: 'SVG से छोटा', es: 'más pequeño que el SVG', fr: 'plus petit que le SVG', de: 'kleiner als das SVG', it: 'più piccolo dell’SVG', pt: 'menor que o SVG', ru: 'меньше, чем SVG', ja: 'SVGより小さい', ko: 'SVG보다 작음', ms: 'lebih kecil daripada SVG', pl: 'mniejszy niż SVG', id: 'lebih kecil dari SVG', ar: 'أصغر من SVG', bg: 'по-малък от SVG', tr: 'SVG’den daha küçük', sv: 'mindre än SVG' }],
  ['enlarged', { hi: 'बड़ा किया गया', es: 'ampliado', fr: 'agrandi', de: 'vergrößert', it: 'ingrandito', pt: 'ampliado', ru: 'увеличено', ja: '拡大', ko: '확대됨', ms: 'dibesarkan', pl: 'powiększono', id: 'diperbesar', ar: 'مُكبَّر', bg: 'уголемено', tr: 'büyütüldü', sv: 'förstorad' }],
  ['reduced', { hi: 'छोटा किया गया', es: 'reducido', fr: 'réduit', de: 'verkleinert', it: 'ridotto', pt: 'reduzido', ru: 'уменьшено', ja: '縮小', ko: '축소됨', ms: 'dikecilkan', pl: 'pomniejszono', id: 'diperkecil', ar: 'مُصغَّر', bg: 'намалено', tr: 'küçültüldü', sv: 'förminskad' }],
  ['source', { hi: 'स्रोत', es: 'fuente', fr: 'source', de: 'Quelle', it: 'origine', pt: 'origem', ru: 'источник', ja: 'ソース', ko: '원본', ms: 'sumber', pl: 'źródło', id: 'sumber', ar: 'المصدر', bg: 'източник', tr: 'kaynak', sv: 'källa' }],
];
// patterns: [regex (runtime form), {locale: replacement}] — appended to the
// END of keys.js patterns, so locale __r arrays must keep the same order.
const PATTERNS = [
  ['^([\\d.]+)× larger as (PNG|JPG|WEBP|PDF|ICO|SVG)$', { hi: '$1× $2 के रूप में बड़ा', es: '$1× más grande como $2', fr: '$1× plus grand en $2', de: '$1× größer als $2', it: '$1× più grande come $2', pt: '$1× maior como $2', ru: 'в $1 раза больше, чем $2', ja: '$1× $2として大きい', ko: '$1× $2로 더 큼', ms: '$1× lebih besar sebagai $2', pl: '$1× większy jako $2', id: '$1× lebih besar sebagai $2', ar: 'أكبر بـ$1× كـ$2', bg: '$1× по-голям като $2', tr: '$1× $2 olarak daha büyük', sv: '$1× större som $2' }],
  ['^(\\d+) embedded sizes$', { hi: '$1 एम्बेडेड आकार', es: '$1 tamaños incrustados', fr: '$1 tailles intégrées', de: '$1 eingebettete Größen', it: '$1 dimensioni incorporate', pt: '$1 tamanhos incorporados', ru: '$1 встроенных размеров', ja: '$1個の埋め込みサイズ', ko: '$1개의 내장 크기', ms: '$1 saiz terbenam', pl: '$1 rozmiarów osadzonych', id: '$1 ukuran tersemat', ar: '$1 أحجام مضمنة', bg: '$1 вградени размера', tr: '$1 gömülü boyut', sv: '$1 inbäddade storlekar' }],
  ['^(.+) vs input$', { hi: 'इनपुट की तुलना में $1', es: '$1 respecto a la entrada', fr: '$1 par rapport à l’entrée', de: '$1 gegenüber der Eingabe', it: '$1 rispetto all’input', pt: '$1 em relação à entrada', ru: '$1 по сравнению с исходником', ja: '入力と比較して$1', ko: '입력 대비 $1', ms: '$1 berbanding input', pl: '$1 względem wejścia', id: '$1 dibanding input', ar: '$1 مقارنة بالإدخال', bg: '$1 спрямо входа', tr: 'girdiye göre $1', sv: '$1 jämfört med indata' }],
];
const LOCALES = Object.keys(EXACT_KEYS[0][1]);
const filePat = (p) => p.replace(/\\/g, '\\\\'); // file text doubles backslashes
function must(cond, msg) { if (!cond) { console.error('FAIL: ' + msg); process.exit(1); } }

// --- 1. keys.js (add only what is missing) ---
{
  const f = path.join(ROOT, 'src/data/i18n/svg/keys.js');
  let s = fs.readFileSync(f, 'utf8');
  const patIdx = s.indexOf('patterns:[');
  must(patIdx > 0, 'keys.js patterns anchor not found');
  const keysClose = s.lastIndexOf(']', patIdx); // closes the keys array
  const missingKeys = EXACT_KEYS.filter(([k]) => !s.slice(0, patIdx).includes('"' + k + '"'));
  if (missingKeys.length) {
    const add = missingKeys.map(([k]) => '"' + k + '"').join(',');
    s = s.slice(0, keysClose) + ',' + add + s.slice(keysClose);
    console.log('keys.js: added keys ' + missingKeys.map(([k]) => k).join(', '));
  } else console.log('keys.js: all exact keys already present');
  const patsClose = s.lastIndexOf(']'); // closes the patterns array (last in file)
  const missingPats = PATTERNS.filter(([p]) => !s.includes('"' + filePat(p) + '"'));
  if (missingPats.length) {
    const add = missingPats.map(([p]) => '"' + filePat(p) + '"').join(',');
    s = s.slice(0, patsClose) + ',' + add + s.slice(patsClose);
    console.log('keys.js: added patterns ' + missingPats.map(([p]) => p).join(' | '));
  } else console.log('keys.js: all patterns already present');
  fs.writeFileSync(f, s);
}

// --- 2. locale files (add only what is missing) ---
for (const loc of LOCALES) {
  const f = path.join(ROOT, 'src/data/i18n/svg/' + loc + '.js');
  let s = fs.readFileSync(f, 'utf8');
  const isEs = loc === 'es';
  const patKey = isEs ? '__p:[' : '__r:[';
  const pi = s.indexOf(patKey);
  must(pi >= 0, loc + ': pattern marker not found');
  // exact keys: insert a line with the missing ones before the pattern block
  const missingExact = EXACT_KEYS.filter(([k]) => !s.slice(0, pi).includes("'" + k + "':"));
  if (missingExact.length) {
    const lineStart = s.lastIndexOf('\n', pi) + 1;
    const line = ' ' + missingExact.map(([k, t]) => "'" + k + "':'" + t[loc] + "'").join(',') + ',\n';
    s = s.slice(0, lineStart) + line + s.slice(lineStart);
    console.log(loc + '.js: added keys ' + missingExact.map(([k]) => k).join(', '));
  }
  if (isEs) {
    const ei = s.lastIndexOf(']'); // closes the __p array (last in file)
    must(ei > pi, 'es: __p end not found');
    const missing = PATTERNS.filter(([p]) => !s.includes("['" + filePat(p) + "',"));
    if (missing.length) {
      const pairs = missing.map(([p, t]) => `  ['${filePat(p)}','${t[loc]}']`).join(',\n');
      s = s.slice(0, ei) + ',\n' + pairs + s.slice(ei);
      console.log('es.js: added patterns ' + missing.map(([p]) => p).join(' | '));
    }
  } else {
    const rStart = pi;
    const rEnd = s.indexOf(']', rStart);
    must(rStart >= 0 && rEnd > rStart, loc + ': __r close not found');
    const missing = PATTERNS.filter(([, t]) => !s.slice(rStart, rEnd).includes("'" + t[loc] + "'"));
    if (missing.length) {
      s = s.slice(0, rEnd) + ',' + missing.map(([, t]) => "'" + t[loc] + "'").join(',') + s.slice(rEnd);
      console.log(loc + '.js: added patterns ' + missing.map(([p]) => p).join(' | '));
    }
  }
  fs.writeFileSync(f, s);
}

// --- 3. verify by loading the modules ---
{
  const keysPath = path.join(ROOT, 'src/data/i18n/svg/keys.js');
  delete require.cache[require.resolve(keysPath)];
  const { keys, patterns } = require(keysPath);
  console.log('keys:', keys.length, 'patterns:', patterns.length);
  const TECH = new Set(['Base64', 'CSS', 'Inkscape, Sodipodi, Illustrator, Sketch', 'viewBox']);
  for (const loc of LOCALES) {
    const lp = path.join(ROOT, 'src/data/i18n/svg/' + loc + '.js');
    delete require.cache[require.resolve(lp)];
    const d = require(lp);
    const missing = keys.filter((k) => !(k in d) && !TECH.has(k));
    must(missing.length === 0, loc + ' missing keys: ' + JSON.stringify(missing));
    const plen = loc === 'es' ? (d.__p || []).length : (d.__r || []).length;
    must(plen === patterns.length, loc + ' pattern entries: ' + plen + ' (expected ' + patterns.length + ')');
    const test = '63.4× larger as PNG';
    const pats = loc === 'es' ? d.__p : patterns.map((p, i) => [p, d.__r[i]]);
    const hit = pats.find(([p]) => new RegExp(p).test(test));
    must(hit, loc + ': larger-as pattern does not match test string');
    console.log(loc + ': OK (' + hit[1].replace('$1', '63.4').replace('$2', 'PNG') + ')');
  }
  console.log('ALL CHECKS PASSED');
}
