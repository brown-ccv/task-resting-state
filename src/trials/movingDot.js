import { fixationHTML } from '../lib/markup/fixation'
import { pdSpotEncode, photodiodeGhostBox } from '../lib/markup/photodiode'
import { moveDot, sleep } from '../lib/taskUtils'
import { removeCursor } from '../lib/utils'
import { eventCodes } from '../config/trigger'
import $ from 'jquery'

const moveBlock = async(duration, position, start, eventCodes, data) => {
  const rt = () => Date.now() - start
  const code = eventCodes[position]

  await sleep(duration)
  moveDot(position)
  pdSpotEncode(code)
  data.push({code: code, rt: rt(), timestamp: Date.now()})
}

const movingDot = (direction) => {
  let stimulus = fixationHTML + photodiodeGhostBox()

  const moveThree = async(position, data, start, eventCodes) => {

    if (position === 'left') {
      data.push({code: eventCodes.center, rt: 0, timestamp: Date.now()})
      pdSpotEncode(eventCodes['center'])
    }

    await moveBlock(5000, position, start, eventCodes, data)
    await moveBlock(2000, 'center', start, eventCodes, data)
    await moveBlock(2000, position, start, eventCodes, data)
    await moveBlock(2000, 'center', start, eventCodes, data)
    await moveBlock(2000, position, start, eventCodes, data)
    await moveBlock(2000, 'center', start, eventCodes, data)
    console.log(data)
  }

  return {
    'type': 'call_function',
    'async': true,
     func: (done) => {
       removeCursor('experiment')

      const start = Date.now()
      let data = []

      // add stimulus to the DOM
      document.getElementById('jspsych-content').innerHTML = stimulus
      let container = $(".jspsych-content-wrapper");
      container.attr('class', 'fixation-container');
      moveThree(direction, data, start, eventCodes)
      let timeOut = (direction === 'down') ? 17000 : 15100
      setTimeout(
         () => done({direction: direction, code: eventCodes[direction], start: start, data: data}),
         timeOut)
      container.attr('class', 'jspsych-content-wrapper')
    }
  }
}

export default movingDot
