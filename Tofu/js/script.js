document.getElementById("OpenColors").onclick = 

function OpenMenu() { 
    document.getElementById("colorMenu").style.display = "initial"; 
} 

/*Função para fechar o menu de cores*/ 
document.getElementById("x-symbol").onclick = 

function CloseMenu() { 
    document.getElementById("colorMenu").style.display = "none"; 
} 

/*Função para mudar a cor do fundo*/
function ChangeBG(cor){
    document.body.style.backgroundColor = cor;
}

// COLUNAS
function createTaskElement(taskName, taskDescription){
    const task = document.createElement('div');
    task.className = 'task';
    task.draggable = true;
    task.id = `task-${Date-now()}`;

    const taskNameElement = document.createElement('div');
    taskNameElement.className = 'task-name';
    taskNameElement.innerText = taskName;

    const taskDescriptionElement = document.createElement('div');
    taskDescriptionElement.className = 'task-description';
    taskDescriptionElement.innerText = taskDescription;

    task.appendChild(taskNameElement);
    task.appendChild(taskDescriptionElement);

    return task;
}
// nao pode usar -
function addTask(columnId) {
    const taskText = document.getElementById(`${columnId}-task-name`).value;
    const taskDescriptionIn = document.getElementById(`${columnId}-task-description`).value;
    // console.log(taskText)

    if(taskText === ""){
        window.alert("Nenhuma tarefa inserida!");
        return;
    }
    

        const newTaskItem = document.createElement("li");
        newTaskItem.className = "taskItem trello-card";
    

        const taskContent = document.createElement("div");
        taskContent.className = "taskContent";

        taskContent.appendChild(document.createTextNode(taskText)); // Nome da tarefa
        taskContent.appendChild(document.createElement("hr")); // Quebra de linha
        taskContent.appendChild(document.createTextNode(taskDescriptionIn)); // Descrição da tarefa
        //console.log(taskContent)
        saveTask();

        // excluir tarefa
        const deleteButton = document.createElement("button");
        // deleteButton.innerHTML = "delete";
        deleteButton.className = "deleteButton";

        // adicionando o icon de lixeira
        const icon = document.createElement("i");
        icon.className = "ri-delete-bin-line";
        deleteButton.appendChild(icon);

        deleteButton.addEventListener("click", function() {
            // quando o usuario clicar no X ira chamar a funçao excluir tarefa
            newTaskItem.remove();
        });

        taskContent.appendChild(deleteButton);
        newTaskItem.appendChild(taskContent);
        document.getElementById(`${columnId}-task`).appendChild(newTaskItem);


        // newTaskItem.appendChild(document.createTextNode(taskText));  // why textnode?
        // document.getElementById(`${columnId}-task`).appendChild(newTaskItem);
         
}

    function saveTask(){
        const columns = document.querySelectorAll('.column');
        console.log(columns)
        const tasks = {};

        columns.forEach(column=>{
            const columnId = column.id;
            tasks[columnId] = [];
            // console.log('===');
            console.log(columnId);
            const taskElements = column.querySelectorAll('.task');


            taskElements.forEach(task=>{
            const dataTask = {
                name: task.querySelector('.task-name').innerText,
                description: task.querySelector('.task-description').innerText
            };
            tasks[columnId.push](dataTask);
        }); //fim do forEch tasks

        // console.log(dataTask );
        }); //fim do forEch column



        // localStorage.setItem("tasks", JSON.stringify("column.id"));


        // localStorage.setItem('todos', JSON.stringify("column.id"));


    } //fim da function saveTask
// mudar tema
// let themeToggler = document.querySelector('.theme-toggler');

// themeToggler.onclick = () =>{
//     themeToggler.classList.toggle('active');
// }