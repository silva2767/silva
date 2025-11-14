const url = "https://jsonplaceholder.typicode.com/todos/1";//endpoint
const output = document.getElementById("output");
const status = docuument.getElementById("status");
function setLoading(on) {
status.innerHTML = on 
? 'Carregando <span class="spinner" aria-hidden ="true"></span>'
:""; 
}
//--- exemplo com fetch (promisses / async ) ---
document.getElementById("btn-frtch").addEventListener("click", async () =>{

    output.textContent = "";
setLoading(true);
try{ 
    //fetch retorna uma promisse que resolve para respose
const res = await fetch(url, {method: "GET"});
if (!res.ok) throw new Error ("status HTTP :" + res.status);
const data = await res.json();//parse JSON automaticamente
output.textContent = JSON.stringify(data, null,2);
}catch (err){
output.textContent = "Erro:" + err.message;
output.classList.add("error");
} finally{setLoading(false);}
})