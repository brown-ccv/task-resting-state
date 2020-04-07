import experimentStart from '../trials/experimentStart'
import startCode from '../trials/startCode'
import userId from '../trials/userId'
import holdUpMarker from '../trials/holdUpMarker'
import { AT_HOME } from '../config/main'
import adjustVolume from '../trials/adjustVolume'

console.log('at_home', AT_HOME)
console.log('env at home', process.env.REACT_APP_AT_HOME)
const preamble = {
  type: 'html_keyboard_response',
  stimulus: '',
  timeline: (AT_HOME) ?
    [experimentStart(), userId()] :
    [experimentStart(), userId(), holdUpMarker(), adjustVolume(), startCode()]
}

export default preamble
