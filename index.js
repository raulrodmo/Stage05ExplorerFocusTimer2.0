const buttonPlayTimer = document.querySelector('.play')
const buttonStopTimer = document.querySelector('.stop')
const buttonAddMinutes = document.querySelector('.addMinutes')
const buttonReduceMinutes = document.querySelector('.reduceMinutes')

const buttonForest = document.querySelector('.soundForest')
const buttonRain = document.querySelector('.soundRain')
const buttonCoffeeShop = document.querySelector('.soundCoffeeShop')
const buttonFireplace = document.querySelector('.soundFireplace')

const soundTypeForest = document.querySelector('.soundTypeForest')
const soundTypeRain = document.querySelector('.soundTypeRain')
const soundTypeCoffeeShop = document.querySelector('.soundTypeCoffeeShop')
const soundTypeFireplace = document.querySelector('.soundTypeFireplace')


const controlVolumeForest = document.querySelector('.controlVolumeForest')
const controlVolumeRain = document.querySelector('.controlVolumeRain')
const controlVolumeCoffeeShop = document.querySelector('.controlVolumeCoffeeShop')
const controlVolumeFireplace = document.querySelector('.controlVolumeFireplace')

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
let newSeconds
let isFinished

buttonForest.addEventListener('click', function () {
  soundTypeForest.style.backgroundColor = '#02799D';
  soundTypeRain.style.backgroundColor = '#E1E1E6';
  soundTypeCoffeeShop.style.backgroundColor = '#E1E1E6';
  soundTypeFireplace.style.backgroundColor = '#E1E1E6';

  soundForest.play()
  soundRain.pause()
  soundCooffeeShope.pause()
  soundFireplace.pause()

  soundForest.loop = true 
})

buttonRain.addEventListener('click', function () {
  soundTypeRain.style.backgroundColor = '#02799D';
  soundTypeForest.style.backgroundColor = '#E1E1E6';
  soundTypeCoffeeShop.style.backgroundColor = '#E1E1E6';
  soundTypeFireplace.style.backgroundColor = '#E1E1E6';

  soundRain.play()
  soundForest.pause()
  soundCooffeeShope.pause()
  soundFireplace.pause()

  soundRain.loop = true
})

buttonCoffeeShop.addEventListener('click', function () {
  soundTypeCoffeeShop.style.backgroundColor = '#02799D';
  soundTypeRain.style.backgroundColor = '#E1E1E6';
  soundTypeForest.style.backgroundColor = '#E1E1E6';
  soundTypeFireplace.style.backgroundColor = '#E1E1E6';

  soundCooffeeShope.play()
  soundForest.pause()
  soundRain.pause()
  soundFireplace.pause()

  soundCooffeeShope.loop = true
})

buttonFireplace.addEventListener('click', function () {
  soundTypeFireplace.style.backgroundColor = '#02799D';
  soundTypeRain.style.backgroundColor = '#E1E1E6';
  soundTypeForest.style.backgroundColor = '#E1E1E6';
  soundTypeCoffeeShop.style.backgroundColor = '#E1E1E6';

  soundFireplace.play()
  soundForest.pause()
  soundRain.pause()
  soundCooffeeShope.pause()

  soundFireplace.loop = true
})

controlVolumeForest.addEventListener("input", function() {
  const volume = this.value / 100;
  soundForest.volume = volume;
});

controlVolumeRain.addEventListener("input", function() {
  const volume = this.value / 100;
  soundRain.volume = volume;
});

controlVolumeCoffeeShop.addEventListener("input", function() {
  const volume = this.value / 100;
  soundCooffeeShope.volume = volume;
});

controlVolumeFireplace.addEventListener("input", function() {
  const volume = this.value / 100;
  soundFireplace.volume = volume;
});

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
  if(Number(minutesDisplay.textContent) > 5){
  newMinutes = Number(minutesDisplay.textContent) - 5
  minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
  } else{
  newMinutes = 0
  newSeconds = 0
  minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
  secondsDisplay.textContent = String(newSeconds).padStart(2, "0")
  }
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