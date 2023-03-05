import {
  elementBody,
  buttonLightMode,
  buttonDarkMode,

  buttonPlayTimer,
  buttonStopTimer,
  buttonAddMinutes,
  buttonReduceMinutes,

  soundTypeForest,
  soundTypeRain,
  soundTypeCoffeeShop,
  soundTypeFireplace,
} from "./elements.js"

import Timer from "./timer.js"
import Sounds from "./sounds.js"

const timer = Timer()
const sound = Sounds()

export default function(){
  function play(){
    buttonPlayTimer.classList.add('hide')
    timer.countdown()
    sound.pressButton()
  }

  function stop(){
    buttonPlayTimer.classList.remove('hide')

    soundTypeForest.classList.remove('selected');
    soundTypeRain.classList.remove('selected');
    soundTypeCoffeeShop.classList.remove('selected');
    soundTypeFireplace.classList.remove('selected');
  
    timer.reset()
    sound.pressButton()
    
    sound.forestAudio.pause()
    sound.rainAudio.pause()
    sound.cooffeeShopeAudio.pause()
    sound.fireplaceAudio.pause()
  }

  function addMinutes(){
    timer.addMinutes()
    sound.pressButton()
  }

  function reduceMinutes(){
    timer.reduceMinutes()
    sound.pressButton()
  }

  function buttonForest(){
    soundTypeForest.classList.add('selected');
    soundTypeRain.classList.remove('selected');
    soundTypeCoffeeShop.classList.remove('selected');
    soundTypeFireplace.classList.remove('selected');
  }

  function buttonRain(){
    soundTypeRain.classList.add('selected');
    soundTypeForest.classList.remove('selected');
    soundTypeCoffeeShop.classList.remove('selected');
    soundTypeFireplace.classList.remove('selected');
  }

  function buttonCoffeeShop(){
    soundTypeCoffeeShop.classList.add('selected');
    soundTypeForest.classList.remove('selected');
    soundTypeRain.classList.remove('selected');
    soundTypeFireplace.classList.remove('selected');
  }

  function buttonFireplace(){
    soundTypeFireplace.classList.add('selected');
    soundTypeForest.classList.remove('selected');
    soundTypeRain.classList.remove('selected');
    soundTypeCoffeeShop.classList.remove('selected');
  }

  function lightMode(){
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
  }

  function darkMode(){
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
  }

  return{
    play,
    stop,
    addMinutes,
    reduceMinutes,
    buttonForest,
    buttonRain,
    buttonCoffeeShop,
    buttonFireplace,
    lightMode,
    darkMode
  }
}