import { lang } from '../config/main'
import { photodiodeGhostBox } from '../lib/markup/photodiode'
import { baseStimulus } from '../lib/markup/stimuli'
import eventMarkerMessage from '../lib/markup/eventMarkerMessage'

const holdUpMarker = () => {
  let stimulus = baseStimulus(`<div><h2 id='usb-alert'></h2></div>`, true) + photodiodeGhostBox()

   return {
    type: 'html_button_response',
    stimulus: stimulus,
    choices: [lang.prompt.continue.button],
    prompt: `<br><h3>${lang.instructions.align_photodiode}</h3>`,
    on_load: () => (eventMarkerMessage()
                      .then(s => document.getElementById('usb-alert')
                      .innerHTML = s )
                    )
  }
}

export default holdUpMarker
