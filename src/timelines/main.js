import { lang } from '../config/main'
import preamble from './preamble'
import { instructions, initialInstructions } from '../trials/instructions'
import movingDot from '../trials/movingDot'
import eyesTask from  '../trials/eyesTask'
import fixation from '../trials/fixation'
import experimentEnd from '../trials/experimentEnd'
import camera from '../trials/camera'

const primaryTimeline = [
        preamble,
        initialInstructions(),
        camera(),
        movingDot('left'),
        movingDot('right'),
        movingDot('up'),
        movingDot('down'),
        instructions(lang.instructions.blink),
        eyesTask('blink'),
        instructions(lang.instructions.close_eyes),
        eyesTask('close'),
        instructions(lang.instructions.fixate),
        fixation(91000),
        experimentEnd(1000)
        ]


export const tl = primaryTimeline
