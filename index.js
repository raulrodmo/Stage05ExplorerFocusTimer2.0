const buttonPlayTimer = document.querySelector('.play')
const buttonStopTimer = document.querySelector('.stop')
const buttonAddMinutes = document.querySelector('.addMinutes')
const buttonReduceMinutes = document.querySelector('.reduceMinutes')

const buttonForest = document.querySelector('.soundForest')
const buttonRain = document.querySelector('.soundRain')
const buttonCoffeeShop = document.querySelector('.soundCoffeeShop')
const buttonFireplace = document.querySelector('.soundFireplace')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const soundKitchenTimer = new Audio("https://github.com/raulrodmo/Stage05ExplorerFocusTimer2.0/blob/main/.sounds/kichenTimer.mp3?raw=true")
const soundButtonPressAudio = new Audio("https://github.com/raulrodmo/Stage05ExplorerFocusTimer2.0/blob/main/.sounds/buttonPress.wav?raw=true")
const soundForest = new Audio("https://github.com/raulrodmo/Stage05ExplorerFocusTimer2.0/blob/main/.sounds/forest.wav?raw=true")
const soundRain = new Audio("https://github.com/raulrodmo/Stage05ExplorerFocusTimer2.0/blob/main/.sounds/rain.wav?raw=true")
const soundCooffeeShope = new Audio("https://github.com/raulrodmo/Stage05ExplorerFocusTimer2.0/blob/main/.sounds/coffeeShop.wav?raw=true")
const soundFireplace = new Audio("https://github.com/raulrodmo/Stage05ExplorerFocusTimer2.0/blob/main/.sounds/fireplace.wav?raw=true")

let minutes = Number(minutesDisplay.textContent)
let timerTimeout
let newMinutes
let isFinished

buttonForest.addEventListener('click', function () {
  soundButtonPressAudio.play()

  soundForest.play()
  soundRain.pause()
  soundCooffeeShope.pause()
  soundFireplace.pause()

  soundForest.loop = true 
})

buttonRain.addEventListener('click', function () {
  soundButtonPressAudio.play()

  soundRain.play()
  soundForest.pause()
  soundCooffeeShope.pause()
  soundFireplace.pause()

  soundRain.loop = true
})

buttonCoffeeShop.addEventListener('click', function () {
  soundButtonPressAudio.play()

  soundCooffeeShope.play()
  soundForest.pause()
  soundRain.pause()
  soundFireplace.pause()

  soundCooffeeShope.loop = true
})

buttonFireplace.addEventListener('click', function () {
  soundButtonPressAudio.play()

  soundFireplace.play()
  soundForest.pause()
  soundRain.pause()
  soundCooffeeShope.pause()

  soundFireplace.loop = true
})

buttonPlayTimer.addEventListener('click', function () {
  countdown()
  buttonPlayTimer.classList.add('hide')
  soundButtonPressAudio.play()
  return
})

buttonStopTimer.addEventListener('click', function () {
  reset()
  buttonPlayTimer.classList.remove('hide')
  soundButtonPressAudio.play()
  
  soundFireplace.pause()
  soundForest.pause()
  soundRain.pause()
  soundCooffeeShope.pause()
  return
})

buttonAddMinutes.addEventListener('click', function () {
  addMinutes()
  soundButtonPressAudio.play()
})

buttonReduceMinutes.addEventListener('click', function addMinutes() {
  reduceMinutes()
  soundButtonPressAudio.play()
})

function addMinutes (){
  newMinutes = Number(minutesDisplay.textContent) + 5
  minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
}

function reduceMinutes (){
  newMinutes = Number(minutesDisplay.textContent) - 5
  minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
}
 
function timerDisplay(newMinutes, seconds){
  newMinutes = newMinutes === undefined ? minutes: newMinutes
  seconds = seconds === undefined ? 0: seconds

  minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function reset(){
  timerDisplay(minutes, 0)
  clearTimeout(timerTimeout)
}

function countdown(){
  timerTimeout = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let isFinished = minutes <=0 && seconds <=0

    if(isFinished) {
      timerDisplay(minutes, 0)
      soundKitchenTimer.play()
      return
    }

    if(seconds <=0) {
      seconds = 60
      --minutes
    }

    timerDisplay(minutes, String( seconds - 1))

    countdown()
  },1000)
}












