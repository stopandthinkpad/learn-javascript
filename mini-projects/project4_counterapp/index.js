const number = document.getElementById("number")
const increase = document.getElementById("increase")
const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")

increase.addEventListener("click", increaseCount)
decrease.addEventListener("click", decreaseCount)
reset.addEventListener("click", resetCount)

let count = 0

function increaseCount() {
  countUp = count += 1
  number.innerText = `${countUp}`
}

function decreaseCount() {
  countDown = count -= 1
  number.innerText = `${countDown}`
}

function resetCount() {
  countReset = count = 0
  number.innerText = `${countReset}`
}




























