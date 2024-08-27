function encriptar() {

  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("encriptado");
  let parrafo = document.getElementById("parrafo");
  let imagen = document.getElementById("img_encriptar");


  let cifrado = texto
    .replace(/a/gi, "ai")
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto.length != 0) {
    //document.getElementById ("texto").value =cifrado;
    tituloMensaje.textContent = cifrado;
    parrafo.textContent = "";
    imagen.src = "encriptado.png";


  }
  else {

    imagen.src = "./imagen.png";
    Mensaje.textContent = "su mensaje no fue encontrado";
    parrafo.textContent = "por favor ingrese texto para encriptar o desencriptar";
  }
}
function desencriptar() {


  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("encriptado");
  let parrafo = document.getElementById("parrafo");
  let imagen = document.getElementById("imagen");

  let Cifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");


  if (texto.length != 0) {
    document.getElementById("texto").value = Cifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    imagen.src = "imagen.png";
  }
  else {
    muñeco.src = "./img/imagen.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";

  }

  btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy"); 
});

}

