let checkBox = document.querySelector(".checkbox");


///Titles///
let basicTitle = document.querySelector("#priceBasic");
let professionalTitle = document.querySelector("#priceProfessional");
let masterTitle = document.querySelector("#priceMaster");


checkBox.addEventListener("click", event =>{

    if(basicTitle.textContent == "199,99" && professionalTitle.textContent == "249,99" && masterTitle.textContent == "399,99") {
        basicTitle.textContent = "19,99";
        professionalTitle.textContent = "24,99";
        masterTitle.textContent = "39,99";
    } else {
        basicTitle.textContent = "199,99";
        professionalTitle.textContent = "249,99";
        masterTitle.textContent = "399,99";
    }

})