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
    'trial_duration': 11000,
    'on_load': async () => {
      let start = Date.now()
      let code = eventCodes[option]
      let data = []
      pdSpotEncode(code.start)
      beep()
      data.push({trial: option, code: code.start, rt: Date.now() - start })
      await sleep(10000)
      pdSpotEncode(code.stop)
      beep()
      data.push({trial: option, code: code.stop, rt: Date.now() - start })
      jsPsych.data.write(data)
    }
  }
}

export default eyesTask
