var btnSumar = document.querySelector("#btnSumar");
btnSumar.addEventListener("click", function(e) {
    e.preventDefault(); 
    var uno = parseFloat(document.querySelector("#uno").value);
    var dos = parseFloat(document.querySelector("#dos").value);
    var resultado = uno + dos;
    document.querySelector("h1").textContent = resultado
});
var btnRestar = document.querySelector("#btnRestar");
btnSumar.addEventListener("click", function(e) {
    e.preventDefault();
    var uno = parseFloat(document.querySelector("#uno").value);
    var dos = parseFloat(document.querySelector("#dos").value);
    var resultado = uno - dos;
    document.querySelector("h1").textContent = resultado
});
