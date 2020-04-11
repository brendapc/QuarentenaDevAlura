//2+(km*1.4)+(min*0.26) formula da conta
function formata(valor){
    valor = valor.toFixed(2).replace('.',',').toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    
    return valor;
}
function alerte(){
    var distanciakm = document.getElementById("myinput").value;
    var minutosDeCorrida = document.getElementById('mininp').value//(distanciakm/0.01)/60;
    var valorcorrida = 2+distanciakm*1.4+minutosDeCorrida*0.26;
    p = document.querySelector("p#p1")
    p.innerHTML ='sua corrida deu ' + formata(valorcorrida)
}

