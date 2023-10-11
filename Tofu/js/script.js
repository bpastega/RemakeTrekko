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
    const icon = document.createElement("i");
    icon.className = "ri-delete-bin-line";
    deleteButton.appendChild(icon);
    task.appendChild(deleteButton);

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


    const newTaskItem = document.createElement("li");
    newTaskItem.className = "taskItem trello-card";


    const taskContent = document.createElement("div");
    taskContent.className = "taskContent";

    // METODO ANTERIOR A FUNÇAO SAVETASK
    // taskContent.appendChild(document.createTextNode(taskText)); // Nome da tarefa
    // taskContent.appendChild(document.createElement("hr")); // Quebra de linha
    // taskContent.appendChild(document.createTextNode(taskDescriptionIn)); // Descrição da tarefa
    // //function saveTask irá salvar as tarefas assim que adicionalas

    const taskName = document.createElement("div");
    taskName.className = "task-name";
    taskName.appendChild(document.createTextNode(taskText));
    taskContent.appendChild(taskName);
    taskContent.appendChild(document.createElement("hr"));
    //criando uma quebra de linha p ficar mais bonito
    const taskDescription = document.createElement("div");
    taskDescription.className = "task-description";
    taskDescription.appendChild(document.createTextNode(taskDescriptionIn));
    taskContent.appendChild(taskDescription);
    // aqui esta adicionando as classes task-name e task-description que serão utilizadas no saveTask

    // excluir tarefa
    const deleteButton = document.createElement("button");
    // deleteButton.innerHTML = "delete";
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

    // newTaskItem.appendChild(document.createTextNode(taskText));  // why textnode?
    // document.getElementById(`${columnId}-task`).appendChild(newTaskItem);

}

function saveTask() {
    const columns = document.querySelectorAll('.column');
    console.log(columns)
    const tasks = {};

    columns.forEach(column => {
        const columnId = column.id;
        tasks[columnId] = [];
        // console.log('===');
        console.log(columnId);
        const taskElements = column.querySelectorAll('.taskItem');
        //elementos de tarefas foram criados com a classe taskItem

        taskElements.forEach(task => {
            const dataTask = {
                name: task.querySelector('.task-name').innerText,
                description: task.querySelector('.task-description').innerText
            };
            tasks[columnId].push(dataTask);
        }); //fim do forEch tasks

        // console.log(dataTask );
    }); //fim do forEch column


    localStorage.setItem("tasks", JSON.stringify(tasks));

} //fim da function saveTask

    // function loadTasks (){
    //     const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    //     //implementar (!savedTasks) para return
    //     for (const columnId in savedTasks){
    //         const column = document.getElementById(columnId);
    //         const tasks = savedTasks[columnId]
    //         //iterando as colunas existentes
    //     }
    // }//fim da funçao loadTasks
    // function loadTasks() {
    //     const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    //     //recuperando os dados armazenados em tasks no localStorage
      
    //     //loop que percorre o savedTasks
    //     for (const columnId in savedTasks) {
    //       const column = document.getElementById(columnId);
    //       const tasks = savedTasks[columnId]; // //recuperando a lista de tarefas
      
    //       //verificando se é um array
    //       if (column && tasks && Array.isArray(tasks)) {
    //         tasks.forEach(taskData => { //loop para cada tarefa na lista
    //           const taskElement = createTaskElement(taskData.name, taskData.description);
    //           //chamando a funçao que vai criar um novo elemento tarefa com os dados taskData
    //           column.querySelector(".tasks").appendChild(taskElement); 
              
              
    //         });
    //       }}}
    //       window.addEventListener("load", loadTasks);
    function loadTasks() {
        const savedTasks = JSON.parse(localStorage.getItem("tasks"));
        
        for (const columnId in savedTasks) {
            const column = document.getElementById(columnId);
            const tasks = savedTasks[columnId];
            
            if (column && tasks && Array.isArray(tasks)) {
                tasks.forEach(taskData => {
                    const taskElement = createTaskElement(taskData.name, taskData.description);
                    column.querySelector(".tasks").appendChild(taskElement);
    
                    // Adicionar funcionalidades à tarefa carregada, como excluir
                    const deleteButton = taskElement.querySelector('.deleteButton');
                    deleteButton.addEventListener("click", function () {
                        taskElement.remove();
                        saveTask(); // Chame a função saveTask após excluir a tarefa
                    });
                });
            }
        }
    }
    window.addEventListener("load", loadTasks);
    