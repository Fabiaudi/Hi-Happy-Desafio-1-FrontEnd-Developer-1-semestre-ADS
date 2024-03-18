
let email = document.querySelector('#email');
let senha = document.querySelector('#senha');
let btnEntrar = document.getElementById('btn-login');

btnEntrar.addEventListener("click", () => {
  
    let emailInput = email.value.toLowerCase();
    let senhaInput = senha.value;

    authentication(emailInput, senhaInput);

});

function authentication(email, senha) {

    const URL = 'http://localhost:3400/login';
    fetch(URL, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ email, senha })
    })
        .then(response => response = response.json())
        .then(response => {
            console.log(response)
            if (!!response.mensagem) {
                alert(response.mensagem);
                return;
            }
            window.open('controle-produto.html', '_self');
        })
        .catch(erro => { console.log(erro) });
}


