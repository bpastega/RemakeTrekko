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
        
        const confirmRemove = myConfirmBox("Sure?").then(response=>{
            if(response){
                task.remove();
                saveTask();
            }
        });
        
    });
    
    // task.addEventListener('dragstart', dragStart())
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
        // nao fazer nada no drag
    }
    // por algun motivo so da pra arrastar e soltar a tarefa uma vez
    function drag(event) {
        event.dataTransfer.setData("text/plain", event.target.id);
    }
    
    function drop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("text/plain");
        const draggedElement = document.getElementById(data);
        let targetColumn = event.target;
        event.target.appendChild(document.getElementById(data));

        // saveTask();
        while(targetColumn && !targetColumn.classList.contains('column')){
            targetColumn = targetColumn.parentElement;
        }
        if(targetColumn){
            const newTask = createTaskElement(
                draggedElement.querySelector('.task-name').innerText,
                draggedElement.querySelector('.task-description').innerText

            );
            targetColumn.querySelector('.tasks').appendChild(newTask);
            draggedElement.parentElement.removeChild(draggedElement);
            saveTask();

        
    }
}

    
    
function myConfirmBox(message) {
    let element = document.createElement("div");
    element.classList.add("box-background");
    element.innerHTML = `<div class="box">
                            ${message}
                            <div>
                                <button id="trueButton" class="btn green">Yes</button>
                                <button id="falseButton" class="btn red">No</button>
                            </div>
                        </div>`;
    document.body.appendChild(element);
    return new Promise(function (resolve, reject) {
        document.getElementById("trueButton").addEventListener("click", function () {
            resolve(true);
            document.body.removeChild(element);
        });
        document.getElementById("falseButton").addEventListener("click", function () {
            resolve(false);
            document.body.removeChild(element);
        });
    })
    
}
// document.getElementById("myButton").addEventListener("click", () => {
//     myConfirmBox("nao funcionaaaa").then(response=>{
//         console.log(response); 
//     })
// })