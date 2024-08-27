const textArea = document.querySelector(".Text-Area");
const mensagem = document.querySelector(".Mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes "
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u"é convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {

    let matrizcodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] ,["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizcodigo.length; i++)  {
        if(stringEncriptada.includes(matrizcodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1]);

        }
    } 
    return stringEncriptada;
}


function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {

    let matrizcodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] ,["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizcodigo.length; i++)  {
        if(stringEncriptada.includes(matrizcodigo[i][1])){
            stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0]);

        }
    } 
    return stringEncriptada;
}
