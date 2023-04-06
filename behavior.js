let messageButton=document.querySelector("#click-button");
messageButton.addEventListener("click", showMessage);
function showMessage(event){
    let message= "Isto é tudo, e muito obrigado por terem participado no workshop."
    alert message;
}