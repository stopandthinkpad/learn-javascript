const number = document.getElementById("number")
const increase = document.getElementById("increase")
const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")


counterApp()


function counterApp() {
  increase.addEventListener("click", increaseCount)
  decrease.addEventListener("click", decreaseCount)
  reset.addEventListener("click", resetCount)

let count = 0

     function increaseCount() {
      count += 1
      updateDisplay()
    }
    function decreaseCount() {
      // Allow negative values to show different UI states (red for negative)
      count -= 1 
      /*
        clamp counter at 0 (no negative values)
       
      if (count > 0) { 
         count -= 1
     } else {
             count = 0    
          }
      updateDisplay()
      */
    }
    function resetCount() {
      count = 0
      updateDisplay()
    }
    function countColor() {
      if (count > 0) {
        number.style.color = "rgb(0, 184, 0)"
      } else if (count < 0) {
        number.style.color = "rgb(255, 0, 0)"
      }
        else {
        number.style.color = "rgb(0, 0, 0)"
      }
    }
    function updateDisplay() {
      
      number.innerText = count
      countColor()
    } 
}














