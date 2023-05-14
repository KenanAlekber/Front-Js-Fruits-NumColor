let input = document.getElementById("input");
let btnAdd = document.getElementById("btn-add");
let btnShow = document.getElementById("btn-show");
let btnHideShow = document.getElementById("btn-show-hide");
let countShow = document.getElementById("countShow");
let fruits = document.getElementById("fruits");
let list = document.getElementById("list");


let arr = [];

btnAdd.addEventListener("click", () => {
    let fruitName = input.value;

    if (fruitName.trim() === "") {
        alert("The data you sent is empty")
    }
    else {
        arr.push(fruitName);
        console.log(arr);
        list.innerHTML += `
        <li>${fruitName}</li>
        `
    }
});

btnShow.addEventListener("click", () => {
    let count = arr.length;
    countShow.innerHTML = `
    Count: ${count}
`
});

btnHideShow.addEventListener("click", () => {
    list.classList.toggle("dis-none");
});