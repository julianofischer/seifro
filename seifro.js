// document.body.style.border = "5px solid red";
function processa(atag){
    var text = atag.onmouseover.toString();
    text = text.split("infraTooltipMostrar('")[1];
    text = text.split("',")[0];
    if (text.replace(/\s/g, "").length > 0){
        atag.innerText = text;
    }
}

var visualizados = Array.from(document.body.getElementsByClassName("processoVisualizado"));
visualizados.forEach(processa);
