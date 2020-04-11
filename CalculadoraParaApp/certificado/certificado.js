function gerar() {
  botaoGerar.disabled = true
  
  nome = inputNome.value
  
links = [
    'https://github.com/brendapc/QuarentenaDevAlura/tree/master/CalculadoraParaApp/ValorCorrida',
    'https://github.com/brendapc/QuarentenaDevAlura/tree/master/CalculadoraParaApp/Bot%C3%A3oDeLikes',
    'https://github.com/brendapc/QuarentenaDevAlura/blob/master/CalculadoraParaApp/olimpiadas.js',
    'https://github.com/brendapc/QuarentenaDevAlura/blob/master/CalculadoraParaApp/sorteioapp.html'
    
  ]
  
  titulos = [
    'Calculadora do Valor',
    'Botão de Likes',
    'Quantas olimpiadas houveram',
    'Promo Sorteio',
    
  ]
 
  contador = 0
  while(contador < 1000000) {
    contador = contador + 1
    htmlcertificado = emitirCertificado(nome)     
  }
  
  
  listalinksHTML = ""
  contadorlinks = 0
  while(contadorlinks < 5) {
    listalinksHTML = listalinksHTML + `
      <li>
        ${titulos[contadorlinks]}:
        <a target="_blank" href="${links[contadorlinks]}">
            ${links[contadorlinks].replace('https://', '')}
        </a>
      </li>
    `
    
    contadorlinks = contadorlinks + 1
  }
 
  
  document.body.innerHTML = htmlcertificado + `
    <ol>
      ${listalinksHTML}
    </ol>
  `
  
  print()
}