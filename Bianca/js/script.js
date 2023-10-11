/*Função para abrir o menu de cores*/
/*Quando se clica no elemento 'OpenColors', é chamada a função denominada 'openMenu' que coloca o*/
document.getElementById("OpenColors").onclick = 

function openMenu() { 
    document.getElementById("colorMenu").style.display = "initial"; 
} 

/*Função para fechar o menu de cores*/ 
/*Quando se clica no elemento do ícone x, o elemento de ID 'colorMenu' tem seu display modificado para none.*/
document.getElementById("x-symbol").onclick = 

function closeMenu() { 
    document.getElementById("colorMenu").style.display = "none"; 
} 

/*Função para mudar a cor do fundo*/
function changeBG(cor){
    document.body.style.backgroundColor = cor;
}

/*Função para criação de tarefa*/
function addTask(){
    document.getElementById("");
    const columns = colum;

}

/*Função para deslocar tarefa*/
function moveTask(){

}

/*Função para salvar tarefa criada*/ 
function SaveTask(){


}








/*
Funções de Requisito para entrega

· ChangeBackgroundColor() 

    Altera cor do background

·AddTask() 

    É chamado através do botão adicionar, criando o task element e persistindo no localStorage

· CreateTaskElement(name, description) 

    Cria o elemento html para injetar na coluna dinâmicamente

· saveTask() 

Salvar task no localStorage