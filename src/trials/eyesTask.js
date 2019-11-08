import { jsPsych } from 'jspsych-react'
import { baseStimulus } from '../lib/markup/stimuli'
import { fixationHTML } from '../lib/markup/fixation'
import { pdSpotEncode, photodiodeGhostBox } from '../lib/markup/photodiode'
import { sleep, beep } from '../lib/taskUtils'
import { eventCodes } from '../config/trigger'
import { lang } from '../config/main'
import $ from 'jquery'


const eyesTask = (option) => {
  let stimulus = `<div id="dot-container"><h3>${lang[option]}</h3></div>` + photodiodeGhostBox()

  return {
    'type': 'html_keyboard_response',
    'choices': jsPsych.NO_KEYS,
    'stimulus': stimulus,
    'trial_duration': 13000,
    'on_load': async () => {
      let code = eventCodes[option]
      await sleep(1000)
      pdSpotEncode(code.start)
      beep()
      await sleep(10000)
      pdSpotEncode(code.end)
      beep()
    }
  }
}

export default eyesTask
