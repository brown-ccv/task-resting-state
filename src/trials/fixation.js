import { eventCodes } from '../config/main'
import { sleep } from '../lib/taskUtils'
import { pdSpotEncode, photodiodeGhostBox } from '../lib/markup/photodiode'
import { fixationHTML } from '../lib/markup/fixation'
import { jsPsych } from 'jspsych-react'

const fixation = (duration) => {
  let stimulus = fixationHTML + photodiodeGhostBox()

  const start = eventCodes.rest.start;
  const stop = eventCodes.rest.stop;

  return {
    type: 'html_keyboard_response',
    choices: jsPsych.NO_KEYS,
    stimulus: stimulus,
    response_ends_trial: false,
    trial_duration: duration,
    on_load: async () => {
      let start_time = Date.now()
      let data = []
      pdSpotEncode(start)
      data.push({code: start, rt: Date.now() - start_time})
      await sleep(90000)
      pdSpotEncode(stop)
      data.push({code: stop, rt: Date.now() - start })
      jsPsych.data.write(data)
    }
  }
}

export default fixation
