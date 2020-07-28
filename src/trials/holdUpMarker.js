import { lang } from '../config/main'
import { photodiodeGhostBox } from '../lib/markup/photodiode'

const holdUpMarker = () => {
  let stimulus = `<div class="beads_container">
      <div class="instructions">
        <h2>${lang.instructions.align_photodiode}</h2>
      </div>
    </div>` + photodiodeGhostBox()

   return {
    type: 'html_button_response',
    stimulus: stimulus,
    choices: [lang.prompt.continue.button]
  }
}

export default holdUpMarker
