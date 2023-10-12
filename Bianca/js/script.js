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
/*Função para*/


/*Função para adicionar nova tarefa, que recebe a ID do form coluna*/
function addTask(column) {
    const newTaskTitle = document.getElementById(`${columnId}-task-title`).value;
    const newTaskDescription = document.getElementById(`${columnId}-task-description`).value;

 }
 
/*Função prof. Gustavo*/
function loadTasks(){
    const savedTasks = localStorage.getItem('tasks');
    console.log(savedTasks);
    if (savedTasks){
        const tasks = JSON.parse(savedTasks);

        Object.keys(tasks).forEach(columnId => {
            const column = document.getElementById(columnId);
            const columntasks = tasks(columnId);
        });

            columntasks.forEach(taskdata =>{
                console.log(taskdata);
                const task = createtaskelement(taskdata.name, taskdata.taskDescription);
                column.querySelector('.tasks').appendChild(task);
            }); 
             
    } 
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

