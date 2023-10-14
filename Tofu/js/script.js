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
    saveColor(cor)
}
function loadColor() {
    let color = localStorage.getItem('color-log');
    if (color) {
        document.body.style.backgroundColor = color;
    }
}
//funçao para salvar a cor

function saveColor(cor) {
    localStorage.setItem('color-log', cor);
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
        //limpa os campos de input título e descrição depois da tarefa ser salva
        document.getElementById(`${columnId}-task-name`).value = "";
        document.getElementById(`${columnId}-task-description`).value = "";
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
    

    //tentativa de aprender a usar drag e drop
    function allowDrop(event) {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        const target = event.target;

        if (target.classList.contains("tasks")) {
            // Crie uma nova tarefa
            const newTask = document.getElementById(data).cloneNode(true);
            newTask.id = "task-" + Date.now(); // Crie um novo ID exclusivo para a tarefa
            newTask.draggable = true;
            newTask.ondragstart = drag;
            newTask.ondrop = drop;
            newTask.ondragover = allowDrop;
        
            // Adicione a nova tarefa ao destino
            target.appendChild(newTask);
          }
    }
    // por algun motivo so da pra arrastar e soltar a tarefa uma vez
    function drag(event) {
        event.dataTransfer.setData("text", event.target.id);
    }
    
    function drop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data));
        saveTask();
    }

    
    
    