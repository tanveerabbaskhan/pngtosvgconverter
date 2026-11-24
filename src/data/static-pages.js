// Essential pages (English). Legal text is complete but should be reviewed by the site owner.
const S=require('./site');
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const nice=d=>new Date(d+'T00:00:00Z').toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'});
const UPDATED=nice(S.UPDATED);
const mail=`<a href="mailto:${S.EMAIL}">${S.EMAIL}</a>`;

const about={
 slug:'about-us',type:'AboutPage',about:true,
 title:'About Us | pngtosvgconverter.com',
 desc:'Learn who runs pngtosvgconverter.com, why it exists, how the free in-browser PNG to SVG converter works, and the principles behind it.',
 h1:'About pngtosvgconverter.com',
 lead:'A free, private toolkit for turning images into clean, scalable SVG, built to run entirely in your browser.',
 crumb:'About us',
 body:`<h2>Who runs this site</h2>
<p>pngtosvgconverter.com is an independent web-tools project maintained by the pngtosvgconverter.com team. We build small, focused graphics utilities for designers, developers, makers and anyone who needs a vector version of an image without installing software or creating an account.</p>
<h2>Why it exists</h2>
<p>Turning a pixel image into a vector usually means paying for desktop software or uploading private artwork to a stranger’s server. We wanted a better option: a converter that is free, fast, shows you the result as you adjust it, and never receives your files.</p>
<h2>What you can do here</h2>
<ul>
<li><strong>Image to SVG:</strong> convert PNG, JPG, WebP, GIF, BMP, AVIF and more into scalable vectors, with presets for logos, icons, line art, signatures, scans, clipart and pixel art.</li>
<li><strong>SVG to image:</strong> export an SVG as PNG, JPG, WebP, PDF or a multi-size ICO.</li>
<li><strong>SVG tools:</strong> compress, optimize, resize, crop, recolor, validate, format, minify and inspect SVG code.</li>
</ul>
<p>Every tool has its own page, listed in the <a href="../sitemap/">sitemap</a> and on the <a href="../#all">home page</a>.</p>
<h2>How the technology works</h2>
<p>The PNG to SVG converter uses well-documented techniques rather than a black box. Colors are reduced with a median-cut palette refined by k-means. Each color becomes a stacked layer whose outline is found with marching squares at sub-pixel accuracy, and the outlines are fitted with cubic Bézier curves using Schneider’s curve-fitting algorithm. All of it is JavaScript running in your browser, so the result updates live as you move a slider. The home page explains each stage in detail.</p>
<h2>Our principles</h2>
<ul>
<li><strong>Privacy first.</strong> Conversion happens on your device. Your images and SVG files are never uploaded. See our <a href="../privacy/">Privacy Policy</a>.</li>
<li><strong>Honest results.</strong> Vectors suit logos, icons, illustrations and line art best. We say plainly that photographs become stylized, posterized art, and we show the file size so you can judge the result yourself.</li>
<li><strong>Free and simple.</strong> No account, no watermark, no daily limits.</li>
<li><strong>Accessible and fast.</strong> Pages are lightweight, work on phones and keyboards, and use standard, open file formats.</li>
</ul>
<h2>Quality and updates</h2>
<p>We test the converter against a library of built-in samples that cover logos, icons, illustrations, scanned pages, signatures and pixel art, and we keep improving the tracing engine and the guidance on each page. If something looks wrong with your file, tell us.</p>
<h2>Get in touch</h2>
<p>Questions, bug reports or ideas for a new tool? Use the <a href="../contact-us/">contact page</a> or email ${mail}.</p>`
};

const contact={
 slug:'contact-us',type:'ContactPage',
 title:'Contact Us | pngtosvgconverter.com',
 desc:'Contact pngtosvgconverter.com for questions, bug reports, feature ideas or privacy requests. Send a message with the form or email us directly.',
 h1:'Contact us',
 lead:'Questions, bug reports or ideas for a new tool? Send us a message and we will get back to you.',
 crumb:'Contact us',
 body:`<p>The fastest way to help us fix a problem is to include the page you used, your browser and device, and what you expected to happen. If a particular image triggers the issue, describe it or mention its type and size. Please do not send confidential files.</p>
<form class="cform" data-contact data-endpoint="${esc(S.CONTACT_ENDPOINT)}" data-email="${S.EMAIL}" data-sending="Sending your message…" data-success="Thank you. Your message was sent." data-success-mailto="Your email app should open with the message ready to send. If nothing opens, write to us directly at ${S.EMAIL}." data-error="Sorry, the message could not be sent. Please email us directly at ${S.EMAIL}." data-invalid="Please enter your name, a valid email address and a message." novalidate>
<div class="field"><label for="cf-name">Name</label><input id="cf-name" name="name" type="text" autocomplete="name" required maxlength="120"></div>
<div class="field"><label for="cf-email">Email</label><input id="cf-email" name="email" type="email" autocomplete="email" required maxlength="160"></div>
<div class="field"><label for="cf-msg">Message</label><textarea id="cf-msg" name="message" rows="7" required maxlength="4000"></textarea></div>
<div class="hp" aria-hidden="true"><label>Leave this field empty<input name="website" type="text" tabindex="-1" autocomplete="off"></label></div>
<button class="btn primary lg" type="submit" data-submit>Send message</button>
<p class="form-status" role="status" aria-live="polite" data-status></p>
</form>
<h2>Prefer email?</h2>
<p>Write to us directly at ${mail}. For privacy requests, put “Privacy request” in the subject line.</p>
<p>We aim to reply within a few business days.</p>`
};

const terms={
 slug:'terms',type:'WebPage',
 title:'Terms & Conditions | pngtosvgconverter.com',
 desc:'The terms of use for pngtosvgconverter.com: acceptable use, your files and content, disclaimers, limits of liability and how the terms may change.',
 h1:'Terms & Conditions',
 lead:`Last updated: ${UPDATED}`,
 crumb:'Terms & Conditions',
 body:`<p>These Terms & Conditions (“Terms”) govern your use of pngtosvgconverter.com and its tools (the “Service”). By using the Service you agree to these Terms. If you do not agree, please do not use it.</p>
<h2>1. The Service</h2>
<p>The Service provides free online tools for converting and editing images and SVG files. The tools run in your web browser. We may add, change or remove features at any time.</p>
<h2>2. Your files and content</h2>
<p>You keep all rights to the files you process. Files you open in the tools are processed locally on your device and are not uploaded to our servers. You are responsible for making sure you have the right to use and convert the files you choose, including any copyright, trademark or licensing rights in the artwork.</p>
<h2>3. Acceptable use</h2>
<p>You agree not to use the Service to infringe the rights of others, to break the law, to attempt to disrupt or overload the Service, to probe or bypass its security, or to scrape it at a rate that harms other users.</p>
<h2>4. Output and accuracy</h2>
<p>Converting a raster image to vector is an approximation. Results depend on your source image and the settings you choose, and may differ from the original. You should check the output before relying on it, especially for print, production or legal use.</p>
<h2>5. Intellectual property</h2>
<p>The Service, including its design, code, text and illustrations, is owned by pngtosvgconverter.com or its licensors and is protected by applicable laws. You may not copy or resell the Service itself without permission. Nothing in these Terms transfers ownership of the Service to you.</p>
<h2>6. Disclaimer of warranties</h2>
<p>The Service is provided “as is” and “as available” without warranties of any kind, whether express or implied, including fitness for a particular purpose, accuracy, availability or non-infringement. We do not guarantee that the Service will be uninterrupted or error-free.</p>
<h2>7. Limitation of liability</h2>
<p>To the fullest extent permitted by law, pngtosvgconverter.com and its maintainers are not liable for any indirect, incidental, special, consequential or punitive damages, or for any loss of data, profits or business, arising from your use of or inability to use the Service. Where liability cannot be excluded, it is limited to the greatest extent the law allows.</p>
<h2>8. Third-party links and services</h2>
<p>The Service may link to third-party websites. We do not control them and are not responsible for their content or practices.</p>
<h2>9. Changes to these Terms</h2>
<p>We may update these Terms from time to time. The “Last updated” date above shows the latest version. Continued use of the Service after a change means you accept the updated Terms.</p>
<h2>10. Governing terms</h2>
<p>These Terms are governed by the laws applicable in the jurisdiction where the Service’s operator is established, without regard to conflict-of-law rules. Where the law of your country gives you mandatory consumer rights, those rights are not affected.</p>
<h2>11. Contact</h2>
<p>Questions about these Terms? Email ${mail} or use the <a href="../contact-us/">contact page</a>. See also our <a href="../privacy/">Privacy Policy</a>.</p>`
};

const privacy={
 slug:'privacy',type:'WebPage',
 title:'Privacy Policy | pngtosvgconverter.com',
 desc:'How pngtosvgconverter.com handles data: files are processed in your browser and never uploaded. Learn what is stored, cookies, third parties and your rights.',
 h1:'Privacy Policy',
 lead:`Last updated: ${UPDATED}`,
 crumb:'Privacy Policy',
 body:`<p>Your privacy matters to us. This policy explains what information pngtosvgconverter.com (“we”, “us”) handles when you use the website and its tools.</p>
<h2>1. Your files stay on your device</h2>
<p>The image and SVG tools run in your web browser using JavaScript. Files you drop, paste or open are processed locally and are <strong>not uploaded</strong> to our servers or to any third party. We cannot see them.</p>
<h2>2. Information we collect</h2>
<ul>
<li><strong>Preferences stored on your device.</strong> If you switch between light and dark mode, your choice is saved in your browser’s local storage so the site can remember it. It never leaves your device.</li>
<li><strong>Messages you send us.</strong> If you use the contact form or email us, we receive the name, email address and message you provide, and we use them only to reply and to improve the Service.</li>
<li><strong>Technical logs.</strong> Like most websites, our hosting provider may keep standard server logs (for example IP address, browser type, requested page and time) for security and reliability.</li>
</ul>
<h2>3. Cookies and analytics</h2>
<p>We do not set advertising or tracking cookies. At the time of writing we do not run third-party analytics or advertising scripts. If we add privacy-friendly analytics or any cookies in the future, we will update this page and, where required, ask for your consent.</p>
<h2>4. Third parties</h2>
<p>The website is delivered by a hosting and content-delivery provider, which processes technical request data on our behalf. If the contact form is configured to use an external form-handling service, that service processes the message you submit so it can be delivered to us. We do not sell your personal information.</p>
<h2>5. How we use information</h2>
<p>We use the limited information described above to operate and secure the website, respond to messages, and improve the tools. We keep messages only as long as needed to handle your request and for reasonable record-keeping.</p>
<h2>6. Your rights</h2>
<p>Depending on where you live (for example under the GDPR or similar laws), you may have the right to access, correct, delete or restrict the use of your personal data, to object to its processing, and to lodge a complaint with your local data-protection authority. Because we hold very little personal data, most requests are simple to fulfil.</p>
<h2>7. Children</h2>
<p>The Service is not directed to children under 13, and we do not knowingly collect their personal information.</p>
<h2>8. Security</h2>
<p>The website is served over HTTPS. Because your files are never uploaded, they are not exposed to transmission or storage risks on our side.</p>
<h2>9. Changes to this policy</h2>
<p>We may update this policy. The “Last updated” date shows the latest version.</p>
<h2>10. Contact for privacy requests</h2>
<p>For any privacy question or request, email ${mail} with “Privacy request” in the subject line, or use the <a href="../contact-us/">contact page</a>. See also our <a href="../terms/">Terms & Conditions</a>.</p>`
};

const notFound={
 title:'Page not found | pngtosvgconverter.com',
 desc:'The page you are looking for could not be found. Go back to the PNG to SVG converter or explore our other free converters and SVG tools.',
 h1:'Page not found',
 lead:'The page you tried to open does not exist or has moved. Here are some places to go next.',
 body:`<ul class="nf-links">
<li><a href="/">PNG to SVG Converter (home)</a></li>
<li><a href="/jpg-to-svg-converter/">JPG to SVG Converter</a></li>
<li><a href="/svg-to-png-converter/">SVG to PNG Converter</a></li>
<li><a href="/svg-optimizer/">SVG Optimizer</a></li>
<li><a href="/sitemap/">Sitemap: every converter and tool</a></li>
<li><a href="/contact-us/">Contact us</a></li>
</ul>`
};
module.exports={about,contact,terms,privacy,notFound,UPDATED};
