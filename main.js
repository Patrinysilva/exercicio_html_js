document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();


    const primeiroNumero = document.getElementById('campoA').value;
    const segundoNumero = document.getElementById('campoB').value;
    const mensagem = document.getElementById('mensagem');

    if (campoB > campoA) {
        mensagem.textContent = "O número B é maior que o número A.";
        mensagem.className = "message positive";
    } else {
        mensagem.textContent = "O número A deve ser maior que o número B.";
        mensagem.className = "message negative";
    }

    mensagem.style.display = "block";

})
