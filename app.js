const nome = document.getElementById("nomeInput");


// ---------------------------
// EXERCÍCIO 1
// ---------------------------


function guardarNome() {
    const nome = document.getElementById("nomeInput").value;
    localStorage.setItem("nomeUtilizador", nome);
    mostrarNome();
}


function mostrarNome() {
    const nome = localStorage.getItem("nomeUtilizador");
    if (nome) {
        document.getElementById("mostrarNome").textContent = "Olá, " + nome;
    }
}

window.addEventListener('load', mostrarNome);


// ---------------------------
// EXERCÍCIO 2
// ---------------------------


let contador = Number(localStorage.getItem("contador")) || 0;
const contadorElem = document.getElementById("contadorValor");
if (contadorElem) contadorElem.textContent = contador;


function incrementar() {
    contador ++;
    localStorage.setItem("contador", contador);
    if (contadorElem) contadorElem.textContent = contador;
}


// ---------------------------
// EXERCÍCIO 3
// ---------------------------


function guardarObjeto(){
  const name = document.getElementById("userName").value;
  const email = document.getElementById("userEmail").value;

  const utilizador = {
      nome: name,
      email: email
  };

  localStorage.setItem("utilizador", JSON.stringify(utilizador));
}


function mostrarUtilizador() {
    const dados = localStorage.getItem("utilizador");

    if (dados) {
        const obj = JSON.parse(dados);
        const el = document.getElementById("dadosUser");
        if (el) el.textContent = "Nome:" + obj.nome + " | Email: " + obj.email;
    }
}

window.addEventListener('load', mostrarUtilizador);


// ---------------------------
// EXERCÍCIO 4
// ---------------------------


function alterarTema() {
    const temaAtual = localStorage.getItem("tema");

    if (temaAtual === "dark") {
        localStorage.setItem("tema", "light");
        document.body.classList.remove("dark");
    } else {
        localStorage.setItem("tema", "dark");
        document.body.classList.add("dark");
    }
}

window.addEventListener('load', function aplicarTema() {
    const tema = localStorage.getItem("tema");
    if (tema === "dark") document.body.classList.add("dark");
});


// ---------------------------
// EXERCÍCIO 5 (Lista tarefas)
// ---------------------------


let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function mostrarTarefas() {
    const ul = document.getElementById("listaTarefas");
    if (!ul) return;
    ul.innerHTML ="";

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");
        li.textContent = tarefa;

        const btn = document.createElement("button");
        btn.textContent = "Remover";
        btn.onclick = () => removeTarefas(index);

        li.appendChild(btn);
        ul.appendChild(li);
    });
}

function adicionarTarefas() {
    const texto = document.getElementById("tarefasInput").value;
    if(!texto) return;
    tarefas.push(texto);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    document.getElementById("tarefasInput").value="";
    mostrarTarefas();
}

function removeTarefas(index) {
   tarefas.splice(index, 1);
   localStorage.setItem("tarefas", JSON.stringify(tarefas));
   mostrarTarefas();
}

window.addEventListener('load', mostrarTarefas);
