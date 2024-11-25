class Tarefa {
    constructor(id, descricao, data, comentario, prioridade, notificacao) {
        this.id = id;
        this.descricao = descricao;
        this.data = data;
        this.comentario = comentario;
        this.prioridade = prioridade;
        this.notificacao = notificacao;
        this.dataCriacao = new Date();
    }
}

const formTarefa = document.getElementById('formTarefa');
const listaTarefas = document.getElementById('listaTarefas');
const descricao = document.getElementById('descricao');
const data = document.getElementById('data');
const comentario = document.getElementById('comentario');
const prioridade = document.getElementById('prioridade');
const notificacao = document.getElementById('notificacao');
const cancelar = document.getElementById('cancelar');
const naoHa = document.getElementById('naoHa');
const ordenacao = document.getElementById('ordenacao');
let modificando = false;
let idTarefaEditada = null;

setDataInicial();

const listaDeTarefas = [];

formTarefa.addEventListener('submit', function (event) {
    event.preventDefault();

    naoHa.innerHTML = '';

    if (modificando) {

        const tarefaEditada = listaDeTarefas.find(t => t.id === idTarefaEditada);
        if (tarefaEditada) {

            tarefaEditada.descricao = descricao.value;
            tarefaEditada.data = data.value;
            tarefaEditada.comentario = comentario.value;
            tarefaEditada.prioridade = prioridade.value;
            tarefaEditada.notificacao = notificacao.value;

            atualizarTarefaNaLista(tarefaEditada);
        }
        modificando = false;
        idTarefaEditada = null;
    } else {
        const idTarefa = gerarIdTarefa();
        const tarefa = new Tarefa(idTarefa, descricao.value, data.value, comentario.value, prioridade.value, notificacao.value);
        listaDeTarefas.push(tarefa);
        adicionarTarefaNaLista();
    }

    formTarefa.reset();
    setDataInicial();
});

cancelar.addEventListener('click', function() {
    if(modificando){
        modificando=false;
    }
    formTarefa.reset();
});

function atualizarTarefaNaLista(tarefaEditada) {
    const li = document.getElementById(tarefaEditada.id);
    if (li) {
        li.innerHTML = `<strong>${formataData(tarefaEditada.data)}</strong>: ${tarefaEditada.descricao} - ${tarefaEditada.prioridade}`;
        const botaoExpandir = document.createElement('button');

        const divBotao = document.createElement('div');
        divBotao.classList.add('botaoContainer'); // Adiciona uma classe para estilização

    botaoExpandir.textContent = 'Expandir';
    botaoExpandir.addEventListener('click', function(){
        if (li.innerHTML.includes(tarefaEditada.comentario) && li.innerHTML.includes(formataData(tarefaEditada.data))) {
            li.innerHTML = `<strong>${formataData(tarefaEditada.data)}</strong>: ${tarefaEditada.descricao} - ${tarefaEditada.prioridade}`;
            li.appendChild(botaoExpandir);
            li.appendChild(botaoApagar);
            li.appendChild(botaoEditar);
            botaoExpandir.textContent = 'Expandir';
        } else {
            li.innerHTML = `<strong>${formataData(tarefaEditada.data)}</strong>: ${tarefaEditada.descricao} - ${tarefaEditada.prioridade}<br>
                        Comentário: ${tarefaEditada.comentario}<br>
                        Data de Criação: ${formataData(tarefaEditada.dataCriacao)}<br>`;
                        li.appendChild(botaoExpandir);
                        li.appendChild(botaoApagar);
                        li.appendChild(botaoEditar);
                        botaoExpandir.textContent = 'Recolher';
        }
    });

    const botaoApagar = document.createElement('button');
    botaoApagar.textContent = 'Apagar';
    botaoApagar.addEventListener('click', function() {
        listaTarefas.removeChild(li);
        listaDeTarefas = listaDeTarefas.filter(t => t.id !== tarefaEditada.id);
    });

    const botaoEditar = document.createElement('button');
    botaoEditar.textContent = 'Editar';
    botaoEditar.addEventListener('click', function() {

        descricao.value = tarefaEditada.descricao;
        data.value = tarefaEditada.data;
        comentario.value = tarefaEditada.comentario;
        prioridade.value = tarefaEditada.prioridade;
        notificacao.value = tarefaEditada.notificacao;
        modificando = true;
        idTarefaEditada = tarefaEditada.id;
    });
     // Adiciona os botões à div
  divBotao.appendChild(botaoExpandir);
  divBotao.appendChild(botaoApagar);
  divBotao.appendChild(botaoEditar);

  // Adiciona a div ao li
  li.appendChild(divBotao);
    }
}

function adicionarTarefaNaLista() {
    const tarefa = listaDeTarefas.slice(-1)[0];
    const li = document.createElement('li');
    li.classList.add('tarefa');
    li.innerHTML = `<strong>${formataData(tarefa.data)}</strong>: ${tarefa.descricao} - ${tarefa.prioridade}`;
    li.setAttribute('id',`${tarefa.id}`);

    const divBotao = document.createElement('div');
  divBotao.classList.add('botaoContainer'); // Adiciona uma classe para estilização

    const botaoExpandir = document.createElement('button');
    botaoExpandir.textContent = 'Expandir';
    botaoExpandir.addEventListener('click', function(){

        if (li.innerHTML.includes(tarefa.comentario) && li.innerHTML.includes(formataData(tarefa.data))) {
            // Se estiverem, volta à exibição normal
            li.innerHTML = `<strong>${formataData(tarefa.data)}</strong>: ${tarefa.descricao} - ${tarefa.prioridade}`;
            li.appendChild(botaoExpandir);
            li.appendChild(botaoApagar);
            li.appendChild(botaoEditar);
            botaoExpandir.textContent = 'Expandir';
        } else {
            li.innerHTML = `<strong>${formataData(tarefa.data)}</strong>: ${tarefa.descricao} - ${tarefa.prioridade}<br>
                        Comentário: ${tarefa.comentario}<br>
                        Data de Criação: ${formataData(tarefa.dataCriacao)}<br>`;
                        li.appendChild(botaoExpandir);
                        li.appendChild(botaoApagar);
                        li.appendChild(botaoEditar);
                        botaoExpandir.textContent = 'Recolher';
        }
    });

    const botaoApagar = document.createElement('button');
    botaoApagar.textContent = 'Apagar';
    botaoApagar.addEventListener('click', function() {

        listaTarefas.removeChild(li);

        listaDeTarefas = listaDeTarefas.filter(t => t.id !== tarefa.id);
    });


    const botaoEditar = document.createElement('button');
    botaoEditar.textContent = 'Editar'; 
    botaoEditar.addEventListener('click', function() {

        descricao.value = tarefa.descricao;
        data.value = tarefa.data;
        comentario.value = tarefa.comentario;
        prioridade.value = tarefa.prioridade;
        notificacao.value = tarefa.notificacao;
        modificando = true;
        idTarefaEditada = tarefa.id;
    });


    // Adiciona os botões à div
  divBotao.appendChild(botaoExpandir);
  divBotao.appendChild(botaoApagar);
  divBotao.appendChild(botaoEditar);

  // Adiciona a div ao li
  li.appendChild(divBotao);

    listaTarefas.appendChild(li);
    console.log(JSON.stringify(tarefa));
}

function reordenarTarefaNaLista(tarefa){
    const li = document.createElement('li');
    li.classList.add('tarefa');
    li.innerHTML = `<strong>${formataData(tarefa.data)}</strong>: ${tarefa.descricao} - ${tarefa.prioridade}`;
    li.setAttribute('id',`${tarefa.id}`);

    const divBotao = document.createElement('div');
  divBotao.classList.add('botaoContainer'); // Adiciona uma classe para estilização

    const botaoExpandir = document.createElement('button');
    botaoExpandir.textContent = 'Expandir';
    botaoExpandir.addEventListener('click', function(){

        if (li.innerHTML.includes(tarefa.comentario) && li.innerHTML.includes(formataData(tarefa.data))) {
            // Se estiverem, volta à exibição normal
            li.innerHTML = `<strong>${formataData(tarefa.data)}</strong>: ${tarefa.descricao} - ${tarefa.prioridade}`;
            li.appendChild(botaoExpandir);
            li.appendChild(botaoApagar);
            li.appendChild(botaoEditar);
            botaoExpandir.textContent = 'Expandir';
        } else {
            li.innerHTML = `<strong>${formataData(tarefa.data)}</strong>: ${tarefa.descricao} - ${tarefa.prioridade}<br>
                        Comentário: ${tarefa.comentario}<br>
                        Data de Criação: ${formataData(tarefa.dataCriacao)}<br>`;
                        li.appendChild(botaoExpandir);
                        li.appendChild(botaoApagar);
                        li.appendChild(botaoEditar);
                        botaoExpandir.textContent = 'Recolher';
        }
    });

    const botaoApagar = document.createElement('button');
    botaoApagar.textContent = 'Apagar';
    botaoApagar.addEventListener('click', function() {

        listaTarefas.removeChild(li);

        listaDeTarefas = listaDeTarefas.filter(t => t.id !== tarefa.id);
    });


    const botaoEditar = document.createElement('button');
    botaoEditar.textContent = 'Editar'; 
    botaoEditar.addEventListener('click', function() {

        descricao.value = tarefa.descricao;
        data.value = tarefa.data;
        comentario.value = tarefa.comentario;
        prioridade.value = tarefa.prioridade;
        notificacao.value = tarefa.notificacao;
        modificando = true;
        idTarefaEditada = tarefa.id;
    });


     // Adiciona os botões à div
  divBotao.appendChild(botaoExpandir);
  divBotao.appendChild(botaoApagar);
  divBotao.appendChild(botaoEditar);

  // Adiciona a div ao li
  li.appendChild(divBotao);

    listaTarefas.appendChild(li);
    console.log(JSON.stringify(tarefa));
}

// Função para ordenar por Data de criação da tarefa
function ordenarPorDataCriacao() {
    listaDeTarefas.sort((a, b) => new Date(a.dataCriacao) - new Date(b.dataCriacao));
    atualizarListaTarefas();
}

// Função para ordenar por Data da tarefa
function ordenarPorDataTarefa() {
    listaDeTarefas.sort((a, b) => new Date(a.data) - new Date(b.data));
    atualizarListaTarefas();
}

// Função para ordenar por Prioridade
function ordenarPorPrioridade() {
    listaDeTarefas.sort((a, b) => {
         // Ordena primeiro por prioridade (ALTA, MÉDIA, BAIXA)
         const prioridadeA = a.prioridade.toUpperCase(); // Converte para maiúsculas para comparação
         const prioridadeB = b.prioridade.toUpperCase(); // Converte para maiúsculas para comparação
 
         if (prioridadeA === "ALTA") return -1;
         if (prioridadeA === "MÉDIA") return 1;
         if (prioridadeA === "BAIXA") return 2;
 
         if (prioridadeB === "ALTA") return 1;
         if (prioridadeB === "MÉDIA") return -1;
         if (prioridadeB === "BAIXA") return 0;
 
         // Se as prioridades forem iguais, mantém a ordem original
         return 0;
    });
    atualizarListaTarefas();
}

// Função para ordenar por ordem alfabética de descrição
function ordenarPorDescricao() {
    listaDeTarefas.sort((a, b) => a.descricao.localeCompare(b.descricao));
    atualizarListaTarefas();
}

// Função para atualizar a lista de tarefas no DOM
function atualizarListaTarefas() {
    listaTarefas.innerHTML = ''; // Limpa a lista atual
    listaDeTarefas.forEach(tarefa => reordenarTarefaNaLista(tarefa)); // Adiciona cada tarefa novamente
}

/*document.getElementById('ordenacao').addEventListener('change', function() {
    const ordenacaoSelecionada = this.value;
    switch (ordenacaoSelecionada) {
        case 'dataCriacao':
            listaTarefas.innerHTML = ''; // Limpa a lista atual
            break;
        case 'dataTarefa':
            listaTarefas.innerHTML = ''; // Limpa a lista atual
            break;
        case 'prioridade':
            listaTarefas.innerHTML = ''; // Limpa a lista atual
            break;
        case 'descricao':
            ordenarPorDescricao();
            break;
        default:
            // Nenhuma ação específica para a opção padrão
            break;
    }
});*/

function gerarIdTarefa() {

    return Math.floor(Math.random() * 9999) + 1;
}

function setDataInicial() {
    const dataInicial = new Date();
    const dataFormatada = dataInicial.toISOString().split('T')[0];
    data.value = dataFormatada;
}

function formataData(data){
    const dataEscolhida = new Date(data);
    const dia = dataEscolhida.getDate().toString().padStart(2, '0');
    const mes = (dataEscolhida.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataEscolhida.getFullYear();
    return `${dia}/${mes}/${ano}`;
}
