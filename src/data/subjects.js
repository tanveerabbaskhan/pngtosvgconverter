// Unique vector subjects (viewBox 0 0 400 300). Each is also the live sample for its page.
const S={};
const star=(cx,cy,R,r,n,rot=-90)=>{let p='';for(let i=0;i<n*2;i++){const a=(Math.PI*i/n)+rot*Math.PI/180,d=i%2?r:R;p+=(i?'L':'M')+(cx+Math.cos(a)*d).toFixed(1)+' '+(cy+Math.sin(a)*d).toFixed(1)}return p+'Z'};
const gear=(cx,cy,teeth,R,r)=>{let p='';for(let i=0;i<teeth;i++){const a=i/teeth*Math.PI*2,w=Math.PI/teeth*.55;[[a-w,r],[a-w*.7,R],[a+w*.7,R],[a+w,r]].forEach(([t,d],k)=>{p+=(i||k?'L':'M')+(cx+Math.cos(t)*d).toFixed(1)+' '+(cy+Math.sin(t)*d).toFixed(1)})}return p+'Z'};

S.sunsetPhoto=`<defs><linearGradient id="a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b1b5e"/><stop offset=".55" stop-color="#e2506a"/><stop offset="1" stop-color="#ffb35c"/></linearGradient><radialGradient id="b"><stop offset="0" stop-color="#fff6c4"/><stop offset="1" stop-color="#ffd27a"/></radialGradient></defs><rect width="400" height="300" fill="url(#a)"/><circle cx="215" cy="172" r="52" fill="url(#b)"/><path d="M0 205 L70 150 L130 192 L205 138 L285 196 L342 160 L400 205 V300 H0Z" fill="#3a2260"/><path d="M0 240 Q100 208 200 238 T400 230 V300 H0Z" fill="#1d1240"/><g fill="#1d1240"><path d="M70 70q8-9 16 0q8-9 16 0q-8 3-16 8q-8-5-16-8z"/><path d="M130 48q6-7 12 0q6-7 12 0q-6 2-12 6q-6-4-12-6z"/></g>`;
S.leaf=`<rect width="400" height="300" fill="#e7f6ea"/><path d="M200 34C310 86 342 196 200 272C58 196 90 86 200 34Z" fill="#35b36d"/><path d="M200 34C310 86 342 196 200 272Z" fill="#259056"/><path d="M200 56V292" stroke="#e7f6ea" stroke-width="6" stroke-linecap="round"/><g stroke="#e7f6ea" stroke-width="4" stroke-linecap="round"><path d="M200 120L250 90M200 160L258 124M200 200L246 170"/><path d="M200 120L150 90M200 160L142 124M200 200L154 170" opacity=".85"/></g><circle cx="330" cy="70" r="14" fill="#ffd166"/><circle cx="70" cy="240" r="9" fill="#ffd166"/>`;
S.gifFace=`<rect width="400" height="300" fill="#7c3aed"/><g fill="#a78bfa"><circle cx="60" cy="50" r="24"/><circle cx="350" cy="250" r="30"/><circle cx="340" cy="60" r="12"/></g><circle cx="200" cy="152" r="104" fill="#ffd23f"/><circle cx="162" cy="130" r="14" fill="#1b1035"/><circle cx="238" cy="130" r="14" fill="#1b1035"/><circle cx="167" cy="125" r="4" fill="#fff"/><circle cx="243" cy="125" r="4" fill="#fff"/><path d="M142 180Q200 250 258 180" fill="none" stroke="#1b1035" stroke-width="9" stroke-linecap="round"/><circle cx="130" cy="170" r="16" fill="#ff8fa3"/><circle cx="270" cy="170" r="16" fill="#ff8fa3"/>`;
S.retroWindow=`<rect width="400" height="300" fill="#008080"/><rect x="40" y="36" width="320" height="220" fill="#c0c0c0" stroke="#000" stroke-width="2"/><rect x="44" y="40" width="312" height="26" fill="#000080"/><rect x="54" y="48" width="90" height="10" fill="#fff"/><g fill="#c0c0c0" stroke="#000"><rect x="318" y="44" width="16" height="16"/><rect x="338" y="44" width="16" height="16"/></g><rect x="56" y="82" width="288" height="150" fill="#fff" stroke="#000"/><rect x="72" y="98" width="70" height="54" fill="#ff0000"/><circle cx="196" cy="125" r="28" fill="#0000ff"/><path d="M250 152L282 98L314 152Z" fill="#008000"/><rect x="72" y="172" width="240" height="8" fill="#000"/><rect x="72" y="190" width="170" height="8" fill="#808080"/><rect x="72" y="208" width="200" height="8" fill="#808080"/>`;
S.mountains=`<defs><linearGradient id="a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a9d6ff"/><stop offset="1" stop-color="#e8f5ff"/></linearGradient></defs><rect width="400" height="300" fill="url(#a)"/><circle cx="318" cy="70" r="26" fill="#fff7d1"/><path d="M-10 230L90 90L170 200L230 120L330 230Z" fill="#6f93bf"/><path d="M90 90L120 134L96 128L82 150L62 128L72 118Z" fill="#fff"/><path d="M120 230L220 60L330 230Z" fill="#4a6f9c"/><path d="M220 60L246 106L228 100L214 124L198 100L204 96Z" fill="#fff"/><path d="M0 230H400V300H0Z" fill="#7fb7e6"/><path d="M0 250Q100 236 200 250T400 246V300H0Z" fill="#5b9fd6"/>`;
S.favicon=`<rect x="40" y="20" width="320" height="260" rx="60" fill="#ffb703"/><rect x="40" y="20" width="320" height="130" rx="60" fill="#ffc933"/><path d="M222 50L132 172H192L172 252L272 120H210Z" fill="#1d1d1d"/>`;
S.landscape=`<defs><linearGradient id="a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6ec1ff"/><stop offset="1" stop-color="#d7f0ff"/></linearGradient></defs><rect width="400" height="300" fill="url(#a)"/><circle cx="320" cy="64" r="30" fill="#ffe27a"/><g fill="#fff"><ellipse cx="90" cy="70" rx="40" ry="14"/><ellipse cx="116" cy="60" rx="26" ry="14"/><ellipse cx="250" cy="110" rx="34" ry="11"/></g><path d="M0 200Q100 140 200 190T400 170V300H0Z" fill="#5dbb63"/><path d="M0 240Q120 200 240 238T400 226V300H0Z" fill="#3a9d4f"/><rect x="88" y="168" width="12" height="46" fill="#7a4b2a"/><circle cx="94" cy="150" r="30" fill="#2e8b4a"/><circle cx="76" cy="166" r="20" fill="#2e8b4a"/><circle cx="114" cy="166" r="20" fill="#2e8b4a"/>`;
S.logoMark=`<rect width="400" height="300" fill="#fff"/><path d="M200 36L292 90V190L200 244L108 190V90Z" fill="#4f46e5"/><path d="M200 36L292 90L200 140L108 90Z" fill="#6d66f5"/><path d="M200 140L292 90V190L200 244Z" fill="#3730a3"/><circle cx="200" cy="140" r="34" fill="#fff"/><circle cx="200" cy="140" r="16" fill="#22d3ee"/><rect x="110" y="262" width="180" height="12" rx="6" fill="#1e1b4b"/>`;
S.sketchHouse=`<rect width="400" height="300" fill="#f6f2e7"/><g fill="none" stroke="#33332f" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M92 150L200 62L308 150"/><path d="M94 153L201 65L306 152" opacity=".6"/><path d="M110 140V248H290V140"/><path d="M112 143V251H287V142" opacity=".55"/><path d="M180 248V190H222V248"/><path d="M140 168H168V196H140ZM240 168H268V196H240Z"/><path d="M154 168V196M140 182H168M254 168V196M240 182H268"/><path d="M60 252H340M80 258H300" opacity=".7"/><path d="M270 98V70H288V112"/></g><g stroke="#33332f" stroke-width="1.4" opacity=".55"><path d="M118 214L170 206M120 224L168 218M122 234L166 230M236 214L284 208M238 226L284 222"/><path d="M130 104L176 80M138 118L190 86M150 128L206 90"/></g>`;
S.drawingCat=`<rect width="400" height="300" fill="#fffdf6"/><g fill="none" stroke="#222" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M110 120L104 40L168 86Q200 78 232 86L296 40L290 120Q312 160 296 206Q264 262 200 262Q136 262 104 206Q88 160 110 120Z" fill="#ffb15c"/><path d="M126 66L136 94M274 66L264 94" stroke="#ff7f50"/><ellipse cx="164" cy="156" rx="14" ry="18" fill="#222"/><ellipse cx="236" cy="156" rx="14" ry="18" fill="#222"/><path d="M190 190L200 200L210 190Z" fill="#ff5d73" stroke="#222"/><path d="M200 200V214M176 222Q200 240 200 214Q200 240 224 222"/><path d="M130 192L70 182M130 206L72 214M270 192L330 182M270 206L328 214"/></g><g stroke="#ff7f50" stroke-width="3" opacity=".7"><path d="M140 110L170 100M150 124L186 112M214 112L250 124M232 100L262 110"/></g>`;
S.gearIcon=`<rect width="400" height="300" fill="#e6fffa"/><rect x="80" y="30" width="240" height="240" rx="56" fill="#14b8a6"/><path d="${gear(200,150,10,92,72)}" fill="#fff"/><circle cx="200" cy="150" r="34" fill="#14b8a6"/><circle cx="200" cy="150" r="14" fill="#fff"/>`;
S.signature=`<rect width="400" height="300" fill="#fff"/><g fill="none" stroke="#1b2a6b" stroke-linecap="round" stroke-linejoin="round"><path d="M52 196C78 90 118 76 112 140S86 240 140 176S190 108 204 168S240 208 274 144C300 98 336 118 306 168S250 236 352 182" stroke-width="6"/><path d="M62 244C150 218 262 252 346 224" stroke-width="3.5"/><path d="M150 118C160 100 176 96 178 110" stroke-width="3"/></g>`;
S.scannedDoc=`<rect width="400" height="300" fill="#f0e9d0"/><g transform="rotate(-1.4 200 150)"><rect x="40" y="34" width="190" height="20" fill="#3a3a3a"/><g fill="#5a5a5a"><rect x="40" y="82" width="320" height="7"/><rect x="40" y="100" width="300" height="7"/><rect x="40" y="118" width="318" height="7"/><rect x="40" y="136" width="260" height="7"/><rect x="40" y="168" width="320" height="7"/><rect x="40" y="186" width="290" height="7"/><rect x="40" y="204" width="312" height="7"/><rect x="40" y="222" width="180" height="7"/></g><g fill="none" stroke="#b3261e" stroke-width="5"><circle cx="318" cy="52" r="30"/><circle cx="318" cy="52" r="20" stroke-width="2.5"/></g></g>`;
S.clipart=`<ellipse cx="200" cy="130" rx="86" ry="104" fill="#ef476f"/><ellipse cx="170" cy="100" rx="22" ry="38" fill="#ff8fa3" opacity=".7"/><path d="M190 232L200 248L210 232Z" fill="#c9304f"/><path d="M200 248C180 270 220 276 200 296" fill="none" stroke="#6b7280" stroke-width="4" stroke-linecap="round"/><path d="${star(330,66,30,13,5)}" fill="#ffd166" stroke="#e0a800" stroke-width="4" stroke-linejoin="round"/><g fill="#fff" stroke="#9fb3c8" stroke-width="4"><path d="M44 120a24 24 0 0 1 44-10a28 28 0 0 1 50 14a20 20 0 0 1-6 40H56a24 24 0 0 1-12-44Z"/></g>`;
S.bwPortrait=`<rect width="400" height="300" fill="#fff"/><circle cx="200" cy="130" r="108" fill="#000"/><path d="M0 230L80 150L140 210L210 120L290 220L350 170L400 230V300H0Z" fill="#fff"/><path d="M0 258Q100 226 200 256T400 246V300H0Z" fill="#000"/><g fill="#000"><circle cx="70" cy="60" r="10"/><circle cx="330" cy="46" r="7"/><circle cx="352" cy="96" r="5"/></g><path d="M120 262l40-26 36 26" fill="#fff"/>`;
S.colorBird=`<rect width="400" height="300" fill="#fff4dc"/><path d="M40 238Q200 214 360 244" fill="none" stroke="#6a4c2e" stroke-width="12" stroke-linecap="round"/><path d="M110 236c26-30 56-24 70-6z" fill="#52b788"/><path d="M286 240c-20-30-50-26-64-4z" fill="#2d6a4f"/><path d="M96 168L40 130L56 176Z" fill="#3a86ff"/><path d="M90 172L30 168L62 196Z" fill="#8338ec"/><ellipse cx="190" cy="160" rx="100" ry="70" fill="#ff5d73"/><path d="M130 170Q190 90 250 170Q200 214 130 170Z" fill="#ffb703"/><circle cx="262" cy="108" r="46" fill="#ff5d73"/><circle cx="276" cy="100" r="9" fill="#111"/><circle cx="279" cy="97" r="3" fill="#fff"/><path d="M300 112L346 124L300 136Z" fill="#fb8500"/><path d="M240 62q4-26 24-30q-4 20-8 34z" fill="#3a86ff"/>`;
S.lineArtFlower=`<rect width="400" height="300" fill="#fff"/><g fill="none" stroke="#111" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(200 112)">${[0,45,90,135,180,225,270,315].map(a=>`<ellipse cx="0" cy="-54" rx="21" ry="42" transform="rotate(${a})"/>`).join('')}<circle r="26"/><circle r="14"/></g><path d="M200 170C196 220 204 252 200 296"/><path d="M200 232C160 222 138 196 134 168C168 172 192 198 200 232Z"/><path d="M200 252C240 244 266 222 270 196C236 200 208 222 200 252Z"/></g>`;
const pxArt=['................','................','...X........X...','....X......X....','...XXXXXXXXXX...','..XXX.XXXX.XXX..','.XXXXXXXXXXXXXX.','.X.XXXXXXXXXX.X.','.X.X........X.X.','....XX....XX....','................','................'];
S.pixelSprite=`<rect width="400" height="300" fill="#1b1033"/>`+pxArt.map((row,y)=>row.split('').map((c,x)=>c==='X'?`<rect x="${x*25}" y="${y*25}" width="25" height="25" fill="${(y===5&&(x===3||x===5||x===10||x===12))?'#ffffff':(y>=8?'#ff5d73':(y===2||y===3)?'#8cff6a':'#39d353')}"/>`:'').join('')).join('')+`<rect x="150" y="125" width="25" height="25" fill="#1b1033"/><rect x="225" y="125" width="25" height="25" fill="#1b1033"/>`;
S.transparentStar=`<ellipse cx="200" cy="268" rx="96" ry="14" fill="#000" opacity=".28"/><path d="${star(200,146,118,52,5)}" fill="#ffc233" stroke="#f08a00" stroke-width="8" stroke-linejoin="round"/><path d="${star(200,146,70,31,5)}" fill="#ffe08a"/><g fill="#ff8fa3"><circle cx="64" cy="70" r="10"/><circle cx="342" cy="58" r="7"/><circle cx="352" cy="230" r="9"/></g>`;
S.outlineShape=`<rect width="400" height="300" fill="#fff"/><g stroke="#111" stroke-width="9" stroke-linejoin="round" fill="#e4e4e4"><circle cx="140" cy="140" r="86"/><rect x="170" y="72" width="170" height="150" rx="34" fill="#cfcfcf"/><path d="M96 262L196 186L296 262Z" fill="#bdbdbd"/></g>`;
S.monoWave=`<rect width="400" height="300" fill="#eaf5ff"/><path d="M0 120Q100 60 200 120T400 110V300H0Z" fill="#b8defa"/><path d="M0 160Q100 100 200 160T400 150V300H0Z" fill="#5aa9e6"/><path d="M0 200Q100 140 200 200T400 190V300H0Z" fill="#1d6fa8"/><path d="M0 244Q100 190 200 244T400 236V300H0Z" fill="#0b3d66"/><circle cx="310" cy="64" r="28" fill="#0b3d66"/>`;
S.handDoodle=`<rect width="400" height="300" fill="#fffef6"/><g fill="none" stroke="#222" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M96 140c-6-40 52-52 62-14s-36 52-52 22s20-48 40-30"/><path d="M60 70l8 26 26 2-20 16 8 26-22-14-22 14 8-26-20-16 26-2z" transform="translate(30 -12)"/><path d="M230 70c40-30 90-20 110 14"/><path d="M322 74l22 8-12 20"/><circle cx="270" cy="190" r="52"/><circle cx="252" cy="178" r="5" fill="#222"/><circle cx="288" cy="178" r="5" fill="#222"/><path d="M246 206q24 24 48 0"/><path d="M60 250c40-26 80 22 120-4s60 12 100-6"/></g><path d="M60 118l6 8-10 2z" fill="#ff7f50"/>`;
S.photoPortrait=`<defs><linearGradient id="a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3b6e8f"/><stop offset="1" stop-color="#16243b"/></linearGradient><radialGradient id="b" cx=".4" cy=".35"><stop offset="0" stop-color="#ffd9b8"/><stop offset="1" stop-color="#d89a72"/></radialGradient><linearGradient id="c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e86a5a"/><stop offset="1" stop-color="#9b2d3b"/></linearGradient></defs><rect width="400" height="300" fill="url(#a)"/><ellipse cx="200" cy="318" rx="150" ry="110" fill="url(#c)"/><rect x="176" y="190" width="48" height="50" fill="#d89a72"/><ellipse cx="200" cy="130" rx="64" ry="78" fill="url(#b)"/><path d="M134 118Q140 40 200 42Q264 42 266 118Q240 70 200 76Q160 70 134 118Z" fill="#2c1a14"/><circle cx="176" cy="132" r="5" fill="#2c1a14"/><circle cx="224" cy="132" r="5" fill="#2c1a14"/><path d="M180 174Q200 188 220 174" fill="none" stroke="#a6544a" stroke-width="5" stroke-linecap="round"/>`;
S.rasterBlobs=`<rect width="400" height="300" fill="#101828"/><circle cx="120" cy="120" r="80" fill="#ff5d73"/><circle cx="230" cy="170" r="92" fill="#3a86ff" opacity=".9"/><rect x="250" y="40" width="110" height="110" rx="24" fill="#ffd166"/><path d="M40 270L110 200L170 270Z" fill="#06d6a0"/><circle cx="300" cy="240" r="30" fill="#c77dff"/>`;

// SVG tool samples (full svg strings)
const wrap=(inner,extra='')=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300"${extra}>${inner}</svg>`;
const T={};
T.optimizeBloated=()=>{
  const pts=(n,R,r)=>{let p='';for(let i=0;i<n*2;i++){const a=Math.PI*i/n-Math.PI/2,d=i%2?r:R;p+=(i?'L':'M')+(200+Math.cos(a)*d).toFixed(6)+' '+(150+Math.sin(a)*d).toFixed(6)}return p+'Z'};
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" viewBox="0 0 400 300" width="400.000000" height="300.000000" inkscape:version="1.2" sodipodi:docname="badge.svg">
  <!-- background layer -->
  <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:zoom="0.7" inkscape:cx="200" inkscape:cy="150"/>
  <metadata id="metadata5">
    <rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:title>badge</dc:title><dc:creator>Someone</dc:creator></cc:Work></rdf:RDF>
  </metadata>
  <defs id="defs3"/>
  <rect id="rect10" x="0.000000" y="0.000000" width="400.000000" height="300.000000" fill="#FFFFFF" inkscape:label="bg"/>
  <!-- the badge -->
  <circle id="circle12" cx="200.000000" cy="150.000000" r="118.500000" fill="#FFB703" stroke="#FB8500" stroke-width="8.000000"/>
  <path id="path14" d="${pts(5,92,40)}" fill="#023047" inkscape:label="star"/>
  <circle cx="200.000000" cy="150.000000" r="22.000000" fill="#FFFFFF"/>
</svg>
`};
T.minifySpaced=()=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">

  <!-- Sky -->
  <rect x="0" y="0" width="400" height="300" fill="#bfe3ff"/>

  <!-- Sun -->
  <circle cx="310" cy="70" r="30" fill="#ffd166"/>

  <!-- Hills -->
  <path
    d="M 0 220
       Q 100 150 200 210
       T 400 190
       V 300
       H 0 Z"
    fill="#52b788"
  />

  <path
    d="M 0 255
       Q 120 215 240 252
       T 400 240
       V 300
       H 0 Z"
    fill="#2d6a4f"
  />

</svg>
`;
T.resizeIcon=()=>wrap(S.logoMark);
T.cropWhitespace=()=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300"><rect width="400" height="300" fill="#f8fafc"/><g transform="translate(120 85)"><rect width="160" height="130" rx="22" fill="#6366f1"/><path d="M30 92L68 46L98 80L116 58L132 92Z" fill="#fff"/><circle cx="112" cy="38" r="12" fill="#fde047"/></g></svg>`;
T.colorBadge=()=>wrap(`<rect width="400" height="300" fill="#fff7ed"/><circle cx="200" cy="150" r="110" fill="#f97316"/><circle cx="200" cy="150" r="78" fill="#fde68a"/><circle cx="200" cy="150" r="46" fill="#0ea5e9"/><rect x="60" y="250" width="280" height="14" rx="7" fill="#7c3aed"/><path d="M60 60L100 30L110 76Z" fill="#10b981"/><path d="M340 60L300 30L290 76Z" fill="#ec4899"/>`);
T.logoOnWhite=()=>wrap(`<rect width="400" height="300" fill="#ffffff"/>${S.logoMark.replace(/^<rect[^>]*\/>/,'')}`);
T.viewerScene=()=>wrap(S.landscape);
T.encodeIcon=()=>wrap(`<rect width="400" height="300" fill="#eef2ff"/><circle cx="200" cy="150" r="96" fill="#6366f1"/><path d="M200 84V150L248 178" fill="none" stroke="#fff" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>`);
T.encodeIcon2=()=>wrap(`<rect x="60" y="40" width="280" height="220" rx="40" fill="#0ea5e9"/><path d="M120 190L170 120L210 170L240 140L290 190Z" fill="#fff"/><circle cx="262" cy="98" r="18" fill="#fde047"/>`);
T.minifiedOneLine=()=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8b5cf6"/><stop offset="1" stop-color="#06b6d4"/></linearGradient></defs><g><rect width="400" height="300" fill="#0f172a"/><g transform="translate(200 150)"><circle r="96" fill="url(#g)"/><path d="M-40 -10L0 -50L40 -10M-40 30L0 -10L40 30" fill="none" stroke="#fff" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/></g></g></svg>`;
T.invalid=()=>`<svg viewBox="0 0 400 300" onclick="alert(1)"><script>console.log('hi')</script><defs><linearGradient id="a"><stop offset="0" stop-color="#f43f5e"/><stop offset="1" stop-color="#fb923c"/></linearGradient></defs><rect id="box" width="400" height="300" fill="url(#missing)"/><circle id="box" cx="200" cy="150" r="90" fill="url(#a)"/><path d="" fill="#000"/><image href="https://example.com/photo.png" width="40" height="40"/></svg>`;
T.metaDirty=()=>`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" viewBox="0 0 400 300" width="400" height="300" inkscape:version="1.2.2 (b0a8486541, 2022-12-01)" sodipodi:docname="private-project-final.svg">
<title>Private project – final v7</title>
<desc>Created by Jane Doe in Sketch 99</desc>
<sodipodi:namedview pagecolor="#ffffff" inkscape:window-width="1920" inkscape:window-height="1017" inkscape:pagecheckerboard="0"/>
<metadata><rdf:RDF><cc:Work rdf:about=""><dc:creator><cc:Agent><dc:title>Jane Doe</dc:title></cc:Agent></dc:creator><dc:date>2024-03-02</dc:date></cc:Work></rdf:RDF></metadata>
<!-- internal note: client logo, do not share -->
<rect width="400" height="300" fill="#fef3c7" data-name="background" sketch:type="MSPage"/>
<path data-name="mark" inkscape:label="mark" d="M200 40L320 120L270 250H130L80 120Z" fill="#f59e0b"/>
<circle cx="200" cy="150" r="40" fill="#fff" data-layer="eye"/>
</svg>
`;
T.docInvoice=()=>wrap(`<rect width="400" height="300" fill="#e2e8f0"/><rect x="90" y="16" width="220" height="270" rx="8" fill="#fff"/><rect x="110" y="40" width="80" height="14" rx="4" fill="#0f172a"/><g fill="#94a3b8"><rect x="110" y="76" width="180" height="7" rx="3"/><rect x="110" y="94" width="150" height="7" rx="3"/><rect x="110" y="112" width="170" height="7" rx="3"/></g><g fill="#6366f1"><rect x="110" y="150" width="180" height="26" rx="6"/></g><g fill="#cbd5e1"><rect x="110" y="190" width="120" height="7" rx="3"/><rect x="110" y="208" width="90" height="7" rx="3"/></g><rect x="214" y="236" width="76" height="26" rx="6" fill="#10b981"/>`);

module.exports={S,T,wrap};
