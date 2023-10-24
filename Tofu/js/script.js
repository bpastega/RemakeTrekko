
// function OpenMenu() {
//     document.getElementById("colorMenu").style.display = "initial";
// }


/*  SEÇÃO: MENU DE CORES */

/*Função para fechar o menu de cores*/
    function CloseMenu() {
        document.getElementById("colorMenu").style.display = "none";//coloca o display da div colorMenu como none
    }

/*Função para alterar a cor de fundo*/
    function ChangeBG(cor) {
        document.body.style.backgroundColor = cor;//altera a cor de fundo do body para a cor correspondente ao parâmetro 'cor'
        saveColor(cor);//chama a função saveColor, passando a cor como parâmetro
    }

/*Função para salvar a cor de fundo atual*/
    function saveColor(cor) {
        localStorage.setItem('color-log', cor);//salva a cor no localStorage
    }

/*Função para carregar a cor previamente escolhida*/
    function loadColor() {
        let color = localStorage.getItem('color-log');
            if (color) {    //caso haja uma cor salva no localStorage, ela será aplicada como cor de fundo
                document.body.style.backgroundColor = color;
            }
    }   

/*  SEÇÃO: COLUNAS */

/*Função para criar um elemento HTML representando uma tarefa com nome e descrição.*/
    function createTaskElement(taskName, taskDescription) {
        const task = document.createElement('div'); //cria uma div com o nome task
        task.className = 'task';//atribui a classe task a div criada
        task.draggable = true;
        task.id = `task-${Date.now()}`;//gera dinâmicamente uma id única para a div task

        const taskNameElement = document.createElement('div');//cria uma div aninhada dentro da task, para o nome da tarefa
        taskNameElement.className = 'task-name';
        taskNameElement.innerText = taskName;

        const taskDescriptionElement = document.createElement('div');//cria uma div aninhada dentro da task, para a descrição da tarefa
        taskDescriptionElement.className = 'task-description';
        taskDescriptionElement.innerText = taskDescription;

        task.appendChild(taskNameElement);   //adiciona os elementos de nome e descrição como 'filhos' da div task
        task.appendChild(taskDescriptionElement);

        //Essa parte da função cria o botão de excluir tarefa, que sera atribuido tanto ao criar quanto ao load 
            const deleteButton = document.createElement("button");
            deleteButton.className = "deleteButton";
            // adicionando o icon de lixeira
            const icon = document.createElement("i");//cria um elemento i
            icon.className = "ri-delete-bin-line";//atribui a classe que contém a imagem da lixeira
            deleteButton.appendChild(icon);
            task.appendChild(deleteButton);

            deleteButton.addEventListener("click", function () {
                const confirmRemove = myConfirmBox("Sure?").then(response=>{
                    if(response){
                        task.remove();//caso o usuário confirme a operação de deleção, o elemento é removido e a função saveTask é chamada para salvar o estado atual do quadro
                        saveTask();
                    }
                });
            });
    
        return task;
    }


/*Função para adicionar uma nova tarefa a uma coluna especifica, recebendo columnId como parâmetro para identificar a coluna a ser manipulada.*/
    function addTask(columnId) {
        const taskText = document.getElementById(`${columnId}-task-name`).value; 
        //por haver um padrão de nomenclatura do id para o nome e descrição das tasks, é possível identificar a task que está sendo manipulada a partir do id da coluna
        const taskDescriptionIn = document.getElementById(`${columnId}-task-description`).value;
        // console.log(taskText)
            if (taskText === "") {//caso o título da tarefa esteja vazio, a operação não será concluída e será exibido um alerta
                window.alert("Nenhuma tarefa inserida!");
                return;
            }

            else{
                const newTaskItem = createTaskElement(taskText, taskDescriptionIn); //cria um elemento de tarefa com os valores dos campos de input
                document.getElementById(`${columnId}-task`).appendChild(newTaskItem); 
                saveTask();
                //limpa os campos de input título e descrição depois da tarefa ser salva
                document.getElementById(`${columnId}-task-name`).value = "";
                document.getElementById(`${columnId}-task-description`).value = "";
        }
}
/*Função para salvar o estado atual das tarefas no armazenamento local no navegador (localStorage).*/
    function saveTask() {
        const columns = document.querySelectorAll('.column');//seleciona todas as colunas
        console.log(localStorage)
        const tasks = {};

        columns.forEach(column => {
            const columnId = column.id;
            tasks[columnId] = [];//inicializa o array de tarefas vazio
            // console.log('===');
            console.log(columnId);
            const taskElements = column.querySelectorAll('.task');//seleciona todas as tarefas dentro da coluna
            //elementos de tarefas foram criados com a classe taskItem

                taskElements.forEach(task => {//dentro da procura de cada coluna(.forEach(column)), procura-se cada tarefa dentro dessa coluna(.forEach(task))
                    const dataTask = {
                    name: task.querySelector('.task-name').innerText,
                    description: task.querySelector('.task-description').innerText
                };
            tasks[columnId].push(dataTask);
        }); //fim do forEch tasks

        // console.log(dataTask );
    }); //fim do forEach column
    console.log(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));//salva o item tasks no localStorage, convertido em string através do método JSON.stringify
} //fim da function saveTask

/*Função para carregar as tarefas salvas, restaurando o estado anterior do quadro somente quando todo o HTML é carregado.*/
    function loadTasks() {
        const savedTasks = JSON.parse(localStorage.getItem("tasks"));//recupera as tarefas salvas no localStorage e as converte em objeto através do método JSON.parse
        
        //for (const columnId in savedTasks) 
        if(savedTasks){//caso haja tarefas salvas, elas serão carregadas
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
    

/*Função para permitir que um elemento seja solto em um local específico.*/
    function allowDrop(event) {
        event.preventDefault();
        // para evitar o comportamento padrão do navegador em relação ao elemento arrastado. 
    }

/*Função para iniciar a operação de arrastar e soltar para um elemento*/
    function drag(event) {
        event.dataTransfer.setData("text/plain", event.target.id);
    }

/*Função para manipular a soltura de uma tarefa em uma área específica.*/
    function drop(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("text/plain");
        const draggedElement = document.getElementById(data);
        let targetColumn = event.target;
        event.target.appendChild(document.getElementById(data));

            while(targetColumn && !targetColumn.classList.contains('column')){ //enquanto o target não for uma coluna, será procurado o elemento pai dele(caso seja uma tarefa, será uma coluna)
                targetColumn = targetColumn.parentElement;
            }

            if(targetColumn){//caso o target seja uma coluna
                const newTask = createTaskElement(//a tarefa sendo arrastada será selecionada
                    draggedElement.querySelector('.task-name').innerText,
                    draggedElement.querySelector('.task-description').innerText
                );

                targetColumn.querySelector('.tasks').appendChild(newTask);//adicionada à sua nova coluna
                draggedElement.parentElement.removeChild(draggedElement);//e removida da coluna antiga
                saveTask();
            }
    }

/*  SEÇÃO: POP-UP DE EXCLUSÃO*/
    
/*Função para pop-up da janela de confirmação de exclusão de tarefa*/
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
                    resolve(true);//caso a pessoa clique em yes, a função resolve é chamada, retornando true
                    document.body.removeChild(element);
                });
                document.getElementById("falseButton").addEventListener("click", function () {
                    resolve(false);//caso a pessoa clique em no, a função retorna false, não excluindo a tarefa
                    document.body.removeChild(element);
                });
            })
    }
