const form =document.getElementById("formulario");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    alert('teste ok'); //apenas para testar (não esta funcionando )
    let nome= document.getElementById('nome').value;
    let email= document.getElementById('email').value;
    console.log(nome, email)
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem('lead',convertData);
    let content= document.getElementById('content');
    let carregando = carregando;
    let pronto = pronto ;
    content.innerHTML = carregando;
    setTimeout(()=> {
        content.innerHTML = pronto;
    },500)
})