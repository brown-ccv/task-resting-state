import experimentStart from '../trials/experimentStart'
import startCode from '../trials/startCode'
import userId from '../trials/userId'
import holdUpMarker from '../trials/holdUpMarker'
import { AT_HOME, VIDEO } from '../config/main'
import adjustVolume from '../trials/adjustVolume'
import camera from '../trials/camera'
import { initialInstructions } from '../trials/instructions'

console.log('at_home', AT_HOME)
console.log('env at home', process.env.REACT_APP_AT_HOME)
console.log('vid', VIDEO)
let tl
if (VIDEO) {
  tl = [experimentStart(), userId(), adjustVolume(), initialInstructions(), camera()]
}
else if (AT_HOME && !VIDEO) {
  tl = [experimentStart(), userId(), adjustVolume(), initialInstructions()]
}
else {
  tl = [experimentStart(), userId(), adjustVolume(), holdUpMarker(), startCode(), initialInstructions()]
}

const preamble = {
  type: 'html_keyboard_response',
  stimulus: '',
  timeline: tl
}

export default preamble
