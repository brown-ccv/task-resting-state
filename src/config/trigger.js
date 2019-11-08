// Event trigger settings - used in both the react app (renderer) and the electron app (main)
const manufacturer = 'Teensyduino'
const vendorId = '16c0'
const productId = '0483'

const eventCodes = {
  'open_resting_task': 12,
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
	manufacturer,
	vendorId,
	productId,
	eventCodes
}
