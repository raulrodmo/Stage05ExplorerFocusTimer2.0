import {
  buttonPlayTimer,

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
    
    sound.forest()
    sound.rain()
    sound.cooffeeShope()
    sound.fireplace()
  }

  function addMinutes(){
    timer.addMinutes()
    sound.pressButton()
  }

  function reduceMinutes(){
    timer.reduceMinutes()
    sound.pressButton()
  }

  return{
    play,
    stop,
    addMinutes,
    reduceMinutes
  }
}