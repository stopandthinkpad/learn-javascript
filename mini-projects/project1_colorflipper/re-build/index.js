const body = document.body
const random = document.getElementById("random")
const rgbStorage = document.getElementById("rgbValue")

function setColor(name){
    body.style.backgroundColor = name
    /* HARD CODED RGB VALUES first attempt until research
    if (name === "red") {
        const rgbRED = "rgb(255, 0, 0)"
        rgbStorage.innerText = rgbRED
    } else 
    if (name === "green") {
        const rgbGREEN = "rgb(0, 255, 0)"
        rgbStorage.innerText = rgbGREEN
    } else {
        const rgbBLUE = "rgb(0, 0, 255)"
        rgbStorage.innerText = rgbBLUE
    }*/
   const computedColor = getComputedStyle(body).backgroundColor  /**learned about getComputedStyle().ruleSet  very interesting... This is built into JS I guess*/
   rgbStorage.innerText = computedColor
}

function getRandomColor(){
    const r = Math.round(Math.random() * 255)
    const g = Math.round(Math.random() * 255)
    const b = Math.round(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}

function randomColor(){
    const bgColor = body.style.backgroundColor = getRandomColor()
    let buttonColor = random.style.backgroundColor = getRandomColor()

    while (buttonColor === bgColor){
        buttonColor = random.style.backgroundColor = getRandomColor()
    }
    random.style.backgroundColor = buttonColor

    rgbValuePrint(bgColor)
}


function rgbValuePrint(rgbValues){
    rgbStorage.innerText = rgbValues
}