//2+(km*1.4)+(min*0.26) formula da conta


var distanciakm = prompt("distancia");
var minutosDeCorrida = (distanciakm/0.01)/60;
var valorcorrida = 2+(distanciakm*1.4)+(minutosDeCorrida*0.26);

function alerte(){
    document.getElementById('p1').innerHTML ='sua corrida deu ' + valorcorrida.toFixed(2);
}

//document.write(valorcorrida);