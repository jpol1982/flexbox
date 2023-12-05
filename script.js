function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    //Add a zero in front of numbers<10
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}






var contadorClick = 0;

function incrementClick() {
    contadorClick++;
    document.getElementById('cantidadClick').innerHTML = contadorClick;
}








var contadorcolorReloj = 0;

function colorReloj() {
    contadorcolorReloj++;
    if(contadorcolorReloj%2==0)
    {
        document.getElementById('clock').style.color = 'black';
    }
    else
    {
        document.getElementById('clock').style.color = 'blue';
    }
}



var contadorcolorBotonesMenu = 0;
function colorBotonesMenu(){
    contadorcolorBotonesMenu++;
    if(contadorcolorBotonesMenu%2==0)
    {
        document.getElementById('botonMenu1').style.backgroundColor = '#04AA6D';
        document.getElementById('botonMenu2').style.backgroundColor = '#04AA6D';
    }
    else
    {
        document.getElementById('botonMenu1').style.backgroundColor = 'red';
        document.getElementById('botonMenu2').style.backgroundColor = 'red';
    }
}