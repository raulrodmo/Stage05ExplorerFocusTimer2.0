export default function(){
  const buttonPressAudio = new Audio("https://github.com/raulrodmo/Stage05ExplorerFocusTimer2.0/blob/main/.sounds/buttonPress.wav?raw=true")
  const kitchenTimerAudio = new Audio("https://github.com/raulrodmo/Stage05ExplorerFocusTimer2.0/blob/main/.sounds/kichenTimer.mp3?raw=true")
  const forestAudio = new Audio("https://github.com/raulrodmo/Stage05ExplorerFocusTimer2.0/blob/main/.sounds/forest.wav?raw=true")
  const rainAudio = new Audio("https://github.com/raulrodmo/Stage05ExplorerFocusTimer2.0/blob/main/.sounds/rain.wav?raw=true")
  const cooffeeShopeAudio = new Audio("https://github.com/raulrodmo/Stage05ExplorerFocusTimer2.0/blob/main/.sounds/coffeeShop.wav?raw=true")
  const fireplaceAudio = new Audio("https://github.com/raulrodmo/Stage05ExplorerFocusTimer2.0/blob/main/.sounds/fireplace.wav?raw=true")

  forestAudio.loop = true
  rainAudio.loop = true
  cooffeeShopeAudio.loop = true
  fireplaceAudio.loop = true

  function pressButton(){
    buttonPressAudio.play()
  }

  function KitchenTimer(){
    kitchenTimerAudio.play()
  }

  function forest(){
    forestAudio.play()
    rainAudio.pause()
    cooffeeShopeAudio.pause()
    fireplaceAudio.pause()
  }

  function rain(){
    rainAudio.play()
    forestAudio.pause()
    cooffeeShopeAudio.pause()
    fireplaceAudio.pause()
  }

  function cooffeeShope(){
    cooffeeShopeAudio.play()
    forestAudio.pause()
    rainAudio.pause()
    fireplaceAudio.pause()
  }

  function fireplace(){
    fireplaceAudio.play()
    forestAudio.pause()
    rainAudio.pause()
    cooffeeShopeAudio.pause()
  }

  return{
    pressButton,
    KitchenTimer,
    forest,
    rain,
    cooffeeShope,
    fireplace,

    forestAudio,
    rainAudio,
    cooffeeShopeAudio,
    fireplaceAudio
  }
}
