function converter() {
    const titulo = document.getElementById("titulo").value;
    const minutos = Number(document.getElementById("duracao").value);
    const horas = Math.floor(minutos / 60);
    const resto = minutos % 60;
    document.getElementById("saida").textContent =
      `${titulo} - ${horas}h ${resto}min`;
  }
  