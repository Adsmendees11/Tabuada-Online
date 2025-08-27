// script.js
function calcularTabuada() {
    // Obtém o valor do input com id 'numero'
    const num = document.getElementById('numero').value;
    
    // Obtém o elemento com id 'tabu' onde a tabuada será exibida
    const tabu = document.getElementById('tabu');
    
    // Limpa o conteúdo anterior do elemento 'tabu'
    tabu.innerHTML = ''; // Limpar conteúdo anterior

    // Verifica se o input está vazio
    if (num === '') {
        // Se estiver vazio, exibe uma mensagem pedindo para inserir um número
        tabu.innerHTML = '<p>Por favor, insira um número.</p>';
        return; // Sai da função
    }

    // Loop de 1 a 10 para calcular a tabuada
    for (let i = 1; i <= 10; i++) {
        // Calcula o resultado da multiplicação
        const resultado = num * i;
        
        // Cria um novo elemento <p> para exibir o resultado
        const linha = document.createElement('p');
        
        // Define o texto do elemento <p> com o resultado da multiplicação
        linha.textContent = `${num} x ${i} = ${resultado}`;
        
        // Adiciona o elemento <p> ao elemento 'tabu'
        tabu.appendChild(linha);
    }
}