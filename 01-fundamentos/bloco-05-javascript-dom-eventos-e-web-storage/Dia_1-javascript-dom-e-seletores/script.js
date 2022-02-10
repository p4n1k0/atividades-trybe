function mudaCor (novaCor){
    let elemento = document.getElementById("header-container");
    elemento.style.background = novaCor;
}

mudaCor ("green");


function corMuda (corNova){
    let el = document.getElementsByTagName("section")[0];
    el.style.background = corNova;
}

corMuda ("salmon");

function changeColor (newColor){
    let element = document.getElementsByTagName("section")[1];
    element.style.background = newColor;
}

changeColor ("gray");

function colorMuda (colorNew){
    let elem = document.getElementById("footer-container");
    elem.style.background = colorNew;
}

colorMuda ("blue");