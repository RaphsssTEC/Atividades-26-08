function mostrarHora() {
    let horaBrasil = Number(document.getElementById("hora").value);
    if(horaBrasil < 0 || horaBrasil > 23 || isNaN(horaBrasil)) {
      alert("Hora inválida.");
      return;
    }
    let horaFranca = (horaBrasil + 5) % 24;
    document.getElementById("resultado").textContent =
      `Hora no Brasil: ${horaBrasil}h\nHora na França: ${horaFranca}h`;
  }
  