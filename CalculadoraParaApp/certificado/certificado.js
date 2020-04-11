function gerar() {
    botaoGerar.disabled = true
    
    nome = inputNome.value
    
    links = [
      'https://codepen.io/artdiniz/pen/xxwxLvQ',
      'https://codepen.io/artdiniz/pen/xxwxLvQ',
      'https://codepen.io/artdiniz/pen/xxwxLvQ',
      'https://codepen.io/artdiniz/pen/xxwxLvQ',
      'https://codepen.io/artdiniz/pen/xxwxLvQ'
    ]
    
    titulos = [
      'Título bonito 1',
      'Título bonito 2',
      'Título bonito 3',
      'Título bonito 4',
      'Título bonito 5'
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