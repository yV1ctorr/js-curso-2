let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function btnConsole() {
    console.log('O botão foi clicado');
};

function btnAlert() {
    alert('Eu amo JS');
};

function btnPrompt() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você!`);
};

function btnSoma() {
    valor1 = parseInt(prompt('Digite um numero:'));
    valor2 = parseInt(prompt('Digite um numero:'));
    soma = valor1 + valor2;
    alert(`O resultado foi: ${soma}`);
};