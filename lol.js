function enviarwhatsapp(){

    let mensaje =
    document.getElementById("mensaje").value;

    let numero = "573004622668";

    let url =
    "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);

    window.open(url);

}