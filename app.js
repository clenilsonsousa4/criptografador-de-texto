let stringRecebida;
let chaves = new Map();
chaves.set("a", "ai");
chaves.set("e", "enter");
chaves.set("i", "imes");
chaves.set("o", "ober");
chaves.set("u", "ufat");

function criptografarTexto() {
    stringRecebida = document.querySelector(".decodificador__funcao__texto").value;
    let stringCifrada = "";

    for(const char of stringRecebida) {
        if(chaves.has(char)) {
            stringCifrada = stringCifrada.concat(chaves.get(char));
        } else {
            stringCifrada = stringCifrada.concat(char);
        }
    }

    document.getElementById("decodificador__retorno__vazio").style.display = "none";
    document.getElementById("decodificador__retorno").style.justifyContent = "start";
    document.getElementById("retorno__sucesso__texto").innerHTML = stringCifrada;
    document.getElementById("decodificador__retorno__sucesso").style.display = "initial";
}

function descriptografarTexto() {
    let stringDescriptografada = "";
    stringRecebida = document.querySelector(".decodificador__funcao__texto").value;

    for(i = 0; i < stringRecebida.length; i++) {
        let letra = stringRecebida.charAt(i);
        
        if(chaves.has(letra)) {
            let chave = chaves.get(letra);
            let valor = letra;
            let j = i + 1;

            for(; j < i + chave.length; j++) {
                valor = valor.concat(stringRecebida.charAt(j));
            }

            console.log(chave);
            console.log(valor);

            if(valor === chave) {
                i = i + chaves.get(letra).length - 1;
            }
        }

        stringDescriptografada = stringDescriptografada.concat(letra);
    }

    document.getElementById("decodificador__retorno__vazio").style.display = "none";
    document.getElementById("decodificador__retorno").style.justifyContent = "start";
    document.getElementById("retorno__sucesso__texto").innerHTML = stringDescriptografada;
    document.getElementById("decodificador__retorno__sucesso").style.display = "initial";
}