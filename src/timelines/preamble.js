import experimentStart from '../trials/experimentStart'
import startCode from '../trials/startCode'
import userId from '../trials/userId'
import holdUpMarker from '../trials/holdUpMarker'
import { AT_HOME } from '../config/main'
import adjustVolume from '../trials/adjustVolume'
import camera from '../trials/camera'
import { initialInstructions } from '../trials/instructions'

console.log('at_home', AT_HOME)
console.log('env at home', process.env.REACT_APP_AT_HOME)
const preamble = {
  type: 'html_keyboard_response',
  stimulus: '',
  timeline: (AT_HOME) ?
    [experimentStart(), userId(), adjustVolume(), initialInstructions(), camera()
    ] :
    [experimentStart(), userId(), adjustVolume(), holdUpMarker(), startCode(), initialInstructions()
    ]
}

export default preamble
