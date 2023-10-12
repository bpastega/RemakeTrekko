// document.getElementById("OpenColors").onclick = 

function OpenMenu() {
    document.getElementById("colorMenu").style.display = "initial";
}

/*Função para fechar o menu de cores*/
// document.getElementById("x-symbol").onclick = 

function CloseMenu() {
    document.getElementById("colorMenu").style.display = "none";
}

/*Função para mudar a cor do fundo*/
function ChangeBG(cor) {
    document.body.style.backgroundColor = cor;
}

// COLUNAS
function createTaskElement(taskName, taskDescription) {
    const task = document.createElement('div');
    task.className = 'task';
    task.draggable = true;
    task.id = `task-${Date.now()}`;

    const taskNameElement = document.createElement('div');
    taskNameElement.className = 'task-name';
    taskNameElement.innerText = taskName;

    const taskDescriptionElement = document.createElement('div');
    taskDescriptionElement.className = 'task-description';
    taskDescriptionElement.innerText = taskDescription;

    task.appendChild(taskNameElement);
    task.appendChild(taskDescriptionElement);
    //criando botao excluir tarefa que sera atribuido tanto ao criar quanto ao load

        const deleteButton = document.createElement("button");
        deleteButton.className = "deleteButton";
         // adicionando o icon de lixeira
        const icon = document.createElement("i");
        icon.className = "ri-delete-bin-line";
        deleteButton.appendChild(icon);
        task.appendChild(deleteButton);
        deleteButton.addEventListener("click", function () {
        // quando o usuario clicar no X ira chamar a funçao excluir tarefa
       
        task.remove(); //removendo a task
        saveTask();
    });

         /*  // excluir tarefa
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
            console.log(newTaskItem) */



    return task;
}
// nao pode usar -
function addTask(columnId) {
    const taskText = document.getElementById(`${columnId}-task-name`).value;
    const taskDescriptionIn = document.getElementById(`${columnId}-task-description`).value;
    // console.log(taskText)

    if (taskText === "") {
        window.alert("Nenhuma tarefa inserida!");
        return;
    }
    else{
        const newTaskItem = createTaskElement(taskText, taskDescriptionIn);
        document.getElementById(`${columnId}-task`).appendChild(newTaskItem); 
        saveTask();
    }

}

function saveTask() {
    const columns = document.querySelectorAll('.column');
   console.log(localStorage)
    const tasks = {};

    columns.forEach(column => {
        const columnId = column.id;
        tasks[columnId] = [];
        // console.log('===');
        console.log(columnId);
        const taskElements = column.querySelectorAll('.task');
        //elementos de tarefas foram criados com a classe taskItem

        taskElements.forEach(task => {
            const dataTask = {
                name: task.querySelector('.task-name').innerText,
                description: task.querySelector('.task-description').innerText
            };
            tasks[columnId].push(dataTask);
        }); //fim do forEch tasks

        // console.log(dataTask );
    }); //fim do forEach column
    console.log(tasks);

    localStorage.setItem('tasks', JSON.stringify(tasks));

} //fim da function saveTask

  
    function loadTasks() {
        const savedTasks = JSON.parse(localStorage.getItem("tasks"));
        
        //for (const columnId in savedTasks) 
        if(savedTasks){
            Object.keys(savedTasks).forEach((columnId)=>{
                const column = document.getElementById(columnId);
                const tasks = savedTasks[columnId];
                

                    tasks.forEach(taskData => {
                        const taskElement = createTaskElement(taskData.name, taskData.description);
                        column.querySelector(".tasks").appendChild(taskElement);
        
                        
                    });
                
            })
        }
    }
    

    