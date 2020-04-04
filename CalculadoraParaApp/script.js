//2+(km*1.4)+(min*0.26) formula da conta




function alerte(){
    var distanciakm = document.getElementById("myinput").value;
    var minutosDeCorrida = (distanciakm/0.01)/60;
    var valorcorrida = 2+(distanciakm*1.4)+(minutosDeCorrida*0.26);
    document.getElementById('p1').innerHTML ='sua corrida deu ' + valorcorrida.toFixed(2);
}

