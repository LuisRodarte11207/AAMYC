function productdisplay(page) {
  const title = document.getElementById("prodtitle");
  const one = document.getElementById("prodone");
  const two = document.getElementById("prodtwo");
  const three = document.getElementById("prodthree");

  switch (page) {
    case "one":
      title.innerHTML = "Suministros médicos y hospitalarios";
      one.style = "display: initial;";
      two.style = "display: none;";
      three.style = "display: none;";
      break;
    case "two":
      title.innerHTML = "Equipamiento médico";
      two.style = "display: initial;";
      one.style = "display: none;";
      three.style = "display: none;";
      break;
    case "three":
      three.style = "display: initial;";
      one.style = "display: none;";
      two.style = "display: none;";
      break;
  }
}
