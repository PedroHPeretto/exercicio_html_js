/* 
5) Suba no Github no repositório do curso em uma branch chamada exercicio_html_js.

6) Copie o link do repositório na plataforma da EBAC que a equipe de tutoria dará o feedback.
*/

const form = document.getElementById('form')
const campoA = document.getElementById('input1')
const campoB = document.getElementById('input2')
const mensagemSucesso = document.getElementById('successMessage')
const mensagemErro = document.getElementById('errorMessage')

function validadeCampos() {
    const valorA = campoA.valueAsNumber 
    const valorB = campoB.valueAsNumber

    if (valorA < valorB) {
        return true
    } else {
        return false
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

if (validadeCampos()) {
    mensagemSucesso.style.display = 'flex'
    mensagemErro.style.display = 'none'
} else {
    mensagemErro.style.display = 'flex'
    mensagemSucesso.style.display = 'none'
}
})






