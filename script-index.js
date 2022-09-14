
//reglas de juego
/*
Traducir el texto cambiando las vocales de la siguiente manera
["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u","ufat"]];
Se deben permitir mayusculas, minusculas y tildes, pero debe saber reconvertirlo a sin tildes y todas minusculas
*/ 
const matriz=[["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u","ufat"]];/*Regla de cambios de letras */
const acentos=[["á","a"],["é","e"],["í","i"],["ó","o"],["ú","u"]]; /*Regla para volverlo sin tildes */

/*ver si tiene acentos*/
function CambiarAcentos()
{
    var texto=document.getElementById("textoTraducir").value;
    texto=texto.toLowerCase();
    for(let i=0;i<acentos.length;i++)
    {
        if(texto.includes(acentos[i][0]))
        {
            texto = texto.replaceAll(acentos[i][0],acentos[i][1])
        }
    }
    return texto;
}
function encriptar()
{
    var texto=CambiarAcentos();
    for(let i=0;i<matriz.length;i++)
    {
        if(texto.includes(matriz[i][0]))
        {
            texto = texto.replaceAll(matriz[i][0],matriz[i][1])
        }
    }
    const TextoUsuariofinal = document.getElementById("textoResultado");
    TextoUsuariofinal.value =texto;
}

function desencriptar()
{
    var texto=CambiarAcentos();
    for(let i=0;i<matriz.length;i++)
    {
        if(texto.includes(matriz[i][1]))
        {
            texto = texto.replaceAll(matriz[i][1],matriz[i][0])
        }
    }
    const TextoUsuariofinal = document.getElementById("textoResultado");
    TextoUsuariofinal.value =texto;
}
function copiar()
{
    var texto=document.getElementById("textoResultado").value;
    navigator.clipboard.writeText(texto);
}