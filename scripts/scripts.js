let whatsappMsg;
let whatsappNumber = "553184146801";
function executeOrder() {    
    let name = prompt("Agradecemos seu pedido! Qual o seu nome?");
    let address = prompt("Agora, seu endereço:") 

    if (name && address) {
        whatsappMsg = whatsappMsg + "\n" + "\n" +
        "Nome: " + name + "\n" +
        "Endereço: " + address;
    }
    confirmOrder();

    whatsappMsg = encodeURIComponent(whatsappMsg);
    window.location.href = "https://wa.me/"+ whatsappNumber+"?text="+whatsappMsg;    
}

function confirmOrder() {
    const body = document.querySelector("body");
    body.classList.add("lock");

    const isEnabled = document.querySelector(".enabled");

    if (isEnabled) {
        let confimationScreen = document.querySelector(".confirmation-screen");
        confimationScreen.innerHTML = 
        "<div class='confirmation-box'>" +
            "<h1>Confirme seu pedido</h1>" + 
            "<div class='item'>" +
            "    <p>" + productName[0] + "</p>" +
            "    <p>" + productPrice[0] + "</p>" +
            "</div>" +
            "<div class='item'>" +
            "    <p>" + productName[1] + "</p>" +
            "    <p>" + productPrice[1] + "</p> " +
            "</div>" +
            "<div class='item'>" +
            "    <p>" + productName[2] + "</p>" +
            "    <p>" + productPrice[2] + "</p>" +
            "</div>" +
            "<div class='total'>" +
            "    <p>TOTAL</p>" +
            "    <p>R$ " + total + "</p>" +
            "</div>" +
            "<div class='buttons-container'>" +
            "    <button class='order' onclick=executeOrder();>Tudo certo, pode pedir!</button>" +
            "    <button class='cancel' onclick=cancel();>Cancelar</button>" +
            "</div>" +
        "</div>"
        confimationScreen.classList.remove("disabled");    
    }    
}

function cancel () {
    let confimationScreen = document.querySelector(".confirmation-screen");
    confimationScreen.classList.add("disabled");
    const body = document.querySelector("body");
    body.classList.remove("lock");
}

let productName = Array(3);
let productPrice = Array(3);
let total;

function canOrder() {
    let sections;

    const mainCourse = document.querySelector(".main-course");
    const drink = document.querySelector(".drink");
    const dessert = document.querySelector(".dessert");

    sections = [mainCourse, drink, dessert];

    let selectedOption = Array(3);
    let allSelected = true;

    total = 0;

    for (i = 0; i < 3; i++) {
        selectedOption[i] = sections[i].querySelector(".selectedOption");
        if (!selectedOption[i]) {
            allSelected = false;
        }
        else {
            productName[i] = selectedOption[i].querySelector(".product-name").innerHTML;
            productPrice[i] = selectedOption[i].querySelector(".product-price").innerHTML;

            // Converting "R$ XX,XX" string prices into XX.XX float values with two digits after decimal point
            productPrice[i] = Number(productPrice[i].substring(3).replace(',', '.')).toFixed(2);

            total = (Number(total) + Number(productPrice[i])).toFixed(2);
        }
    }

    console.log(productPrice);

    if (allSelected) {
        changeOrderButtom();
        whatsappMsg = "Olá, gostaria de fazer o pedido:" + "\n" +
            "- Prato: " + productName[0] + "\n" +
            "- Bebida: " + productName[1] + "\n" +
            "- Sobremesa: " + productName[2] + "\n" +
            "Total: " + total;
    }
}

function selectOption(option, sectionName) {
    const section = document.querySelector("." + sectionName);
    const selectedOption = section.querySelector(".selectedOption");

    if (selectedOption) {
        selectedOption.classList.remove("selectedOption");
    }
    option.classList.add("selectedOption");
    canOrder();
}

function changeOrderButtom() {
    let buttomText = document.querySelector(".order-buttom");
    buttomText.innerHTML = "Fechar Pedido";
    buttomText.classList.add("enabled");
}