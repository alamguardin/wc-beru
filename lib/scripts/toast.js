import * as ico from './icons';

/**
 * @class Toast
 * @description Handles the creation and display of toast notifications.
 */
export class Toast {
	constructor() {
		/**
		 * @private
		 * @type {NodeList}
		 * @description The toaster element that will contain the toasts.
		 */
		this._toaster;
	}

	/**
	 * @param {NodeList} arr The toaster elements.
	 * @description Sets the toaster element that will contain the toasts.
	 */
	setToaster(arr) {
		if (arr.length > 0) {
			this._toaster = arr;
		} else {
			throw new Error('No wc-beru instances have been created');
		}
	}

	/**
	 * @param {object} data The data for the toast.
	 * @param {number} [data.id]
	 * @param {string} [data.type] It's the toast category.
	 * @param {string} [data.message]
	 * @param {string} [data.description]
	 * @param {boolean} [data.closeButton]
	 * @param {string | undefined} [data.beruId]
	 * @description Renders a toast notification with the given data.
	 */
	#renderToast(data) {
		this.setToaster(document.querySelectorAll('wc-beru'));

		let toastIcon = '';

		switch (data.type) {
			case 'success':
				toastIcon = ico.successIcon();
				break;
			case 'error':
				toastIcon = ico.errorIcon();
				break;
			case 'warning':
				toastIcon = ico.warningIcon();
				break;
			case 'info':
				toastIcon = ico.infoIcon();
				break;
		}

		const toastTemplate = `
        <div class="toast ${data.type}" id="${data.id}">
            <div class="toast-content">
                <span class="toast-title">${toastIcon}${data.message}</span>
                ${data.description ? `<span class="toast-description">${data.description}</span>` : ''}
            </div>
            ${data.closeButton ? `<button class="toast-close">${ico.closeIcon()}</button>` : ''}
        </div>
        `;

		if (!data.beruId) {
			// @ts-expect-error
			this._toaster[0].addToast(toastTemplate);
		}

		if (data.beruId) {
			const seletedToaster = Array.from(this._toaster).find((element) => {
				// @ts-expect-error
				return element.id === data.beruId;
			});

			if (seletedToaster) {
				// @ts-expect-error
				seletedToaster.addToast(toastTemplate);
			} else {
				throw new Error(`Not finding wc-beru with ${data.beruId} id`);
			}
		}
	}

	/**
	 * Configuration for the toast notification.
	 * @typedef {Object} ToastOptions
	 * @property {string} [description] - A more detailed message for the toast.
	 * @property {boolean} [closeButton=false] - Whether to show a close button.
	 * @property {string} [beruId] - The id of the wc-beru instance.
	 */

	/**
	 * @param {string} type The type or variant toast
	 * @param {string} message The main message of the toast.
	 * @param {ToastOptions} options Toast options.
	 * @description Displays a toast with the given message and options.
	 */
	#createToast(type, message, options) {
		const toastData = {
			id: Date.now(),
			type: type,
			message: message,
			description: options.description ?? '',
			closeButton: options.closeButton ?? false,
			beruId: options.beruId ?? undefined,
		};

		this.#renderToast(toastData);
	}

	/**
	 * Displays a toast with the given message and options.
	 * @param {string} message - The main message of the toast.
	 * @param {ToastOptions} [options={}] - Toast options.
	 */
	display(message, options = {}) {
		this.#createToast('', message, options);
	}

	/**
	 * Displays a success toast with the given message and options.
	 * @param {string} message The main message of the toast.
	 * @param {ToastOptions} options Toast options.
	 */
	success(message, options = {}) {
		this.#createToast('success', message, options);
	}

	/**
	 * Displays a error toast with the given message and options.
	 * @param {string} message The main message of the toast.
	 * @param {ToastOptions} options Toast options.
	 */
	error(message, options = {}) {
		this.#createToast('error', message, options);
	}

	/**
	 * Displays a warning toast with the given message and options.
	 * @param {string} message The main message of the toast.
	 * @param {ToastOptions} options Toast options.
	 */
	warning(message, options = {}) {
		this.#createToast('warning', message, options);
	}

	/**
	 * Displays a toast with the given message and options.
	 * @param {string} message The main message of the toast.
	 * @param {ToastOptions} options Toast options.
	 */
	info(message, options = {}) {
		this.#createToast('info', message, options);
	}
}
