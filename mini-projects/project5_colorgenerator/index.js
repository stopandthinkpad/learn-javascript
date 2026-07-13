const colorBody = document.body
const colorButton = document.getElementById("button") 
const colorValue = document.getElementById("value")

colorButton = addEventListener("click", colorGen)

function rgbGen() {
 let r = Math.floor(Math.random() * 255)
 let g = Math.floor(Math.random() * 255)
 let b = Math.floor(Math.random() * 255)
  return `rgb(${r}, ${g}, ${b})`
}

function colorGen() {
 let bodyColor = rgbGen()
 let buttonColor = rgbGen()
  while (buttonColor === bodyColor){
    buttonColor = rgbGen()
  }
    colorBody.style.backgroundColor = bodyColor
    colorButton.style.backgroundColor = buttonColor
    colorValue.textContent = bodyColor
}


