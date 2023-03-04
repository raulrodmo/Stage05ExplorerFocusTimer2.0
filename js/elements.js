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

export{
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

  soundType,

  soundTypeForest,
  soundTypeRain,
  soundTypeCoffeeShop,
  soundTypeFireplace,

  controlVolumeForest,
  controlVolumeRain,
  controlVolumeCoffeeShop,
  controlVolumeFireplace,

  minutesDisplay,
  secondsDisplay
}