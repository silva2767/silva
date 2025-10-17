 //area para exibir a lista
 const area= document.getElementById('area'); 
 const lista= document.createElement("ul");
 const input=document.querySelector("#fomulario input");
 const criar=document.querySelector("formulario button");
 let Atividade=[]

 lista.id="lista-atividades"
 area.appendChild(lista);

 function novaAtividade(Atividade){
 const modelo=document.createElement('li');
 modelo.classList.add('Atividade')
modelo.innerHTML=`<div class='card-Atividade'><input type='checkbox'> <p> ${Atividade}<p></div>`
lista.appendChild(modelo) 


Atividade.push({
completo : false,
nome:Atividade,
});

atualizarContadores();
 }

modelocompl.classList.add('atividade');
modelo.innerHTML="<div class='card-Atividade completa'><input type='checkbox'> <p> Nova Atividade<p></div>"
lista.appendChild(modelocompl)

criar.addEventListener('click', function(){
const texto=input.value.trim();
if(texto !==""){
// == significa diferente // 
}
})
function atualizarContadores(){
const criadas=document.getElementById("criadas")
const concluidas=document.getElementById("concluidas")
}
