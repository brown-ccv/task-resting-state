import { lang } from '../config/main'
import { baseStimulus } from '../lib/markup/stimuli'


const movingDotInstruction = baseStimulus(`
  <div class='instructions'>
  <h1>${lang.instructions.moving_dot}</h1>
  </div>
  `, true)

const initialInstructions = {
  type: 'instructions',
  pages: [movingDotInstruction],
  show_clickable_nav: true
}

const instructions = (language) => {
  const stimulus = baseStimulus(`
    <div class='instructions'>
    <h1>${language}</h1>
    </div>
    `, true)

  return {
    type: 'html_keyboard_response',
    stimulus: stimulus,
    prompt:  lang.prompt.continue.press,
    response_ends_trial: true
  }
}

export {
  instructions,
  initialInstructions
}
