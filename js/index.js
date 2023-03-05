import Controls from "./controls.js"
import Timer from "./timer.js"
import Events from "./events.js"
import Sounds from "./sounds.js"

const sound = Sounds()
const controls = Controls()
const timer = Timer()

Events({controls, timer, sound})