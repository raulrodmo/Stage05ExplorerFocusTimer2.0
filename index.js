const elementBody = document.querySelector('body')
const buttonLightMode = document.querySelector('.lightMode')
const buttonDarkMode = document.querySelector('.darkMode')

const buttonPlayTimer = document.querySelector('.play')
const buttonStopTimer = document.querySelector('.stop')
const buttonAddMinutes = document.querySelector('.addMinutes')
const buttonReduceMinutes = document.querySelector('.reduceMinutes')

const buttonForest = document.querySelector('.soundForest')
const buttonRain = document.querySelector('.soundRain')
const buttonCoffeeShop = document.querySelector('.soundCoffeeShop')
const buttonFireplace = document.querySelector('.soundFireplace')

const soundType = document.querySelector('.soundType')

const soundTypeForest = document.querySelector('#soundTypeForest')
const soundTypeRain = document.querySelector('#soundTypeRain')
const soundTypeCoffeeShop = document.querySelector('#soundTypeCoffeeShop')
const soundTypeFireplace = document.querySelector('#soundTypeFireplace')

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

buttonLightMode.addEventListener('click', function (){
  buttonLightMode.classList.add('hide')
  buttonDarkMode.classList.remove('hide')
  elementBody.classList.add('dark')
  soundTypeForest.classList.add('dark')
  soundTypeRain.classList.add('dark')
  soundTypeCoffeeShop.classList.add('dark')
  soundTypeFireplace.classList.add('dark')

  buttonPlayTimer.classList.add('dark')
  buttonStopTimer.classList.add('dark')
  buttonAddMinutes.classList.add('dark')
  buttonReduceMinutes.classList.add('dark')
})

buttonDarkMode.addEventListener('click', function (){
  buttonLightMode.classList.remove('hide')
  buttonDarkMode.classList.add('hide')
  elementBody.classList.remove('dark')
  soundTypeForest.classList.remove('dark')
  soundTypeRain.classList.remove('dark')
  soundTypeCoffeeShop.classList.remove('dark')
  soundTypeFireplace.classList.remove('dark')

  buttonPlayTimer.classList.remove('dark')
  buttonStopTimer.classList.remove('dark')
  buttonAddMinutes.classList.remove('dark')
  buttonReduceMinutes.classList.remove('dark')
})

buttonForest.addEventListener('click', function () {
  soundTypeForest.classList.add('selected');
  soundTypeRain.classList.remove('selected');
  soundTypeCoffeeShop.classList.remove('selected');
  soundTypeFireplace.classList.remove('selected');

  soundForest.play()
  soundRain.pause()
  soundCooffeeShope.pause()
  soundFireplace.pause()

  soundForest.loop = true 
})

buttonRain.addEventListener('click', function () {
  soundTypeRain.classList.add('selected');
  soundTypeForest.classList.remove('selected');
  soundTypeCoffeeShop.classList.remove('selected');
  soundTypeFireplace.classList.remove('selected');

  soundRain.play()
  soundForest.pause()
  soundCooffeeShope.pause()
  soundFireplace.pause()

  soundRain.loop = true
})

buttonCoffeeShop.addEventListener('click', function () {
  soundTypeCoffeeShop.classList.add('selected');
  soundTypeForest.classList.remove('selected');
  soundTypeRain.classList.remove('selected');
  soundTypeFireplace.classList.remove('selected');

  soundCooffeeShope.play()
  soundForest.pause()
  soundRain.pause()
  soundFireplace.pause()

  soundCooffeeShope.loop = true
})

buttonFireplace.addEventListener('click', function () {
  soundTypeFireplace.classList.add('selected');
  soundTypeForest.classList.remove('selected');
  soundTypeRain.classList.remove('selected');
  soundTypeCoffeeShop.classList.remove('selected');

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
  soundTypeForest.classList.remove('selected');
  soundTypeRain.classList.remove('selected');
  soundTypeCoffeeShop.classList.remove('selected');
  soundTypeFireplace.classList.remove('selected');
  
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