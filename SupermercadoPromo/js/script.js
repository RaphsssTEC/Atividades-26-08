function mostrarPromocao() {
    const desc = document.getElementById("desc").value;
    const preco = Number(document.getElementById("preco").value);
    if(!desc || preco <= 0) {
      alert("Dados inválidos.");
      return;
    }
    const desconto = (preco * 0.5).toFixed(2);
    document.getElementById("resultado").textContent =
      `Produto: ${desc}\nCompre 3 unidades e ganhe 50% de desconto em uma unidade. Preço unitário: R$${preco}, desconto na unidade: R$${desconto}`;
  }
  