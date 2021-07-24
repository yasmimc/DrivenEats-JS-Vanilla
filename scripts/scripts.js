let whatsappMsg;
let whatsappNumber = "553184146801";
function executeOrder() {
    const isEnabled = document.querySelector(".enabled");

    if (isEnabled) {
        //exibir tela de confirmação
        whatsappMsg = encodeURIComponent(whatsappMsg);
        window.location.href = "https://wa.me/"+ whatsappNumber+"?text="+whatsappMsg;
    }
}

function canOrder() {    
    let sections;

    const mainCourse = document.querySelector(".main-course");
    const drink = document.querySelector(".drink");
    const dessert = document.querySelector(".dessert");

    sections = [mainCourse, drink, dessert];

    let selectedOption = Array(3);
    let allSelected = true;
    
    let productName = Array(3);
    let productPrice = Array(3);
    let total = 0;

    for (i = 0; i < 3; i++) {        
        selectedOption[i] = sections[i].querySelector(".selectedOption");
        if (!selectedOption[i]) {
            allSelected = false;
        }
        else {
            productName[i] = selectedOption[i].querySelector(".product-name").innerHTML;
            productPrice[i] = selectedOption[i].querySelector(".product-price").innerHTML;

            // Converting "R$ XX,XX" string prices into XX.XX float values
            productPrice[i] = parseFloat(productPrice[i].substring(3).replace(',', '.'))

            total = total + productPrice[i];
        }
    }

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
        option.classList.add("selectedOption");
    }
    else {
        option.classList.add("selectedOption");
    }
    canOrder();
}

function changeOrderButtom() {
    let buttomText = document.querySelector(".order-buttom");
    buttomText.innerHTML = "Fechar Pedido";
    buttomText.classList.add("enabled");
}