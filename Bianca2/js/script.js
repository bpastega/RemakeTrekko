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
