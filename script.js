 const titulo = document.getElementById("titulo-pagina");
console.log(titulo);

const p = document.getElementsByClassName("subtitulo");
console.log(p);

const subtitulo = document.querySelector("#modulo-1");
console.log(subtitulo);

 const li = document.getElementsByClassName(".tarefa");
console.log(li);

const lista = document.getElementsByTagName("li");
console.log(lista);

const primeiro = document.querySelector("#modulo-1 li:first-child");
console.log(primeiro);

const tarefa2 = document.querySelector("#modulo-2 .importante");
console.log(tarefa2);

const elemento = document.querySelector(".importante");

 console.log(elemento.innerText);
console.log(elemento.textContent);
console.log(elemento.innerHTML);
 
const modulo1 = document.getElementById("modulo-1");
const tarefas1 = modulo1.querySelectorAll("li");

console.log("Total de tarefas no Módulo 1:", tarefas1.length);

tarefas1.forEach((tarefa) => {
  console.log(tarefa.innerText);
});

const tarefas2 = document.querySelectorAll("#modulo-2 li");

console.log("Total de tarefas no Módulo 2:", tarefas2.length);

tarefas2.forEach((tarefa) => {
  console.log(tarefa.innerText);
});
 
 
let pendente = 0;
let visto = 0;
let bloqueado = 0;

 

console.log(" Status das tarefas:");
console.log("Pendente:", pendente);
console.log("Visto:", visto);
console.log("Bloqueado:", bloqueado);

const tarefas = document.querySelectorAll(".tarefa");

tarefas.forEach(tarefa => {
  const nome = tarefa.firstChild.textContent.trim();
  const status = tarefa.querySelector(".tag").innerText;
  console.log(`Tarefa: ${nome} - Status: ${status}`);
});
 