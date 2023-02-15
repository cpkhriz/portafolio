const textArea = document.querySelector(".text-input");
const mensaje = document.querySelector(".textopanelder2");



function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(strigEncriptado){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    strigEncriptado = strigEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(strigEncriptado.includes(matrizCodigo[i][0])){
            strigEncriptado = strigEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return strigEncriptado
}


function btnDesencriptar(){
    const textoDesencriptar = desencriptar(textArea.value)
    mensaje.value = textoDesencriptar
    textArea.value = "";
    
}

function desencriptar(stringDesencriptado){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    
    }
    return stringDesencriptado
}

