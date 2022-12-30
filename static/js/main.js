function main() {
	console.log(
		`DOM rendered at ${nowIsoString()}`
	);
	bindEvents();
	console.log(
		`Events have been binded at ${nowIsoString()}`
		);
}

// TODO: proper modules

// events
const stupidEvent = (event) => {
	console.log(
		`Event ${event} targetting ${event.target} was fired at ${nowIsoString()}`
		);
}

// event binder
function bindEvents() {
	Array.from(document.getElementsByClassName('has-stupid-event'))
		.forEach(element => {
			element.addEventListener('click', stupidEvent);
		});
}

// utils
const nowIsoString = () => new Date().toISOString();

window.addEventListener("load", main);
