/*Função para abrir o menu de cores*/
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

/*Função para criação de tarefa*/
function CreateTask(column){

}

/*Função para deslocar tarefa*/
function MoveTask(){
    
}