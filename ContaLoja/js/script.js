function calcular() {
  let resultado;
  const preco = Number(document.getElementById("preco").value);
  let opcao = document.getElementById('opcoes').value

  if (preco < 1) return alert('Preço inválido.')

  if (opcao == 'aVista') {
    aVista = (preco * 0.9).toFixed(2);
    resultado = "À vista com 10% de desconto: R$ " + aVista;
  }

  else if (opcao == 'parcelado') {
    parcela = (preco / 3).toFixed(2);
    resultado = "Parcelado: 3x de R$ " + parcela;
  }

  document.getElementById("resultado").textContent = resultado;
}


