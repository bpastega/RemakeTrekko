document.addEventListener('DOMContentLoaded', function() {//
    const colorMenu = document.querySelector('.color-menu');//cria a variável colorMenu para armazenar a seleção do usuário
    const toggleButton = document.getElementById('menu-close');//faz a 
    
    
toggleButton.addEventListener('click', function() {
    colorMenu.classList.toggle('menu-hidden');//se clicar no botão, o menu será escondido no modo toggle
});

const colorList = document.querySelector('.colors-list');
    
colorList.addEventListener('click', function (event) {
    const colorBox = event.target.closest('.color');
        if (colorBox) {
            const color = colorBox.style.backgroundColor;
            document.body.style.backgroundColor = color;
        }
    });


function changeBackgroundColor() {
    const colorInput = document.getElementById("color-input");
    const body = document.body;

    body.style.backgroundColor = colorInput.value;
}

document.getElementById("color-input").addEventListener("input", changeBackgroundColor);
});

// AULA 05/10
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
    //remove task 
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
        newTaskItem.className = "taskItem";
    

        const taskContent = document.createElement("div");
        taskContent.className = "taskContent";

        taskContent.appendChild(document.createTextNode(taskText)); // Nome da tarefa
        taskContent.appendChild(document.createElement("hr")); // Quebra de linha
        taskContent.appendChild(document.createTextNode(taskDescriptionIn)); // Descrição da tarefa

        newTaskItem.appendChild(taskContent);
        document.getElementById(`${columnId}-task`).appendChild(newTaskItem);


        // newTaskItem.appendChild(document.createTextNode(taskText));  // why textnode?
        // document.getElementById(`${columnId}-task`).appendChild(newTaskItem);
         
}
