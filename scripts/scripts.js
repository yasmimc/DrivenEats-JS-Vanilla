function changeOrderButtom() {
    let buttomText = document.querySelector(".order-buttom");
    buttomText.innerHTML = "Fechar Pedido";
    buttomText.classList.add("abled");
}

function selectOption(option, sectionName) {

    const section = document.querySelector("." + sectionName);
    
    const selectedOption = section.querySelector(".selectedOption");
    
    if (selectedOption) {
        selectedOption.classList.remove("selectedOption");
        option.classList.add("selectedOption");
    }
    else{
        option.classList.add("selectedOption");
    }    


}












// function canOrder(meal, drink, dessert) {

//     if (meal && drink && dessert) {
//         alert("Pode pedir");
//         changeOrderButtom();
//     }
//     else {
//         alert("Selecione todos os itens");
//     }
// }




// function executeOrder() {
//     alert("vou te redirecionar pro chat do zap");
// }

// function addNameAndAdress(msg) {
//     const name = prompt("Olá! Qual o seu nome?");
//     const adress = prompt("Agora precisamos do seu endereço:");

//     const msg = msg + "Nome: " + name + "Endereço: " + adress;

//     return msg


