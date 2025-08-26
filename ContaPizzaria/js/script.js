function receberValores() {
    valorConta = parseFloat(document.getElementById('valorConta').value);
    quantidadePessoas = parseInt(document.getElementById('quantidadePessoas').value);
}

function tratarValores() {
    if (isNaN(valorConta) || valorConta < 0) {
        alert('Valor da conta não é válido.');
        return false;
    }

    if (isNaN(quantidadePessoas) || quantidadePessoas <= 0) {
        alert('Número inválido de pessoas.');
        return false;
    }

    return true;
}

function calcularConta() {
    valorPorPessoa = valorConta / quantidadePessoas;
    return valorPorPessoa;
}

function exibirResultado() {
    receberValores();

    if (!tratarValores()) return;

    calcularConta();

    document.getElementById('resultado').innerHTML = `R$ ${valorPorPessoa.toFixed(2)}`;
}
