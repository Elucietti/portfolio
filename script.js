let botonVer=document.getElementById("verInfo");
botonVer.addEventListener("click",mostrarInfo);

let botonVerCv=document.getElementById("verCv");
botonVerCv.addEventListener("click",mostrarCv);

function mostrarInfo(){
    let miItem = document.createElement("p");
    miItem.innerHTML = "soy ema"; 
    info.appendChild(miItem);
}

function mostrarCv(){
    let miItem = document.createElement("p");
    miItem.innerHTML = "este es mi cv"; 
    Cv.appendChild(miItem);

}