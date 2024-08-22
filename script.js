// Selecionando o input, botão e lista
const newItem = document.querySelector('.newItem');
const btnNewItem = document.querySelector('.btnNewItem');
const lista = document.querySelector('ul');

// Função para adicionar novo item
btnNewItem.addEventListener('click', function() {
    const texto = newItem.value;

    if (texto.trim() !== '') { // Verifica se o input não está vazio
        const item = document.createElement('li');
        
        // Criando a estrutura interna do li com checkbox, texto e botão de delete
        item.innerHTML = `
            <div>
                <input class="checkbox" type="checkbox">
                <span>${texto}</span>
            </div>
            <button class="delet"><img src="/img/delete.svg" alt="delete"></button>
        `;
        
        lista.appendChild(item);
        newItem.value = ''; // Limpa o campo de input
    }
});

// Event delegation para remover item ao clicar no botão deletar
lista.addEventListener('click', function(event) {
    if (event.target.closest('.delet')) {
        const item = event.target.closest('li');
        lista.removeChild(item);
    }
});

lista.addEventListener('change', function(event) {
    if (event.target.classList.contains('checkbox')) {
        const itemText = event.target.nextElementSibling;
        if (event.target.checked) {
            itemText.style.textDecoration = 'line-through'; // Risca o texto
        } else {
            itemText.style.textDecoration = 'none'; // Remove o risco
        }
    }
});