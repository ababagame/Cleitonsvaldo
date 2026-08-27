document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar
    
    const nome = document.getElementById('nome').value;
    const resultado = document.getElementById('resultado');
    
    if (nome) {
        resultado.innerText = `Obrigado pelo contato, \${nome}! Sua mensagem foi enviada (simulação).`;
        resultado.style.color = 'green';
        this.reset();
    } else {
        resultado.innerText = "Por favor, preencha seu nome.";
        resultado.style.color = 'red';
    }
});