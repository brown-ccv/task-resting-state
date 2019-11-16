import { lang } from '../config/main'
import { baseStimulus } from '../lib/markup/stimuli'


const adjustVolume = () => {
  const stimulus = baseStimulus(`
    <div class='instructions'>
    <h1>${lang.instructions.adjust_volume}</h1>
    </div>
    `, true)
  return {
    type: 'html_keyboard_response',
    stimulus: stimulus,
    prompt:  lang.prompt.continue.press,
    response_ends_trial: true
  }
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
  adjustVolume
}
