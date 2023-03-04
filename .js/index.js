import {
  elementBody,
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

  soundTypeForest,
  soundTypeRain,
  soundTypeCoffeeShop,
  soundTypeFireplace,

  controlVolumeForest,
  controlVolumeRain,
  controlVolumeCoffeeShop,
  controlVolumeFireplace,
} from "./elements.js"

import Sounds from "./sounds.js"
import Controls from "./controls.js"

const sound = Sounds()
const controls = Controls()

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

  sound.forest()
})

buttonRain.addEventListener('click', function () {
  soundTypeRain.classList.add('selected');
  soundTypeForest.classList.remove('selected');
  soundTypeCoffeeShop.classList.remove('selected');
  soundTypeFireplace.classList.remove('selected');

  sound.rain()
})

buttonCoffeeShop.addEventListener('click', function () {
  soundTypeCoffeeShop.classList.add('selected');
  soundTypeForest.classList.remove('selected');
  soundTypeRain.classList.remove('selected');
  soundTypeFireplace.classList.remove('selected');

  sound.cooffeeShope()
})

buttonFireplace.addEventListener('click', function () {
  soundTypeFireplace.classList.add('selected');
  soundTypeForest.classList.remove('selected');
  soundTypeRain.classList.remove('selected');
  soundTypeCoffeeShop.classList.remove('selected');

  sound.fireplace()
})

controlVolumeForest.addEventListener("input", function() {
  const volume = this.value / 100;
  sound.forestAudio.volume = volume;
});

controlVolumeRain.addEventListener("input", function() {
  const volume = this.value / 100;
  sound.rainAudio.volume = volume;
});

controlVolumeCoffeeShop.addEventListener("input", function() {
  const volume = this.value / 100;
  sound.cooffeeShopeAudio.volume = volume;
});

controlVolumeFireplace.addEventListener("input", function() {
  const volume = this.value / 100;
  sound.fireplaceAudio.volume = volume;
});

buttonPlayTimer.addEventListener('click', function () {
  controls.play()
})

buttonStopTimer.addEventListener('click', function () {
  controls.stop()
})

buttonAddMinutes.addEventListener('click', function () {
  controls.addMinutes()
})

buttonReduceMinutes.addEventListener('click', function addMinutes() {
  controls.reduceMinutes()
})

