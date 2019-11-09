// utilities specific to this app/task
import $ from 'jquery'


const moveDot = (position) => {
  const p = $("#fixation-container");
  p.attr('class', `move-${position}`);
}

const beep = () => {
  const context = new AudioContext()
  const o = context.createOscillator()
  const g = context.createGain()
  o.type = 'sine'
  o.connect(g)
  g.connect(context.destination)
  o.start()
  g.gain.exponentialRampToValueAtTime(
        0.0000001, context.currentTime + 1
        )
}

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export {
	moveDot,
	sleep,
	beep
}
