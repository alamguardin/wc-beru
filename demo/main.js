import './style.css';
import { toast } from '../lib';

// Simple toast example
const btn = document.querySelector('#defaultButton');

let count = 1;
btn.addEventListener('click', () => {
	toast.display(`This is the toast #${count} from wc-beru`, {
		description: 'This is a toast description',
		closeButton: true,
	});

	count++;
});

// Positions toast example
const sectionPositions = document.getElementById('section-positions');

function createToaster(position) {
	document.getElementById('positions').remove();

	const toasterElement = document.createElement('wc-beru');
	toasterElement.setAttribute('id', 'positions');
	toasterElement.setAttribute('position', position);

	const nodeRef = document.body.firstChild;
	document.body.insertBefore(toasterElement, nodeRef);
}

sectionPositions.addEventListener('click', (e) => {
	if (e.target.id === 'btn-tl') {
		createToaster('top-left');
		toast.display('Hello from wc-beru', {
			description: 'Toast in top left position',
			beruId: 'positions',
		});
	}

	if (e.target.id === 'btn-tc') {
		createToaster('top-center');
		toast.display('Hello from wc-beru', {
			description: 'Toast in top center position',
			beruId: 'positions',
		});
	}

	if (e.target.id === 'btn-tr') {
		createToaster('top-right');
		toast.display('Hello from wc-beru', {
			description: 'Toast in top right position',
			beruId: 'positions',
		});
	}

	if (e.target.id === 'btn-bl') {
		createToaster('bottom-left');
		toast.display('Hello from wc-beru', {
			description: 'Toast in bottom left position',
			beruId: 'positions',
		});
	}

	if (e.target.id === 'btn-bc') {
		createToaster('bottom-center');
		toast.display('Hello from wc-beru', {
			description: 'Toast in bottom center position',
			beruId: 'positions',
		});
	}

	if (e.target.id === 'btn-br') {
		createToaster('bottom-right');
		toast.display('Hello from wc-beru', {
			description: 'Toast in bottom right position',
			beruId: 'positions',
		});
	}
});

// Full color examples
const sectionFullcolor = document.getElementById('section-fullcolor');

sectionFullcolor.addEventListener('click', (e) => {
	if (e.target.id === 'btn-success') {
		toast.success('Success message from wc-beru', {
			description: 'This is success toast',
			beruId: 'fullcolor',
		});
	}

	if (e.target.id === 'btn-error') {
		toast.error('Error message from wc-beru', {
			description: 'This is error toast',
			beruId: 'fullcolor',
		});
	}

	if (e.target.id === 'btn-info') {
		toast.info('Info message from wc-beru', {
			description: 'This is info toast',
			beruId: 'fullcolor',
		});
	}

	if (e.target.id === 'btn-warning') {
		toast.warning('Warning message from wc-beru', {
			description: 'This is warning toast',
			beruId: 'fullcolor',
		});
	}
});

// Theme example
const btnDarkTheme = document.getElementById('btn-dark');

btnDarkTheme.addEventListener('click', () => {
	toast.display('This dark theme toast', {
		description: 'Welcome to the dark side',
		beruId: 'theme',
	});
});
