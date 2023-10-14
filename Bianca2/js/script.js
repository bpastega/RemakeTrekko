/*Função para abrir o menu de cores*/
//quando se clica no elemento 'OpenColors', é chamada a função denominada 'openMenu' que coloca o estilo do display como inicial
document.getElementById("OpenColors").onclick = 

function openMenu() { 
    document.getElementById("colorMenu").style.display = "block"; 
} 

/*Função para fechar o menu de cores*/ 
//quando se clica no elemento do ícone x, o elemento de ID 'colorMenu' tem seu display modificado para none.
document.getElementById("x-symbol").onclick = 

function closeMenu() { 
    document.getElementById("colorMenu").style.display = "none"; 
} 

/*Função para mudar a cor do fundo*/
function changeBG(cor){
    document.body.style.backgroundColor = cor;
    saveColor()
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

    // printa no log os valores dos campos de título e descrição
    console.log('Title:', title);
    console.log('Description:', description);

    // guarda a tarefa criada na função buildTaskBase em uma variável
    let createdtask = buildTaskBase(title, description);
    console.log('createdtask:', createdtask);
    document.getElementById('tasks-' + columnId).appendChild(createdtask);
    saveTask(); //antes estava comentado, após implementação da função saveTask, fica como parte do código

    //limpa os campos de título e descrição
    /*considerei usar input type reset, mas a documentação pareceu fortemenete sugerir contra 
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/reset*/

    document.getElementById('title-' + columnId).value = "";
    document.getElementById('desc-' + columnId).value = "";
}

/*Função para construção da base da tarefa, contendo div de título e descrição*/
function buildTaskBase(taskTitle, taskDesc) {
    //Cria a tarefa
    let task = document.createElement('div');
    task.className = 'task';

    //Date.now() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
    task.id = `task-${Date.now()}`;//TO DO::procurar alternativas para o Date.now()

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

    //TO DO:: Criar função separada para criação do botão de excluir tarefa*/

    return task;//retorna task recém construída para uso dentro da função addTask	
}

/*Função para salvar tarefas criadas*/
function saveTask(){
     //guarda todos os elementos com a classe 'column' em uma variável
     let complete_columns = document.querySelectorAll('.column');

     //cria um objeto vazio chamado 'tasks'
    let tasks = {};
        // Array.prototype.forEach() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        complete_columns.forEach(column => { //lembra o for do C

            //Manipula as colunas para pegar o id de cada uma
            let currentColumnId = column.id;
            tasks[currentColumnId] = [];
            console.log('ID coluna', currentColumnId);//printa o id de cada coluna

            //Pega todas as tarefas de cada coluna
            let completeTasks = column.querySelectorAll('.task');
            console.log('Tarefas:', completeTasks);

            completeTasks.forEach(task => {
                let taskInfo = {//pega as informações da tarefa, título e descrição
                    taskname: task.querySelector('.task-title').innerText,
                    taskdesc:  task.querySelector('.task-desc').innerText
                };
                tasks[currentColumnId].push(taskInfo);//adiciona as tarefas ao objeto 'tasks' da coluna atual
            });
            /* Código antigo - REFATORADO
            //Pega todos os títulos de tarefa
            let completeTaskTitle = column.querySelectorAll('.task-title');
            //Pega todos as descrições de tarefa
            let completeTaskDesc = column.querySelectorAll('.task-desc');
            */
        });
        localStorage.setItem('task-log', JSON.stringify(tasks));   
}//fim da função saveTask

/*Função para excluir tarefa*/
function deleteTask(){


}
/*Função para carregar tarefas salvas*/
function loadTasks(){
    let savedTasks = localStorage.getItem('task-log');
        if (savedTasks){
            let tasks = JSON.parse(savedTasks);
            //Object.keys() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
            Object.keys(tasks).forEach(columnId => {
                let column = document.getElementById(columnId);
                let columnTasks = tasks[columnId];
                console.log('Coluna:', column);
                console.log('Tarefas:', columnTasks);
                    columnTasks.forEach(taskData => {
                        let taskElement = buildTaskBase(taskData.taskname, taskData.taskdesc);
                        column.querySelector('.tasks').appendChild(taskElement);
                    });
            });
        }
}

/* Função para o site carregar a última cor de fundo selecionada pelo usuário */
function loadColor() {
    let color = JSON.parse(localStorage.getItem('color-log'));//guarda o color-log em uma variável
    if (color) {
        document.body.style.backgroundColor = color;//se existe cor salva no color-log, ela é aplicada
    }
}

/* Função para salvar a última cor de fundo selecionada pelo usuário */
function saveColor() {
    let currentColor = document.body.style.backgroundColor;//guarda a cor atual em uma variável
    if (currentColor) {
        localStorage.setItem('color-log', JSON.stringify(currentColor));//converte a cor atual em uma string dentro do JSON color-log
    }
}

/*Função Explicada em Sala:: prof. Gustavo
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


/*
:::::SOBRE A ENTREGA:::::

♦️Estrutura HTML 

    Deve contemplar três colunas, sendo: todo, inProgress e done, em cada coluna contendo um formulário com dois campos: nome e descrição e um botão adicionar

♦️Funções de Requisito para entrega (dia 15/10)

    ♣️ ChangeBackgroundColor() 

        Altera cor do background

    ♣️ AddTask() 

        É chamado através do botão adicionar, criando o task element e persistindo no localStorage

    ♣️ CreateTaskElement(name, description) -- Nosso equivalente:: buildTaskBase

        Cria o elemento html para injetar na coluna dinâmicamente

    ♣️ saveTask() 

        Persistir tasks no localStorage

    ♣️ loadTask()

        Recuperar tasks persistidas no localStorage

Ao implementar o html e as funcionalidades elencadas, no sistema será possível 
        ✔ alterar a cor do background, 
        ✔ adicionar tarefas, 
        ✔ mostrar as tarefas e
        ✔ carregar todas as tarefas ao dar refresh na página

A entrega do código é individual através do git, podendo ser elaborada em grupo ou também individualmente.
*/
