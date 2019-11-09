import { fixationHTML } from '../lib/markup/fixation'
import { pdSpotEncode, photodiodeGhostBox } from '../lib/markup/photodiode'
import { moveDot, sleep } from '../lib/taskUtils'
import { eventCodes } from '../config/trigger'
import $ from 'jquery'

const moveBlock = async(duration, position, start, eventCodes, data) => {
  const rt = () => Date.now() - start
  const code = eventCodes[position]

  await sleep(duration)
  moveDot(position)
  pdSpotEncode(code)
  data.push({code: code, rt: rt()})
}

const movingDot = (direction) => {
  let stimulus = fixationHTML + photodiodeGhostBox()

  const moveThree = async(position, data, start, eventCodes) => {

    await moveBlock(5000, position, start, eventCodes, data)
    await moveBlock(2000, 'center', start, eventCodes, data)
    await moveBlock(2000, position, start, eventCodes, data)
    await moveBlock(2000, 'center', start, eventCodes, data)
    await moveBlock(2000, position, start, eventCodes, data)
    await moveBlock(2000, 'center', start, eventCodes, data)

  }

  return {
    'type': 'call_function',
    'async': true,
    func: (done) => {

      const start = Date.now()
      let data = []

      // add stimulus to the DOM
      document.getElementById('jspsych-content').innerHTML = stimulus
      let container = $(".jspsych-content-wrapper");
      container.attr('class', 'fixation-container');
      console.log(direction)
      moveThree(direction, data, start, eventCodes)
      console.log(data)
      setTimeout(
         () => done({direction: direction, code: eventCodes[direction], start: start, data: data}),
         15000)
      container.attr('class', 'jspsych-content-wrapper')
    }
  }
}

export default movingDot
