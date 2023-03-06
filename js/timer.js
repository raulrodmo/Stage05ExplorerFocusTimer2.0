import {
  minutesDisplay,
  secondsDisplay
} from "./elements.js"

import Sounds from "./sounds.js"
import Controls from "./controls.js"

let minutes = Number(minutesDisplay.textContent)
let timerTimeout
let newMinutes
let newSeconds

const sound = Sounds()
const controls = Controls()

export default function(){
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
        sound.KitchenTimer()
        controls.stop()
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

  return{
    addMinutes,
    reduceMinutes,
    timerDisplay,
    reset,
    countdown
  }
}