// Selecting Elements from the DOM
const inputNumber = document.querySelector("#number__input");
const outputBank = document.querySelector(".output");
const sortOneBtn = document.querySelector("#sortOne");
const sortAllBtn = document.querySelector("#sortAll");
const oddsNumbers = document.querySelector("#odds output");
const evenNumbers = document.querySelector("#evens output");

// Retrieve the numbers from local storage
const storedNumbers = JSON.parse(sessionStorage.getItem("numberBank")) || [];
const numberBank = [...storedNumbers]; // Passing all the numbers from the local storage.
const oddNumArray = []; // Initial array for odd Numbers
const evenNumArray = []; // Initial array for even Numbers

console.log(storedNumbers);
// When the user clicks the "Add Number" button, the number they entered into the input field is added to the number bank.
function addToNumberBank() {
    const number = parseInt(inputNumber.value);
    numberBank.push(number);
    inputNumber.value = "";
    updateNumberList();
    updateLocalStorage();
}

// The number bank displays all the numbers the user has entered.
function updateNumberList() {
    outputBank.textContent = [...numberBank];
}
// Initial load
updateNumberList();

//When the "Sort All" button is clicked, all the numbers in the number bank are moved into either the odd or even category.
function sortAllNumbers() {
    numberBank.forEach((number) => {
        if (number % 2 === 0) {
            evenNumArray.push(number);
        } else {
            oddNumArray.push(number);
        }
    });

    oddsNumbers.textContent = [...oddNumArray];
    evenNumbers.textContent = [...evenNumArray];

    // Clearing the numbers, once sorted
    outputBank.textContent = "";
}
// When the "Sort 1" button is clicked, the first number in the number bank is removed and placed into either the odd or even category.
function sortOneNum() {
    if (numberBank.length > 0) {
        const firstNumber = numberBank.shift(); // Remove the first number
        if (firstNumber % 2 === 0) {
            evenNumArray.push(firstNumber);
        } else {
            oddNumArray.push(firstNumber);
        }
        updateNumberList();

        oddsNumbers.textContent = [...oddNumArray];
        evenNumbers.textContent = [...evenNumArray];
    }
}

// Save the numbers to local storage
function updateLocalStorage() {
    sessionStorage.setItem("numberBank", JSON.stringify(numberBank));
}

// Event Listeners
sortOneBtn.addEventListener("click", sortOneNum);
sortAllBtn.addEventListener("click", sortAllNumbers);
