// Páginas essenciais em português (Brasil). O texto jurídico deve ser revisado pelo responsável pelo site.
module.exports=function(S){
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const UPDATED=new Date(S.UPDATED+'T00:00:00Z').toLocaleDateString('pt-BR',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'});
const mail=`<a href="mailto:${S.EMAIL}">${S.EMAIL}</a>`;
const N='pngtosvgconverter.com';

const about={slug:'about-us',type:'AboutPage',about:true,
 title:'Sobre nós | '+N,
 desc:'Saiba quem mantém o pngtosvgconverter.com, por que ele existe, como funciona o conversor gratuito de PNG para SVG no navegador e quais princípios o guiam.',
 h1:'Sobre o '+N,
 lead:'Um conjunto de ferramentas gratuito e privado para transformar imagens em SVG limpo e escalável, feito para rodar inteiramente no seu navegador.',
 crumb:'Sobre nós',
 body:`<h2>Quem mantém este site</h2>
<p>O ${N} é um projeto independente de ferramentas web mantido pela equipe do ${N}. Criamos pequenos utilitários gráficos e objetivos para designers, desenvolvedores, criadores e qualquer pessoa que precise da versão vetorial de uma imagem sem instalar programas.</p>
<h2>Por que ele existe</h2>
<p>Transformar uma imagem de pixels em vetor normalmente exige pagar por um programa de desktop ou enviar trabalhos privados ao servidor de um desconhecido. Queríamos algo melhor: um conversor gratuito, rápido, que mostra o resultado enquanto você ajusta e nunca recebe seus arquivos.</p>
<h2>O que você pode fazer aqui</h2>
<ul>
<li><strong>Imagem para SVG:</strong> converta PNG, JPG, WebP, GIF, BMP, AVIF e mais em vetores escaláveis, com predefinições para logotipos, ícones, desenhos de linha, assinaturas, digitalizações, clipart e pixel art.</li>
<li><strong>SVG para imagem:</strong> exporte um SVG como PNG, JPG, WebP, PDF ou ICO com vários tamanhos.</li>
<li><strong>Ferramentas SVG:</strong> comprima, otimize, redimensione, recorte, recolora, valide, formate, minifique e inspecione código SVG.</li>
</ul>
<p>Cada ferramenta tem sua própria página, listada no <a href="../sitemap/">mapa do site</a> e na <a href="../#all">página inicial</a>.</p>
<h2>Como a tecnologia funciona</h2>
<p>O conversor de PNG para SVG usa técnicas bem documentadas, não uma caixa-preta. As cores são reduzidas com uma paleta de corte mediano refinada por k-means. Cada cor vira uma camada empilhada cujo contorno é encontrado com “marching squares” em precisão de subpixel e depois ajustado com curvas de Bézier cúbicas. Tudo acontece no seu navegador.</p>
<h2>Nossos princípios</h2>
<ul>
<li><strong>Privacidade em primeiro lugar.</strong> A conversão acontece no seu dispositivo. Suas imagens e arquivos SVG nunca são enviados. Veja nossa <a href="../privacy/">Política de Privacidade</a>.</li>
<li><strong>Resultados honestos.</strong> Vetores funcionam melhor com logotipos, ícones, ilustrações e desenhos de linha. Dizemos claramente que fotografias viram arte estilizada e posterizada e mostramos o tamanho do arquivo para você avaliar o resultado.</li>
<li><strong>Grátis e simples.</strong> Sem conta, sem marca d’água, sem limites diários.</li>
<li><strong>Acessível e rápido.</strong> As páginas são leves, funcionam em celulares e pelo teclado e usam formatos de arquivo padrão e abertos.</li>
</ul>
<h2>Qualidade e atualizações</h2>
<p>Testamos o conversor com uma biblioteca de amostras integradas (logotipos, ícones, ilustrações, páginas digitalizadas, assinaturas, pixel art) e melhoramos continuamente o motor de traçado e as orientações de cada página. Se algo parecer errado com o seu arquivo, avise-nos.</p>
<h2>Fale conosco</h2>
<p>Dúvidas, relatos de erros ou ideias para uma nova ferramenta? Use a <a href="../contact-us/">página de contato</a> ou escreva para ${mail}.</p>`};

const contact={slug:'contact-us',type:'ContactPage',
 title:'Contato | '+N,
 desc:'Entre em contato com o pngtosvgconverter.com para dúvidas, erros, ideias ou solicitações de privacidade. Envie uma mensagem pelo formulário ou por e-mail.',
 h1:'Contato',
 lead:'Dúvidas, erros ou ideias para uma nova ferramenta? Envie uma mensagem e responderemos.',
 crumb:'Contato',
 body:`<p>A forma mais rápida de nos ajudar a resolver um problema é informar a página usada, seu navegador e dispositivo e o que você esperava que acontecesse. Se uma imagem específica causa o problema, descreva-a ou informe o tipo e o tamanho. Não envie arquivos confidenciais.</p>
<form class="cform" data-contact data-endpoint="${esc(S.CONTACT_ENDPOINT)}" data-email="${S.EMAIL}" data-sending="Enviando sua mensagem…" data-success="Obrigado. Sua mensagem foi enviada." data-success-mailto="Seu aplicativo de e-mail deve abrir com a mensagem pronta. Se nada abrir, escreva diretamente para ${S.EMAIL}." data-error="Desculpe, não foi possível enviar a mensagem. Escreva diretamente para ${S.EMAIL}." data-invalid="Informe seu nome, um e-mail válido e uma mensagem." novalidate>
<div class="field"><label for="cf-name">Nome</label><input id="cf-name" name="name" type="text" autocomplete="name" required maxlength="120"></div>
<div class="field"><label for="cf-email">E-mail</label><input id="cf-email" name="email" type="email" autocomplete="email" required maxlength="160"></div>
<div class="field"><label for="cf-msg">Mensagem</label><textarea id="cf-msg" name="message" rows="7" required maxlength="4000"></textarea></div>
<div class="hp" aria-hidden="true"><label>Deixe este campo em branco<input name="website" type="text" tabindex="-1" autocomplete="off"></label></div>
<button class="btn primary lg" type="submit" data-submit>Enviar mensagem</button>
<p class="form-status" role="status" aria-live="polite" data-status></p>
</form>
<h2>Prefere e-mail?</h2>
<p>Escreva diretamente para ${mail}. Para solicitações de privacidade, coloque “Solicitação de privacidade” no assunto.</p>
<p>Costumamos responder em poucos dias úteis.</p>`};

const terms={slug:'terms',type:'WebPage',
 title:'Termos e Condições | '+N,
 desc:'Os termos de uso do pngtosvgconverter.com: uso aceitável, seus arquivos e conteúdo, isenções de garantia, limites de responsabilidade e alterações nos termos.',
 h1:'Termos e Condições',
 lead:`Última atualização: ${UPDATED}`,
 crumb:'Termos e Condições',
 body:`<p>Estes Termos e Condições (“Termos”) regem o uso do ${N} e de suas ferramentas (o “Serviço”). Ao usar o Serviço, você concorda com estes Termos. Se não concordar, não use o Serviço.</p>
<h2>1. O Serviço</h2>
<p>O Serviço oferece ferramentas online gratuitas para converter e editar imagens e arquivos SVG. As ferramentas rodam no seu navegador. Podemos adicionar, alterar ou remover recursos a qualquer momento.</p>
<h2>2. Seus arquivos e conteúdo</h2>
<p>Você mantém todos os direitos sobre os arquivos que processa. Os arquivos abertos nas ferramentas são processados localmente no seu dispositivo e não são enviados aos nossos servidores. Você é responsável por garantir que tem o direito de usar e converter os arquivos escolhidos, incluindo direitos autorais e de marca.</p>
<h2>3. Uso aceitável</h2>
<p>Você concorda em não usar o Serviço para violar direitos de terceiros, infringir a lei, tentar interromper ou sobrecarregar o Serviço, testar ou contornar sua segurança nem extrair seus dados em ritmo que prejudique outros usuários.</p>
<h2>4. Resultados e precisão</h2>
<p>Converter uma imagem raster em vetor é uma aproximação. Os resultados dependem da imagem de origem e das configurações escolhidas e podem diferir do original. Confira o resultado antes de depender dele, especialmente para impressão, produção ou uso jurídico.</p>
<h2>5. Propriedade intelectual</h2>
<p>O Serviço, incluindo design, código, textos e ilustrações, pertence ao ${N} ou a seus licenciadores e é protegido pela legislação aplicável. Você não pode copiar nem revender o próprio Serviço sem permissão. Nada nestes Termos transfere a nós a propriedade de seus arquivos nem a você a do Serviço.</p>
<h2>6. Isenção de garantias</h2>
<p>O Serviço é fornecido “como está” e “conforme disponível”, sem garantias de qualquer tipo, expressas ou implícitas, incluindo adequação a uma finalidade específica, precisão, disponibilidade ou não violação. Não garantimos que o Serviço funcione sem interrupções ou erros.</p>
<h2>7. Limitação de responsabilidade</h2>
<p>Na máxima extensão permitida por lei, o ${N} e seus mantenedores não respondem por danos indiretos, incidentais, especiais, consequenciais ou punitivos, nem por perda de dados, lucros ou negócios decorrentes do uso ou da impossibilidade de usar o Serviço.</p>
<h2>8. Links e serviços de terceiros</h2>
<p>O Serviço pode conter links para sites de terceiros. Não os controlamos e não somos responsáveis por seu conteúdo ou práticas.</p>
<h2>9. Alterações nestes Termos</h2>
<p>Podemos atualizar estes Termos de tempos em tempos. A data de “Última atualização” indica a versão mais recente. Continuar usando o Serviço após uma alteração significa aceitar os Termos atualizados.</p>
<h2>10. Lei aplicável</h2>
<p>Estes Termos são regidos pelas leis da jurisdição em que o operador do Serviço está estabelecido, sem considerar normas de conflito de leis. Os direitos obrigatórios do consumidor previstos na lei do seu país não são afetados.</p>
<h2>11. Contato</h2>
<p>Dúvidas sobre estes Termos? Escreva para ${mail} ou use a <a href="../contact-us/">página de contato</a>. Veja também nossa <a href="../privacy/">Política de Privacidade</a>.</p>`};

const privacy={slug:'privacy',type:'WebPage',
 title:'Política de Privacidade | '+N,
 desc:'Como o pngtosvgconverter.com trata dados: os arquivos são processados no navegador e nunca enviados. O que é armazenado, cookies, terceiros e seus direitos.',
 h1:'Política de Privacidade',
 lead:`Última atualização: ${UPDATED}`,
 crumb:'Política de Privacidade',
 body:`<p>Sua privacidade é importante para nós. Esta política explica quais informações o ${N} (“nós”) trata quando você usa o site e suas ferramentas.</p>
<h2>1. Seus arquivos ficam no seu dispositivo</h2>
<p>As ferramentas de imagem e SVG rodam no seu navegador com JavaScript. Os arquivos que você solta, cola ou abre são processados localmente e <strong>não são enviados</strong> aos nossos servidores nem a terceiros. Não conseguimos vê-los.</p>
<h2>2. Informações que coletamos</h2>
<ul>
<li><strong>Preferências guardadas no seu dispositivo.</strong> Se você alterna entre o modo claro e o escuro, sua escolha é salva no armazenamento local do navegador para o site lembrar. Ela nunca sai do seu dispositivo.</li>
<li><strong>Mensagens que você nos envia.</strong> Se usar o formulário de contato ou nos escrever, recebemos o nome, o e-mail e a mensagem informados e os usamos apenas para responder e melhorar o Serviço.</li>
<li><strong>Registros técnicos.</strong> Como a maioria dos sites, nosso provedor de hospedagem pode manter registros padrão do servidor (por exemplo, endereço IP, tipo de navegador, página solicitada e horário) por segurança e confiabilidade.</li>
</ul>
<h2>3. Cookies e análises</h2>
<p>Não definimos cookies de publicidade nem de rastreamento. No momento, não usamos análises de terceiros nem scripts de publicidade. Se adicionarmos análises que respeitem a privacidade ou cookies no futuro, atualizaremos esta página e, quando exigido, pediremos seu consentimento.</p>
<h2>4. Terceiros</h2>
<p>O site é entregue por um provedor de hospedagem e de distribuição de conteúdo que trata dados técnicos de solicitações em nosso nome. Se o formulário de contato usar um serviço externo de formulários, esse serviço trata a mensagem enviada para entregá-la a nós. Não vendemos seus dados pessoais.</p>
<h2>5. Como usamos as informações</h2>
<p>Usamos as informações limitadas descritas acima para operar e proteger o site, responder mensagens e melhorar as ferramentas. Guardamos as mensagens apenas pelo tempo necessário para atender sua solicitação e manter registros razoáveis.</p>
<h2>6. Seus direitos</h2>
<p>Dependendo de onde você mora (por exemplo, pela LGPD, pelo GDPR ou leis semelhantes), você pode ter direito de acessar, corrigir, excluir ou restringir o uso de seus dados pessoais, de se opor ao tratamento e de apresentar reclamação à autoridade de proteção de dados. Como guardamos pouquíssimos dados pessoais, a maioria das solicitações é simples de atender.</p>
<h2>7. Crianças</h2>
<p>O Serviço não é direcionado a menores de 13 anos e não coletamos intencionalmente informações pessoais deles.</p>
<h2>8. Segurança</h2>
<p>O site é servido por HTTPS. Como seus arquivos nunca são enviados, eles não ficam expostos a riscos de transmissão ou armazenamento do nosso lado.</p>
<h2>9. Alterações nesta política</h2>
<p>Podemos atualizar esta política. A data de “Última atualização” indica a versão mais recente.</p>
<h2>10. Contato para solicitações de privacidade</h2>
<p>Para qualquer dúvida ou solicitação sobre privacidade, escreva para ${mail} com “Solicitação de privacidade” no assunto ou use a <a href="../contact-us/">página de contato</a>. Veja também nossos <a href="../terms/">Termos e Condições</a>.</p>`};

const notFound={
 title:'Página não encontrada | '+N,
 desc:'A página que você procura não foi encontrada. Volte ao conversor de PNG para SVG ou explore nossos outros conversores gratuitos e ferramentas SVG.',
 h1:'Página não encontrada',
 lead:'A página que você tentou abrir não existe ou foi movida. Veja para onde ir.',
 body:`<ul class="nf-links">
<li><a href="/pt/">Conversor de PNG para SVG (início)</a></li>
<li><a href="/pt/jpg-to-svg-converter/">Conversor de JPG para SVG</a></li>
<li><a href="/pt/svg-to-png-converter/">Conversor de SVG para PNG</a></li>
<li><a href="/pt/svg-optimizer/">Otimizador de SVG</a></li>
<li><a href="/pt/sitemap/">Mapa do site: todos os conversores e ferramentas</a></li>
<li><a href="/pt/contact-us/">Contato</a></li>
</ul>`};

const sitemap={title:'Mapa do site | '+N,desc:'Todas as páginas do pngtosvgconverter.com: conversores gratuitos de imagem para SVG, de SVG para imagem, ferramentas SVG e a página inicial em 18 idiomas.',h1:'Mapa do site',lead:'Todas as páginas do pngtosvgconverter.com em um só lugar.',crumb:'Mapa do site',
 main:'Páginas principais',home:'Início: conversor de PNG para SVG',about:'Sobre nós',contact:'Contato',terms:'Termos e Condições',privacy:'Política de Privacidade',sitemap:'Mapa do site',
 gRaster:'Conversores de imagem para SVG',gExport:'Conversores de SVG para imagem',gUtil:'Ferramentas SVG',gLang:'Página inicial em outros idiomas'};
return {about,contact,terms,privacy,notFound,sitemap};
};
