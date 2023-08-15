let menuVisible = false;
//funcopm para ocultar y mostrar el menu
function mostrarOcultar(){
    if(menuVisible){
        document.getElementById("nav").classList=""
        menuVisible= false;
    }
    else{
        document.getElementById("nav").classList="responsive"
        menuVisible= true;
    }

}

function seleccionar(){
    //oculta el menui una vez sea presionada
    document.getElementById("nav").classList="";
    menuVisible=false;
}