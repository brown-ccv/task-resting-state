// config/main.js
// This is the main configuration file where universal and default settings should be placed.
// These settins can then be imported anywhere in the app as they are exported at the botom of the file.

import { jsPsych } from 'jspsych-react'
import _ from 'lodash'
import { eventCodes } from './trigger'

const AT_HOME = (process.env.REACT_APP_AT_HOME === 'true')

// is this mechanical turk?
const MTURK = (!jsPsych.turk.turkInfo().outsideTurk)

// audio codes
const audioCodes = {
	frequency: 100*(eventCodes.open_task - 9),
	type: 'sine'
}

// get language file
const lang = require('../language/en_us.json')
if (process.env.MTURK) { // if this is mturk, merge in the mturk specific language
  const mlang = require('../language/en_us.mturk.json')
	_.merge(lang, mlang)
}

const taskName = "Resting State"

export {
	lang,
	eventCodes,
	MTURK,
	AT_HOME,
	audioCodes,
	taskName
}
