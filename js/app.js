const qtdDisponivel = {
  pista: document.getElementById("qtd-pista"),
  superior: document.getElementById("qtd-superior"),
  inferior: document.getElementById("qtd-inferior")
};

function comprar() {

  const tipoIngresso = document.getElementById('tipo-ingresso').value;
  const qtd = parseFloat(document.getElementById('qtd').value);
  const disponivel = parseInt(qtdDisponivel[tipoIngresso].textContent);
  const adquirido = disponivel - qtd;
  
  if (qtd <= 0 || isNaN(qtd)) {
    alert('Quantidade inválida!');
    return;
  }

  if (qtd > disponivel) {
    alert('A quantidade informada excede o número de ingressos disponíveis.');
    return;
  } else {
    alert('Compra realizada com sucesso!');
  }

  document.getElementById("qtd").value = "";

  qtdDisponivel[tipoIngresso].textContent = adquirido;
}
