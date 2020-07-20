// Event trigger settings - used in both the react app (renderer) and the electron app (main)
const comName = 'COM3'

// Values to send to the 'USB event marker' arduino when an event happens.
// Make sure the 'open_resting_task' value doesn't conflict with any value sent
// by any other task, since we use it to uniquely identify this task. It's ok
// for other values to be re-used in other tasks.

// NOTE - these must match the codes in src/config/trigger.js
const eventCodes = {
	'test_connect': 32,
  'open_task': 12,
  'left': 1,
  'right': 2,
  'up': 3,
  'down': 4,
  'center': 5,
	'blink': {
		'start': 6,
		'stop':7
	},
	'close': {
		'start': 8,
		'stop': 9
	},
	'rest': {
		'start': 10,
		'stop': 11
	}
}

// this is module.exports isntead of just exports as it is also imported into the electron app
module.exports = {
	comName,
	eventCodes
}
