/*Função para abrir o menu de cores*/
//Quando se clica no elemento 'OpenColors', é chamada a função denominada 'openMenu' que coloca o estilo do display como inicial
document.getElementById("OpenColors").onclick = 

function openMenu() { 
    document.getElementById("colorMenu").style.display = "block"; 
} 

/*Função para fechar o menu de cores*/ 
//Quando se clica no elemento do ícone x, o elemento de ID 'colorMenu' tem seu display modificado para none.*/
document.getElementById("x-symbol").onclick = 

function closeMenu() { 
    document.getElementById("colorMenu").style.display = "none"; 
} 

/*Função para mudar a cor do fundo*/
function changeBG(cor){
    document.body.style.backgroundColor = cor;
}


/*SOFRIMENTO PURO. nada abaixo dá certo por algum motivo*/
function addTask(column) {
    let currentColumnID = column.id;
    /*Differences between querySelector() and getElementById() -
     (https://dev.to/colelevy/queryselector-vs-getelementbyid-166n#:~:text=getElementById()%20only%20works%20with,before%20returning%20the%20first%20match.)

     "The main difference between these two functions is the way they select elements. getElementById() only works with ID attributes, while querySelector() 
     can work with any CSS selector. Additionally, getElementById() is faster than querySelector() because it only needs to search for one element, whereas 
     querySelector() may need to search for multiple elements before returning the first match." */

    const taskTitle = document.getElementById(`${currentColumnID}-task-name`).value;
    /*document.querySelector: retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) 
    que corresponde ao grupo especificado de seletores.*/
    const taskDescription = document.getElementById(`${currentColumnID}-task-description`).value;

    console.log(taskTitle)
    // Verifica se o título veio vazio
    if (taskTitle.trim() === '') {
        alert('Insira o título da tarefa.');
        return;
    };

    /*Node: appendChild() method - https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild*/
     // Cria um elemento para representar a nova tarefa
     const newTaskItem = document.createElement('li');
     newTaskItem.classList.add('task-item');  // Adiciona uma classe para estilização
 
     // Cria elementos para o título e descrição da tarefa
     const taskTitleElement = document.createElement('h2');
     taskTitleElement.textContent = taskTitle;
 
     const taskDescriptionElement = document.createElement('p');
     taskDescriptionElement.textContent = taskDescriptionInput.value;
 
     // Adiciona os elementos de título e descrição ao item da tarefa
     newTaskItem.appendChild(taskTitleElement);
     newTaskItem.appendChild(taskDescriptionElement);
 
     // Adiciona a nova tarefa à lista correspondente

     //caraio
     const taskList = document.querySelector(`#taskList${column.id.charAt(0).toUpperCase() + column.id.slice(1)}`);
     taskList.appendChild(newTaskItem);
 
     // Limpa os campos de entrada
     taskTitleInput.value = '';
     taskDescriptionInput.value = '';

     column.push(task);

 }
 

/* 
//Função para deslocar tarefa
function moveTask(){

}

//Função para salvar tarefa criada
function SaveTask(){}*/


/*
Funções de Requisito para entrega

· ChangeBackgroundColor() 

    Altera cor do background

·AddTask() 

    É chamado através do botão adicionar, criando o task element e persistindo no localStorage

· CreateTaskElement(name, description) 

    Cria o elemento html para injetar na coluna dinâmicamente

· saveTask() 

Salvar task no localStorage

*/

