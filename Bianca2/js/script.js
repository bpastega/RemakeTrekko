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

function addTask(columnId) {
    // Get the title and description from the corresponding input fields
    var titleInput = document.getElementById('title-' + columnId);
    var descriptionInput = document.getElementById('desc-' + columnId);

    var title = titleInput.value;
    var description = descriptionInput.value;

    // Do something with the title and description (e.g., create a new task)
    console.log('Title:', title);
    console.log('Description:', description);
}

/*
function readTasks(){
    const json = localStorage.getItem("tasks-data");
    if(!json){
        return[

        ]

    }
}
*/

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