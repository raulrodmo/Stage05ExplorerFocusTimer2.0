import {
  buttonLightMode,
  buttonDarkMode,

  buttonPlayTimer,
  buttonStopTimer,
  buttonAddMinutes,
  buttonReduceMinutes,
  buttonForest,
  buttonRain,
  buttonCoffeeShop,
  buttonFireplace,

  controlVolumeForest,
  controlVolumeRain,
  controlVolumeCoffeeShop,
  controlVolumeFireplace,
} from "./elements.js"

export default function({
  controls,
  sound,
})

{ 
  buttonLightMode.addEventListener('click', function (){
    controls.lightMode()
  })

  buttonDarkMode.addEventListener('click', function (){
    controls.darkMode()
  })

  buttonForest.addEventListener('click', function () {
    controls.buttonForest()
    sound.forest()
  })

  buttonRain.addEventListener('click', function () {
    controls.buttonRain()
    sound.rain()
  })

  buttonCoffeeShop.addEventListener('click', function () {
    controls.buttonCoffeeShop()
    sound.cooffeeShope()
  })

  buttonFireplace.addEventListener('click', function () {
    controls.buttonFireplace()
    sound.fireplace()
  })

  controlVolumeForest.addEventListener("input", function() {
    const volume = this.value / 100;
    sound.forestAudio.volume = volume;
  })

  controlVolumeRain.addEventListener("input", function() {
    const volume = this.value / 100;
    sound.rainAudio.volume = volume;
  })

  controlVolumeCoffeeShop.addEventListener("input", function() {
    const volume = this.value / 100;
    sound.cooffeeShopeAudio.volume = volume;
  })

  controlVolumeFireplace.addEventListener("input", function() {
    const volume = this.value / 100;
    sound.fireplaceAudio.volume = volume;
  })

  buttonPlayTimer.addEventListener('click', function () {
    controls.play()
  })

  buttonStopTimer.addEventListener('click', function () {
    sound.stopSound()
    controls.stop()
  })

  buttonAddMinutes.addEventListener('click', function () {
    controls.addMinutes()
  })

  buttonReduceMinutes.addEventListener('click', function () {
    controls.reduceMinutes()
  })
}