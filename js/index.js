// text input
const textInput = document.querySelectorAll(".input");
// text
const tipPerPerson = document.querySelector("#result-tip");
const totalPerPerson = document.querySelector("#total-tip");
// buttons
const tipButtons = document.querySelectorAll(".tip-button");
const reset = document.querySelector(".reset-inactive");

let valueArray = [0, 0, 0];

textInput.forEach((input, index) => {
    input.addEventListener("input", () => {
        if(index === 0){
            let bill = input.value;
            console.log(input);
            bill = Number(bill);
            valueArray.splice(1, 1, bill);
            if(valueArray[1] !== bill) {
                valueArray.slice(1);
            }

            const error1 = document.querySelector("#error-message-1");
            if(valueArray[1] <= 0){
                input.style.outlineColor = "orangered";
                error1.style.display = "inline"
            } else {
                input.style.outlineColor = "hsl(172, 67%, 45%)";
                error1.style.display = "none"
            }

            if(input.value !== '') {
                reset.classList.remove("reset-inactive");
                reset.classList.add("reset");
            }
            console.log(valueArray)
            calculate(valueArray);
        } 

        else if(index === 1) {
            let custom = input.value * 0.01;
            console.log(input);
            valueArray.splice(0, 1, custom);
            if(valueArray[0] !== custom) {
                valueArray.slice(0);
            }

            if(input.value <= 0){
                input.style.outlineColor = "orangered";
            } else {
                input.style.outlineColor = "hsl(172, 67%, 45%)";
            }

            if(input.value !== '') {
                reset.classList.remove("reset-inactive");
                reset.classList.add("reset");
            }
            calculate(valueArray);
        } 

        else {
            let numOfPeople = input.value;
            numOfPeople = Number(numOfPeople);
            valueArray.splice(2,1, numOfPeople);
            if(valueArray[2] !== numOfPeople) {
                valueArray.slice(2);
            }

            const error2 = document.querySelector("#error-message-2");
            if(valueArray[2] <= 0){
                input.style.outlineColor = "orangered";
                error2.style.display = "inline"
            } else {
                input.style.outlineColor = "hsl(172, 67%, 45%)";
                error2.style.display = "none"
            }

            if(input.value !== '') {
                reset.classList.remove("reset-inactive");
                reset.classList.add("reset");
            }
            calculate(valueArray);
        }
    })
    
    reset.addEventListener("click", () => {
        valueArray = [0, 0, 0, 0];
        input.value = "";
        input.style.outlineColor = "hsl(172, 67%, 45%)";
        reset.classList.remove("reset");
        reset.classList.add("reset-inactive");
        tipPerPerson.innerHTML = "0.00";
        totalPerPerson.innerHTML = "0.00";
    });
})

const calculate = (values) => {
    let tip = values[0];
    let bill = values[1];
    let numOfPeople = values[2];   
    let tipAmount;
    let total;

    tipAmount = (bill * tip) / numOfPeople;
    tipAmount = parseFloat(tipAmount).toFixed(2);
    total = (bill / numOfPeople) + Number(tipAmount);
    total = parseFloat(total).toFixed(2);

    tipPerPerson.innerHTML = tipAmount;
    totalPerPerson.innerHTML = total;

}

tipButtons.forEach((buttons) => {
    buttons.addEventListener("click", () => {
        let button = buttons.value
        button = Number(button);
        valueArray.splice(0, 1, button);
        if(valueArray[0] !== button) {
            valueArray.slice(0);
        }
        calculate(valueArray);
    })
})
