// AULA DIA 04/10/2023 - parte estrutural do HTML - Colunas do Trello
/*
um container(colunas) que abrange todas as divs de colunas (cade coluna) - to do, doing, done

ondragover="allowDrop(evebt)"
ondrop="drop(event)"

componentes
titulo, area de drop e formulario
inputs type text
textarea
ao clicar no botao deve-se chamar a funçao js "addTask"

passar done como parametro permite o reaproveitamento do codigo, nao utilizando if na funçao. 

recebe um parametro e outra funçao
document.addEventListener("DOMContentLoaded", function(){
    loadTasks();
});
apos o HTML carregar entao executa o JS

    AULA 05/10 JS DINCAMICO

    function appendchild()
    injetar o html dinamicamente
    tag ul id="nome-do-id"

    function addtask(){

        var taskText = document.getEelementById("newTask").value;  //pega o valor do q foi digitado e insere
        na variavel
        if(taskText === ""){   //se tiver vazio termina a funçao
            alert("insira tarefa");
            return;
        }

        var newTaskItem = document.creatElement("li");
        newTaskItem.className = "taskItem";

        newTaskItem.appendChild(document.createTextNode(taskText));  why textnode?
        document.getElementById("taskList").appendChild(newTaskItem);
        document.getElementById(newTask).value
    }

 DICA: `<li> ${} <\li>`

function createTaskElement(descrição, titulo){
        return taskElement;
    }
 function addTask(id de cada coluna){
    document.getElementByid(``)
    var newTask = createTaskElement(descrição, titulo){
        append
    }
 }
trim = tira o espaço

function createTaskElement(taskName, taskDescription){
    const task = document.createElement('div');
    task.className = 'task;
    task.draggable = true;
    task.id = `task-${Date-now()}`;

    const taskNameElement = document.createElement('div');
    taskNameElement.className = 'task-name';
    taskNameElement.innerText = taskName;

    const taskDescriptionElement = document.createElement('div');
    taskDescriptionElement.className = 'task-description';
    taskDescriptionElement.innerText = taskDescription;

    //remove task 
}


AULA 10/10 TERÇA



ADA LOVELACE - comentário feito.

criar uma saveTask()
 {"key":[value]}
salvar as tasks -> localStorage
 localStorage.setItem("chumimi");
 adicionando novo item

button onclick chamar a savetask()
selecionar todas as colunas // querySelectorAll('.column')
acessar o id -> column.id
tasks[columnId] = []

tasks[columnId.push](taskData);
dar um console.log(taskData);

localStorage("tasks", JSONstringify(tasks));

AULA DIA 11/10/2024 QUARTA-FEIRA

loadTask Gustavo Version

adicionandar um listener no html entre <script>
document.addEventListener("DOMContentLoaded", function()){

});

function loadTasks(){
    const savedTasksJSON = localStorage.getItem('tasks');

    if(savedTasks){
        const tasks =JSONparse(savedTasksJSON);
        console.log(taks)
        console.log(Object.keys(taks))
        Object.keys(tasks).forEach(columnId =>{
            const column = document.getElementById(columnId);
            const columnTasks = tasks[columnId];

            columnTasks.forEach(tasksData =>{
                console.log(taskData);
                const task = createTaskElement(taskData.name, taskData.description);
                columm.querySelector('.tasks').appendChild(tasks);
            });
        });
    }

}



    bloco de codigo excluir tarefa
    
              // excluir tarefa
            const deleteButton = document.createElement("button");
            deleteButton.className = "deleteButton";

            // adicionando o icon de lixeira
            const icon = document.createElement("i");
            icon.className = "ri-delete-bin-line";
            deleteButton.appendChild(icon);

            deleteButton.addEventListener("click", function () {
                // quando o usuario clicar no X ira chamar a funçao excluir tarefa
                newTaskItem.remove();
            });

            taskContent.appendChild(deleteButton);
            newTaskItem.appendChild(taskContent);
            document.getElementById(`${columnId}-task`).appendChild(newTaskItem);
            saveTask(); //salvando a task
            console.log(newTaskItem) 

            17/10 TERÇA-FEIRA

            remover a task cod

            const removeTaskElement = document.createElement('div');
            removeTaskElement.className ='removeTask';
            removeTaskElement.innerHTML= 'icon entra aqui';
            removeTaskElement.onclick = function (){
                removeTask(task.id);
            }

            implementando a function

            removeTask(){
                const confirmRemove = confirm ("certeza?");
                if(confirmRemove){
                    const taskToRemove = document.getElementById(taskId);
                    taskToRemove.parentElement.removeChild(taskToRemove);
                    saveTasks();
                }
            }

            dragStart


            AULA 18/10/2023

            const data = event.dataTransfer.getData("text/plain");
            const draggedElement = document.getElementById(data);
            let targetColumn - event.target;

            while(targetColumn && !targetColumn.classList.contains('column)){
                targetColumn = targetColumn.parentElement;
            }

            if(targetColumn){
                const newTask = createTaskElement(
                    draggedElement.querySelector('.task-name').innerText;
                    draggedElement.querySelector('.task-description').innerText;

                );
                targetColumn.querySelector('.tasks).appendChild(newTask);
                draggedElement.parentElement.removeChild(draggedElement);
                saveTask();
            }

            
*/