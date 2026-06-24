const countEl = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

let count = 0;

increaseBtn.addEventListener("click", () => {
    count++;
    countEl.innerText = count;
});

decreaseBtn.addEventListener("click", () => {

    if(count >0){
    count--;
    countEl.innerText = count;
    }
});

resetBtn.addEventListener("click", () => {
    count = 0;
    countEl.innerText = "ZERO ";
});