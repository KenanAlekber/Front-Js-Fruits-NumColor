let input = document.getElementById("number");
let btn = document.getElementById("btn");
let oddNum = document.getElementById("odd-numbers");
let evenNum = document.getElementById("even-numbers");

function numbers(e) {

    if (e < 1 || e > 100) {
        alert("The number you enter must be between 0 and 100");
    }
    else {
        for (let i = 1; i < e; i++) {
            if (i % 2 === 0) {
                evenNum.innerHTML += `${i}, `;
            }
            else {
                oddNum.innerHTML += `${i}, `;
            }
        }
    }
}

btn.addEventListener("click", () => {
    let value = input.value;
    numbers(value);
});
