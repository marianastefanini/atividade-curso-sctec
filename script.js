function validarForm () {

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const mensagem = document.getElementById("mensagem").value;

if (name === "" || email === "" || mensagem === "") {
        alert("Todos os campos devem ser preenchidos!");
        return false;
}

return true;

}

document.getElementById("contactform").addEventListener("submit", function (event) {
    if (!validarForm()) {
        event.preventDefault ();
        return;
    }
        alert("Formulário Enviado");

})