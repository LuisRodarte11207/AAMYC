function productdisplay(page) {
  const title = document.getElementById("prodtitle");
  const one = document.getElementById("prodone");
  const two = document.getElementById("prodtwo");
  const three = document.getElementById("prodthree");
  const four = document.getElementById("prodfour");
  const five = document.getElementById("prodfive");
  const six = document.getElementById("prodsix");

  switch (page) {
    case "one":
      title.innerHTML = "Suministros médicos y hospitalarios";
      one.style = "display: initial;";
      two.style = "display: none;";
      three.style = "display: none;";
      four.style = "display: none;";
      five.style = "display: none;";
      six.style = "display: none;";
      break;
    case "two":
      title.innerHTML = "Equipamiento médico";
      one.style = "display: none;";
      two.style = "display: initial;";
      three.style = "display: none;";
      four.style = "display: none;";
      five.style = "display: none;";
      six.style = "display: none;";
      break;
    case "three":
      title.innerHTML = "Limpieza y esterilización";
      one.style = "display: none;";
      two.style = "display: none;";
      three.style = "display: initial;";
      four.style = "display: none;";
      five.style = "display: none;";
      six.style = "display: none;";
      break;
    case "four":
      title.innerHTML = "Construcción y mantenimiento";
      one.style = "display: none;";
      two.style = "display: none;";
      three.style = "display: none;";
      four.style = "display: initial;";
      five.style = "display: none;";
      six.style = "display: none;";
      break;
    case "five":
      title.innerHTML = "Servicios médicos especializados";
      one.style = "display: none;";
      two.style = "display: none;";
      three.style = "display: none;";
      four.style = "display: none;";
      five.style = "display: initial;";
      six.style = "display: none;";
      break;
    case "six":
      title.innerHTML = "Otros";
      one.style = "display: none;";
      two.style = "display: none;";
      three.style = "display: none;";
      four.style = "display: none;";
      five.style = "display: none;";
      six.style = "display: initial;";
  }
}
