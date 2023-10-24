
// function OpenMenu() {
//     document.getElementById("colorMenu").style.display = "initial";
// }

    /* MENU DE CORES */

    // função para fechar o menu de cores
    function CloseMenu() {
    document.getElementById("colorMenu").style.display = "none";
}

    // função para alterar a cor de fundo
    function ChangeBG(cor) {
    document.body.style.backgroundColor = cor;
    saveColor(cor)
}

    // função para carregar a cor previamente escolhida
    function loadColor() {
    let color = localStorage.getItem('color-log');
    if (color) {
        document.body.style.backgroundColor = color;
    }
}

    // função para salvar a cor escolhida
    function saveColor(cor) {
    localStorage.setItem('color-log', cor);
}
    /* COLUNAS */

    // função para criar um elemento HTML representando uma tarefa com o nome e descrição.
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
    
    return task;
}


    // funçao para adicionar uma nova tarefa a uma coluna especifica, recebe columnId como parâmetro para identificar a coluna.
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
    // funçao para salvar o estado atual das tarefas no armazenamento local no navegador (localStorage).
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

    // função para carregar as tarefas salvas, restaurando o estado anterior do quadro somente quando todo o HTML é carregado.
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
    

    // funçao para permitir que um elemento seja solto em um local específico.
    function allowDrop(event) {
        event.preventDefault();
        // para evitar o comportamento padrão do navegador em relação ao elemento arrastado. 
    }
    // funçao para iniciar a operação de arrastar e soltar para um elemento
    function drag(event) {
        event.dataTransfer.setData("text/plain", event.target.id);
    }
    // funçao para manipular a soltura de uma tarefa em uma área específica.
    function drop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("text/plain");
        const draggedElement = document.getElementById(data);
        let targetColumn = event.target;
        event.target.appendChild(document.getElementById(data));

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

    /*POP-UP DE EXCLUSÃO*/
    
    // função para pop-up de confirmaçao de exclusão de tarefa
    function myConfirmBox(message) {
    let element = document.createElement("div");
    element.classList.add("box-background");
    element.innerHTML = `<div class="box">
                            ${message}
                            <div>
                                <button id="trueButton" class="btn yes">Yes</button>
                                <button id="falseButton" class="btn no">No</button>
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
