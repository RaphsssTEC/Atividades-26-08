function simular() {
    const modelo = document.getElementById("modelo").value;
    const preco = Number(document.getElementById("preco").value);
    const entrada = (preco * 0.5).toFixed(2);
    const parcela = ((preco * 0.5) / 12).toFixed(2);
    document.getElementById("info").textContent =
      `${modelo}: Entrada R$ ${entrada}, saldo em 12x de R$ ${parcela}`;
  }
  