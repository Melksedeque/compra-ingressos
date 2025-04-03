function comprar() {
  let tipo = document.getElementById("tipo-ingresso");
  let qtd = parseInt(document.getElementById("qtd").value);

  if (tipo.value == "pista") {
    comprarPista(qtd);
  } else if (tipo.value == "superior") {
    comprarSuperior(qtd);
  } else {
    comprarInferior(qtd);
  }
}
