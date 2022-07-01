function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("Verifique os dados e tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - fano.value;
    res.innerHTML = `Idade calculada ${idade}`;
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "pexels-ganimat-pashazade-8882288.jpg");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "pexels-sebastiaan-stam-1304647.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "pexels-chloe-1043474.jpg");
      } else {
        //senhor
        img.setAttribute("src", "pexels-hasan-albari-1652340.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "pexels-nikita-nikitin-11163675.jpg");
      } else if (idade < 21) {
        //jovem
        img.setAttribute("src", "pexels-pixabay-264614.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "pexels-raydar-341970.jpg");
      } else {
        //senhor
        img.setAttribute("src", "pexels-nashua-volquezyoung-1729931.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
