// config/main.js
// This is the main configuration file where universal and default settings should be placed.
// These settins can then be imported anywhere in the app as they are exported at the botom of the file.

import { jsPsych } from 'jspsych-react'
import _ from 'lodash'
import { eventCodes } from './trigger'
import requireContext from 'require-context.macro'

const AT_HOME = (process.env.REACT_APP_AT_HOME === 'true')

// is this mechanical turk?
const MTURK = (!jsPsych.turk.turkInfo().outsideTurk)

// get language file
const lang = require('../language/en_us.json')
if (process.env.MTURK) { // if this is mturk, merge in the mturk specific language
  const mlang = require('../language/en_us.mturk.json')
	_.merge(lang, mlang)
}

const importAll = (r) => {
  return r.keys().map(r);
}

const audio = importAll(requireContext('../assets/audio', false, /\.(m4a|mp3)$/))
const xcorrAudio = _.filter(audio, (o) => o.includes(`xcorr_audio`))[0]

export {
	lang,
	eventCodes,
	MTURK,
	AT_HOME,
  xcorrAudio
}
