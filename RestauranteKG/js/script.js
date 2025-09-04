function calcular() {
    const preco = Number(document.getElementById("preco").value);
    const gramas = Number(document.getElementById("gramas").value);
    if(preco <= 0 || gramas <= 0) {
      alert("Valores inválidos.");
      return;
    }
    const kg = gramas / 1000;
    const total = (preco * kg).toFixed(2);
    document.getElementById("resultado").textContent = `Valor a pagar: R$ ${total}`;
  }
  