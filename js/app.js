function comprar() {
  let tipoIngresso = document.getElementById('tipo-ingresso').value;
  let quantidade = parseFloat(document.getElementById('qtd').value);
  let qtdDisponivel = {
    pista: document.getElementById("qtd-pista"),
    superior: document.getElementById("qtd-superior"),
    inferior: document.getElementById("qtd-inferior")
  };


  let disponivel = parseInt(qtdDisponivel[tipoIngresso].textContent);
  let compra = disponivel - quantidade;

  if (quantidade <= 0) {
    alert('quantidade inválida!');
    return;
  }

  if (quantidade > disponivel) {
    alert('Sinto muito, todos ingressos já foram esgotados.');
    return;
  }

  qtdDisponivel[tipoIngresso].textContent = compra;







  console.log(compra);
}
