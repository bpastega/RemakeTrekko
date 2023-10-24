# RemakeTrekko

Este projeto é uma replicação simplificada da plataforma de gerenciamento de tarefas online Trello. Ele foi desenvolvido com o objetivo de estudar e aprimorar as habilidades de desenvolvimento web.

<h1>Funcionalidades</h1>
<ol>
  <li>Criar Tarefa
    <ul>
      <li>Cria um elemento HTML representando uma tarefa com o nome e descrição especificados através da função "createTaskElement".</li>
    </ul>
  </li>
   <li>Adicionar Tarefa
    <ul>
      <li>Adiciona uma nova tarefa a uma coluna especificada. Os parâmetros incluem o columnId para identificar a coluna na qual a tarefa será adicionada. Implementação feita através     da funçao "addTask".</li>
    </ul>
  </li>
  <li>Salvar Tarefa
    <ul>
      <li>Salva o estado atual das tarefas no armazenamento local no navegador, através da função "saveTask".</li>
    </ul>
  </li>
   <li>Carregar Tarefa
    <ul>
      <li>Carrega as tarefas salvas previamente, restaurando o estado anterior do quadro, por meio da funçao "loadTask".</li>
    </ul>
  </li>
   <li>Alterar Cor de Fundo
    <ul>
      <li>Permite a mudança de cor de fundo do corpo da página através da funçao "ChangeBG".</li>
    </ul>
  </li>
  <li>Salvar Cor de Fundo
    <ul>
      <li>Salva o estado atual do fundo do corpo da página através da funçao "saveColor".</li>
    </ul>
  </li>
   <li>Carregar Cor de Fundo
    <ul>
      <li>Carrega a cor de fundo previamente escolhida através da funçao "loadColor".</li>
    </ul>
  </li>
  <li>Remover Tarefa
    <ul>
      <li>Remove uma tarefa específica do quadro, funcionalidade implementada na função "createTaskElement".</li>
    </ul>
  </li>
  <li>Pop-up de Exclusão
    <ul>
      <li>Cria uma janela de confirmaçao de exclusão de tarefa, através da funçao "myConfirmBox".</li>
    </ul>
  </li>
  <li>Arrastar e Soltar
    <ul>
      <li>Permite que elementos sejam soltos em áreas específicas, através da funçao "allowDrop", que permite que as colunas sejam 'dropáveis', "drag" para iniciar a operação de arrastar e soltar para um elemento e por fim, "drop" para manipular a soltura de um elemento arrastado em uma área específica.</li>
    </ul>
  </li>
  
</ol>
