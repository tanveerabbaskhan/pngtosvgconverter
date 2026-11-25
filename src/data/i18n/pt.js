module.exports={
 meta:{title:'Conversor de PNG para SVG Grátis Online – Sem Cadastro, Instantâneo',desc:'Converta PNG para SVG grátis online. Vetorize qualquer imagem em vetores limpos e escaláveis. 42 ferramentas SVG grátis, pré-visualização ao vivo, sem enviar arquivos e sem cadastro.',alt:'Conversor de PNG para SVG gratuito online com pré-visualização ao vivo'},
 h1:{kw:'Conversor de PNG para SVG',tail:'transforme qualquer PNG em um SVG escalável'},
 lead:'Converta PNG em SVG on-line em segundos. Este conversor gratuito traça sua imagem em caminhos vetoriais limpos direto no navegador, sem envio de arquivos, sem cadastro e sem marca-d’água.',
 skip:'Ir para o conteúdo principal',
 nav:{converter:'Conversor',all:'Todos os conversores',faq:'Perguntas frequentes',about:'Sobre nós',contact:'Contato',menu:'Menu',theme:'Alternar tema',upload:'Enviar imagem',main:'Navegação principal',toc:'Nesta página'},
 toc:{how:'Como funciona',proc:'Processo de conversão',chart:'Tabela e recursos',faq:'Perguntas frequentes',all:'Todos os conversores'},
 ui:{
  toolH2:'Ferramenta de conversão de PNG para SVG',step1:'Adicione sua imagem',dropAria:'Enviar uma imagem',drop:'Solte seu PNG aqui ou clique para procurar',paste:'Você também pode colar com Ctrl+V. Nada é enviado.',
  sample:'Sem imagem? Experimente um exemplo:',sLogo:'Logotipo',sScene:'Paisagem',sIcon:'Ícone',choose:'Escolher imagem',
  step2:'Ajuste o resultado',reset:'Redefinir',startFrom:'Começar com',pLogo:'Logotipo',pIllus:'Ilustração',pPhoto:'Foto',pLine:'Desenho de linhas',
  style:'Estilo',mColor:'Cor',mGray:'Cinza',mMono:'Mono',rmbg:'Remover fundo',rmbgSub:'Limpa bordas brancas ou transparentes',
  colors:'Cores',thresh:'Limiar',ink:'Cor da tinta',smooth:'Suavização',more:'Mais opções',detail:'Detalhe',specks:'Remover manchas',denoise:'Reduzir ruído',
  step3:'Pré-visualização e download',live:'Pré-visualização ao vivo',loading:'Carregando…',copy:'Copiar código SVG',download:'Baixar SVG',
  chipL:'Original · PNG',chipR:'Vetor · SVG',handle:'Comparar original e SVG',hint:'Arraste a alça para comparar · role para ampliar',zoomOut:'Reduzir',zoomIn:'Ampliar',fit:'Ajustar',
  veil:'Solte a imagem para converter',veilSub:'PNG, JPG, WebP, GIF',fileSize:'Tamanho do SVG',tColors:'Cores',time:'Tempo',
  moreD:'Mais detalhes',moreDSub:'Camadas de cor, histórico de tamanho, código SVG',shapes:'Formas',shapesSub:'contornos fechados',nodes:'Nós',nodesSub:'pontos do caminho',
  p1:'Decodificar',p2:'Quantizar',p3:'Traçar',p4:'Simplificar',p5:'Renderizar',
  layers:'Camadas de cor',layersSub:'Passe o mouse para isolar · clique para ocultar',trace:'Tamanho ao vivo',traceSub:'Tamanho do SVG a cada ajuste',legSvg:'Tamanho do SVG',legPng:'PNG original',src:'Código-fonte SVG'
 },
 js:{
  needImage:'Escolha um arquivo de imagem',readFail:'Não foi possível ler essa imagem',tracedAt:'traçado em {w}×{h}',
  smaller:'<span class="delta good">{pct}% menor</span> que o PNG de {size}',larger:'<span class="delta warn">{pct}% maior</span> que o PNG de {size}',
  noShapes:'Nenhuma forma visível: tente reduzir “Remover manchas”.',pts:'pts',moreChars:'… mais {n} caracteres',lines:'{n} linhas',previewOnly:'somente pré-visualização: Copiar ou Baixar entrega o arquivo completo',
  runs:'{n} execuções · agora {size}',run1:'1 execução · agora {size}',fullCopied:'SVG completo copiado',downloaded:'SVG baixado · {size}',copied:'Código SVG copiado',
  dirStatus:'Mostrando {a} de {b} ferramentas'
 },
 how:{
  eyebrow:'Por dentro',title:'Como funciona o conversor de PNG para SVG',
  def:'<strong>Um conversor de PNG para SVG</strong> transforma uma grade de pixels coloridos em um conjunto de formas vetoriais preenchidas. Este faz isso em cinco etapas automáticas, inteiramente no seu navegador, e redesenha o resultado sempre que você move um controle.',
  stages:[
   ['Decodificar','Seu navegador lê o PNG com a API Canvas e o transforma em uma grade de pixels RGBA. Arquivos grandes são reamostrados para um tamanho de trabalho definido pelo controle Detalhe, e um desfoque opcional de redução de ruído remove a granulação.','Canvas · getImageData'],
   ['Quantizar','Uma paleta de 2 a 64 cores obtida por corte mediano é refinada com k-means. Cores quase iguais são mescladas, pixels de borda suavizados são ajustados à cor real mais próxima e manchas minúsculas são absorvidas pelas vizinhas.','Corte mediano · k-means'],
   ['Traçar','Cada cor vira uma camada empilhada. A máscara da camada é suavizada e seu contorno é extraído com marching squares, gerando contornos subpixel que seguem a borda real em vez dos degraus de pixels.','Marching squares'],
   ['Ajustar curvas','Os cantos são detectados e cada trecho suave é ajustado com curvas de Bézier cúbicas. Bordas retas continuam sendo linhas retas, então o resultado precisa de bem menos nós que um traçado bruto de pixels.','Ajuste de Bézier de Schneider'],
   ['Renderizar','Os caminhos são gravados como um caminho SVG preenchido por cor, preservando o viewBox original. A pré-visualização, o tamanho do arquivo, a paleta e o código-fonte são atualizados ao vivo quando você move um controle.','SVG · fill-rule evenodd']],
  cap:'As cinco etapas da conversão de PNG para SVG: decodificar, quantizar, traçar, ajustar curvas e renderizar.',
  privTitle:'Para onde vai o seu arquivo',privCap:'O PNG é processado no seu dispositivo. Não há envio, então o arquivo nunca chega a um servidor.',privAlt:'Seu PNG fica no seu dispositivo',privAltDesc:'O PNG passa pelo conversor dentro do navegador e vira SVG. Nenhuma seta sai do seu dispositivo em direção a um servidor.',
  privBrowser:'SEU NAVEGADOR',privEngine:'Mecanismo de traçado',privServer:'Servidor',privNot:'não participa',
  whyTitle:'Por que o resultado fica pequeno e limpo',
  why:[['Camadas empilhadas','Cada cor fica sobre a anterior, então não há frestas finíssimas e há muito menos buracos para descrever.'],['Contornos subpixel','As bordas ficam entre os pixels, não sobre eles, de modo que diagonais e curvas permanecem suaves.'],['Ajuste de curvas','Um único segmento de Bézier pode substituir dezenas de degraus de pixels, então um logotipo típico precisa de apenas algumas centenas de nós.'],['Limpeza antes do traçado','As franjas de antisserrilhado e as manchas são mescladas primeiro, por isso nunca viram formas extras.']]
 },
 proc:{
  eyebrow:'Passo a passo',title:'Processo de conversão de PNG para SVG',
  def:'Converter um PNG em SVG leva cinco etapas e geralmente menos de um minuto. Você pode parar após qualquer etapa: o SVG está pronto para baixar assim que a pré-visualização ficar boa.',
  steps:[
   ['Adicione seu PNG','Solte um PNG na caixa de envio, clique em “Escolher imagem” ou cole um da área de transferência com Ctrl+V. Ainda não está pronto? Toque em um botão de exemplo para ver o conversor em ação.','Também aceita JPG, WebP, GIF e BMP.'],
   ['Escolha uma predefinição','Escolha Logotipo, Ilustração, Foto ou Desenho de linhas. Cada predefinição define valores sensatos de cores, detalhe, suavização e remoção de manchas, então a primeira pré-visualização costuma já estar próxima do ideal.','Logotipos: 4–8 cores. Fotos: 32–48 cores.'],
   ['Refine o traçado','Ajuste o número de cores (2–64), Detalhe, Suavização, Remover manchas e Reduzir ruído. Alterne entre os modos Cor, Cinza e Mono e ative Remover fundo para bordas brancas ou transparentes.','Cada controle atualiza a pré-visualização na hora.'],
   ['Compare e inspecione','Arraste a alça para comparar o PNG original com o SVG. Role para ampliar, arraste para mover e passe o mouse sobre uma camada de cor para isolá-la ou clique para ocultá-la antes de exportar.','Amplie até 3200% para ver o SVG continuar nítido.'],
   ['Baixe ou copie o SVG','Toque em “Baixar SVG” para salvar o arquivo ou em “Copiar código” para colar o código no seu projeto, no Figma, no Illustrator, no Inkscape ou em uma página web.','O arquivo nunca sai do seu dispositivo.']],
  cta:'Converter um PNG agora',tipLabel:'Dica:',
  mock:{dropLabel:'Solte o PNG',presets:['Logotipo','Ilustração','Foto','Desenho de linhas'],sliders:['Cores','Detalhe','Suavização'],dlBtn:'Baixar SVG'}
 },
 chart:{
  eyebrow:'Referência',title:'Tabela de conversão de PNG para SVG / recursos',
  def:'Use esta tabela para escolher as configurações certas para o seu tipo de PNG, ver como cada tipo converte e comparar PNG com SVG. Os valores correspondem às predefinições do conversor.',
  barsTitle:'Como cada tipo de PNG converte',barsCap:'Adequação vetorial de 1 (ruim) a 5 (excelente). Arte plana e de alto contraste converte melhor; fotografias, pior.',
  barsAlt:'Como cada tipo de PNG converte para SVG',
  bars:['Logotipo','Ícone','Pixel art','Ilustração plana','Desenho de linhas','Assinatura','Documento digitalizado','Fotografia'],
  quickTitle:'Respostas rápidas',
  quick:[['Melhores resultados:','logotipos, ícones, pixel art e ilustrações planas.'],['Bons resultados:','desenhos de linhas, esboços e assinaturas no modo Mono.'],['Exige cuidado:','páginas digitalizadas, que precisam de redução de ruído e de um filtro de manchas maior.'],['Apenas estilizado:','fotografias e gradientes suaves viram arte posterizada.']],
  note:'Dica: comece pela predefinição mais próxima e altere apenas um controle por vez.',
  t1:{cap:'Configurações recomendadas do conversor por tipo de PNG',cols:['Tipo de PNG','Predefinição ou modo','Cores','Detalhe','Suavização','Remover manchas','Adequação vetorial'],
   rows:[['Logotipo','Predefinição Logotipo'],['Ícone','Predefinição Logotipo'],['Ilustração plana ou desenho animado','Predefinição Ilustração'],['Desenho de linhas ou esboço','Predefinição Desenho de linhas · Mono'],['Assinatura','Mono · limiar 160'],['Pixel art','Modo Pixel'],['Documento digitalizado','Mono · redução de ruído 1,5'],['Fotografia','Predefinição Foto']],
   words:{ink:'tinta',auto:'tamanho de pixel automático',na:'não usado',up:'até'}},
  t2:{cap:'PNG e SVG em resumo',cols:['Característica','PNG (raster)','SVG (vetor)'],
   rows:[['Escala','Os pixels desfocam ou se desfazem ao ampliar','Escala para qualquer tamanho sem perder nitidez'],['Tamanho do arquivo','Cresce com a quantidade de pixels','Cresce com a complexidade das formas: minúsculo para arte plana'],['Edição','Edita-se pixels em um editor raster','Edita-se formas, curvas e cores em qualquer editor vetorial'],['Ideal para','Fotografias e texturas detalhadas','Logotipos, ícones, ilustrações, diagramas e desenhos de linhas'],['Transparência','Canal alfa','Nativa: o espaço vazio é simplesmente transparente'],['Estilo com CSS','Não é possível','Possível quando o SVG está embutido na página'],['Impressão e sinalização','Exige um original de alta resolução','Independente de resolução para qualquer tamanho de impressão']]},
  featTitle:'Recursos do conversor',
  feats:[['Pré-visualização ao vivo','Cada controle retraça a imagem e atualiza juntos a visão dividida, o gráfico de tamanho, a paleta e a contagem de nós.'],['Traçado subpixel','Os contornos seguem a borda real entre as cores, não os limites dos pixels, então as curvas ficam suaves.'],['Ajuste de curvas de Bézier','Trechos suaves viram Béziers cúbicas e bordas retas continuam linhas, o que mantém baixa a contagem de nós.'],['Camadas de cor empilhadas','As camadas ficam umas sobre as outras, então não há frestas nem emendas entre as cores.'],['De 2 a 64 cores','Escolha quantas cores manter ou mude para Cinza ou Mono. Passe o mouse ou oculte qualquer camada antes de exportar.'],['Modo Pixel','Traça pixel art como retângulos nítidos no tamanho de pixel detectado, sem suavização.'],['Fundos transparentes','Pixels transparentes nunca viram formas. Remover fundo apaga um fundo branco sólido com um clique.'],['Zoom e comparação','Arraste a alça para comparar e amplie até 3200% para ver o PNG pixelar enquanto o SVG permanece nítido.'],['Privado por projeto','A conversão roda no seu navegador. Seu PNG nunca é enviado, armazenado ou compartilhado.'],['Grátis e sem limites','Sem conta, sem marca-d’água e sem cota diária. Converta quantas imagens quiser.']]
 },
 faq:{
  eyebrow:'Respostas',title:'Perguntas frequentes',def:'Perguntas frequentes sobre o conversor de PNG para SVG: como funciona, o que esperar e como obter o melhor resultado. {n} respostas em quatro tópicos.',
  groups:[
   ['O básico',[
    ['O que é um conversor de PNG para SVG?','Um conversor de PNG para SVG transforma uma imagem PNG baseada em pixels em um SVG vetorial feito de formas e curvas matemáticas. Como um SVG descreve formas em vez de pixels, ele pode ser ampliado a qualquer tamanho sem desfocar e costuma ser muito menor que o PNG em arte plana, como logotipos e ícones.'],
    ['Este conversor de PNG para SVG é gratuito?','Sim. É totalmente gratuito, sem conta, sem marca-d’água e sem limite diário. O único limite prático é o seu dispositivo: as imagens são processadas em até 3000 px no lado maior, e arquivos muito grandes ou muito detalhados simplesmente demoram um pouco mais.'],
    ['Meus arquivos PNG são enviados para um servidor?','Não. A conversão roda inteiramente no seu navegador com JavaScript e a API Canvas. Seu PNG nunca é enviado, armazenado ou compartilhado, então artes confidenciais ficam no seu dispositivo.'],
    ['Qual é a diferença entre PNG e SVG?','PNG é um formato raster que armazena uma grade de pixels coloridos, por isso perde nitidez ao ser ampliado. SVG é um formato vetorial que armazena formas, curvas e preenchimentos, então permanece nítido em qualquer tamanho e pode ser editado em ferramentas vetoriais. PNG serve para fotografias; SVG, para logotipos, ícones, diagramas e desenhos de linhas.']]],
   ['Qualidade e configurações',[
    ['O SVG ficará exatamente igual ao meu PNG?','Não pixel por pixel. A conversão traça as formas que encontra e as aproxima com curvas, então o resultado é uma versão limpa e escalável da arte. Imagens planas e de alto contraste ficam muito próximas, enquanto fotografias viram uma versão estilizada e posterizada.'],
    ['Quais imagens PNG convertem melhor?','Logotipos, ícones, ilustrações planas, desenhos animados, desenhos de linhas, assinaturas e pixel art convertem melhor porque são feitos de formas claras e de um conjunto limitado de cores. Fotografias e gradientes suaves convertem pior (experimente o [[photo-to-vector-converter]] para resultados estilizados). Veja a tabela acima para configurações por tipo de imagem.'],
    ['Quantas cores devo escolher?','Combine com o número de cores chapadas da sua arte. A maioria dos logotipos precisa de 4–8, ícones de 3–6 e ilustrações de 12–20. Fotografias podem precisar de 32–48 ou mais. Cores extras acrescentam camadas e peso sem melhorar um desenho plano, e a lista de camadas de cor mostra exatamente o que cada uma contribui.'],
    ['Como obtenho linhas mais suaves ou cantos mais nítidos?','Use o controle Suavização. Valores baixos mantêm os cantos nítidos e as bordas próximas ao original; valores altos arredondam os degraus de pixels e as tremidas. Aumente o Detalhe para elementos mais finos e reduza Remover manchas se linhas finas desaparecerem.'],
    ['Por que minha foto parece posterizada ou com faixas?','Vetores armazenam regiões de cor chapada, então um gradiente suave precisa ser aproximado com faixas. Aumente o número de cores e o Detalhe, adicione um pouco de redução de ruído ou aceite o visual gráfico e marcante. Para o detalhe fotográfico real, mantenha o PNG ou use um formato de foto.']]],
   ['Transparência, texto e edição',[
    ['Como mantenho um fundo transparente?','Os pixels transparentes do seu PNG são respeitados automaticamente e nunca viram formas, então o SVG não tem caixa de fundo. Se o PNG tiver fundo branco sólido, ative Remover fundo para limpá-lo. O modo Mono também descarta o tom do papel e mantém só a tinta, algo para o qual a página [[transparent-image-to-svg-converter]] é ajustada.'],
    ['Ele reconhece o texto do meu PNG?','Não. O conversor não faz OCR. As letras são traçadas como contornos vetoriais, então escalam perfeitamente, mas não são editáveis como texto. Se você precisa de texto editável, digite-o novamente em uma ferramenta de design ou use um OCR separado.'],
    ['Por que meu SVG é maior que o PNG?','Fotografias e gradientes precisam de muitas formas, o que pode superar um PNG bem comprimido. Reduza o número de cores, diminua o Detalhe, aumente Remover manchas ou a Suavização. O cartão de tamanho do arquivo e o gráfico de tamanho ao vivo mostram o efeito de cada mudança.'],
    ['Posso editar o SVG no Figma, Illustrator, Inkscape ou Canva?','Sim. A saída é um SVG padrão com um caminho preenchido por cor, então qualquer editor vetorial pode abri-lo, recolori-lo e remodelá-lo. As camadas ficam empilhadas em ordem e você pode ocultar uma no conversor antes de baixar.']]],
   ['Compatibilidade',[
    ['Quais tamanhos e formatos de imagem são aceitos?','Você pode enviar arquivos PNG, JPG, WebP, GIF e BMP (cada um também tem sua página, como o [[jpg-to-svg-converter]] e o [[webp-to-svg-converter]]) que o navegador consiga abrir. Por desempenho, imagens muito grandes são reduzidas para no máximo 3000 px no lado maior antes do traçado, e o SVG exportado mantém a proporção original.'],
    ['Funciona em celulares e tablets?','Sim. Roda nas versões atuais do Chrome, Edge, Firefox e Safari, no computador e no celular. Imagens muito grandes podem ficar mais lentas em celulares antigos, então tente uma imagem menor ou um Detalhe mais baixo se a pré-visualização ficar lenta.']]]
  ],
  ctaTitle:'Pronto para vetorizar?',ctaText:'Seu PNG está a um gesto de virar um SVG escalável.',ctaBtn:'Abrir o conversor de PNG para SVG'
 },
 dir:{
  eyebrow:'Todos os conversores',title:'Todos os conversores e ferramentas SVG gratuitos',lead:'{n} ferramentas gratuitas que rodam no navegador. Escolha um conversor abaixo ou pesquise por formato ou tarefa.',
  search:'Pesquisar, ex.: “logotipo”, “PDF”, “minificar”',searchLabel:'Pesquisar conversores',filter:'Filtrar por tipo',all:'Todos',empty:'Nenhum conversor corresponde a essa pesquisa. Tente “SVG”, “logo” ou “PNG”.',
  groups:[['Imagem para SVG','Trace imagens raster em formas vetoriais escaláveis.'],['SVG para imagem','Exporte um SVG como PNG, JPG, WebP, PDF ou ICO.'],['Ferramentas SVG','Comprima, edite, inspecione e valide código SVG.']],
  here:'Você está aqui',nav:'Todos os conversores e ferramentas SVG'
 },
 foot:{
  blurb:'Conversor de PNG para SVG gratuito e ferramentas SVG que rodam inteiramente no seu navegador.',colExplore:'Explorar',colCompany:'Empresa',colLegal:'Legal',lang:'Idioma',
  home:'Início',about:'Sobre nós',contact:'Contato',terms:'Termos e condições',privacy:'Política de privacidade',sitemap:'Mapa do site',
  copy:'© {year} pngtosvgconverter.com',made:'Feito para designers e desenvolvedores · Processado localmente'
 }
};
