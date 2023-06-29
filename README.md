# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./images/Screenshot%202023-06-29%20110800.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

I learned how to replace elements in arrays so that everytime a new input is made it changes the value of the element at that index.

To see how you can add code snippets, see below:

```html
      <div class="tip-wrapper">
        <h1>Select Tip %</h1>
        <div class="tip">
          <button class="tip-button" value=".05">5%</button>
          <button class="tip-button" value=".10">10%</button>
          <button class="tip-button" value=".15">15%</button>
          <button class="tip-button" value=".25">25%</button>
          <button class="tip-button" value=".50">50%</button>
          <input class="input custom" type="number" name="tips" placeholder="Custom">
        </div>
      </div>
```
```css
     .reset {
        width: calc(100% - 40px);
        font-size: .9em;
        background-color: hsl(172, 67%, 45%);
        color: hsl(183, 100%, 15%);
        border: none;
        border-radius: 5px;
        padding: 10px 0;
        cursor: pointer;
     }

     .reset-inactive {
        width: calc(100% - 40px);
        font-size: .9em;
        background-color: hsl(186, 14%, 43%);
        color: hsl(183, 100%, 15%);
        border: none;
        border-radius: 5px;
        padding: 10px 0;
        cursor: pointer;
     }
```
```js
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
```

### Continued development

I plan on making some smooth transitions for when different elements are activated

## Author

- Frontend Mentor - [@tahobbit11](https://www.frontendmentor.io/profile/tahobbit11)
