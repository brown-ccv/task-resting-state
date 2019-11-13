import { lang } from '../config/main'
import { baseStimulus } from '../lib/markup/stimuli'


const instructions = (language) => {
  var stimulus = baseStimulus(`
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

export default instructions
