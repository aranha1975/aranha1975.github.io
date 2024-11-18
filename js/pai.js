document.addEventListener('DOMContentLoaded', function() {
    receberMensagens();
});


function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica se os campos de login foram preenchidos
    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        var objLoginSenha = {
            email: username,
            senha: password
        };
        
        var resposta = validarUsuario(objLoginSenha);
    
        console.log(resposta)
    
        if (resposta == true) {
            window.location.href = '00.Queixas2.html';
        } 
        else {
            alert('E-mail e/ou Senha inválidos');
        }
        

        
        
    }
}
