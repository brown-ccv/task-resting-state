import { jsPsych } from 'jspsych-react'
import { baseStimulus } from '../lib/markup/stimuli'
import { fixationHTML } from '../lib/markup/fixation'
import { pdSpotEncode, photodiodeGhostBox } from '../lib/markup/photodiode'
import { moveDot, sleep } from '../lib/taskUtils'
import { eventCodes } from '../config/trigger'
import $ from 'jquery'

const movingDot = (direction) => {
  let stimulus = fixationHTML + photodiodeGhostBox()

  const moveThree = async(position) => {
    const center = eventCodes.center
    const code = eventCodes[position]

    await sleep(5000)
    moveDot(position)
    pdSpotEncode(code)
    await sleep(2000)
    moveDot('center')
    pdSpotEncode(center)
    await sleep(2000)
    moveDot(position)
    pdSpotEncode(code)
    await sleep(2000)
    moveDot('center')
    pdSpotEncode(center)
    await sleep(2000)
    moveDot(position)
    pdSpotEncode(code)
    await sleep(2000)
    moveDot('center')
    pdSpotEncode(center)
  }

  return {
    'type': 'call_function',
    'async': true,
    func: (done) => {

      const start = Date.now()
      const rt = () => Date.now() - start

      // add stimulus to the DOM
      document.getElementById('jspsych-content').innerHTML = stimulus
      let container = $(".jspsych-content-wrapper");
      container.attr('class', 'fixation-container');
      console.log(direction)
      moveThree(direction)
      setTimeout(
         () => done({direction: direction, code: eventCodes[direction], start: start}),
         15000)
      container.attr('class', 'jspsych-content-wrapper')
    }
  }
}

export default movingDot
