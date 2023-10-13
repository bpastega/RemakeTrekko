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

/*Função para adicionar tarefa*/
function addTask(columnId) {
    // Pega o título e a descrição da tarefa dos campos input
    let titleInput = document.getElementById('title-' + columnId);
    let descriptionInput = document.getElementById('desc-' + columnId);
    
    //verifica se o campo de título está vazio
    if (titleInput.value == ""){
        alert("Insira um título para a tarefa!");
        return;
    }

    //guarda os valores dos campos de título e descrição em variáveis
    let title = titleInput.value;
    let description = descriptionInput.value;

    // Printa no log os valores dos campos de título e descrição
    console.log('Title:', title);
    console.log('Description:', description);

    // Guarda a tarefa criada na função buildTaskBase em uma variável
    let createdtask = buildTaskBase(title, description);
    console.log('createdtask:', createdtask);
    document.getElementById('tasks-' + columnId).appendChild(createdtask);
    //saveTask();
}

/*Função para construção da base da tarefa, dentro de 'task'*/
function buildTaskBase(taskTitle, taskDesc) {
    //Cria a tarefa
    let task = document.createElement('div');
    task.className = 'task';
    task.id = `task-${Date.now()}`;//copiado da tofu, eventualmente procurar alternativas para o Date.now()
    console.log('File name:', task.id);

    //Cria o slot que contém o título da tarefa
    let taskTitleSlot = document.createElement('div');
    taskTitleSlot.className = 'task-title';
    taskTitleSlot.innerText = taskTitle;

    //Cria o slot que contém a descrição da tarefa
    let taskDescSlot = document.createElement('div');
    taskDescSlot.className = 'task-desc';
    taskDescSlot.innerText = taskDesc;

    //Adiciona os slots à tarefa
    task.appendChild(taskTitleSlot);
    task.appendChild(taskDescSlot);

    //TO DO:: Criar função separada para criação de botão de excluir tarefa*/

    return task;//retorna task recém construída para uso dentro da função addTask	
}

/*Função para salvar tarefas criadas*/

/*Função prof. Gustavo
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
*/