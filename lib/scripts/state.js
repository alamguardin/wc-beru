/**
 * @class State
 * @description Manages the state of the toaster component.
 */
class State {
    constructor() {
        /**
         * @private
         * @type {HTMLElement}
         * @description The DOM element instance of the toaster.
         */
        this._instanceNode;
        /**
         * @private
         * @type {Array<Object>}
         * @description A list of the toasts currently displayed.
         */
        this._toasts = []
    }

    /**
     * @param {HTMLElement} node The DOM element instance of the toaster.
     * @description Sets the DOM element instance of the toaster.
     */
    setInstance(node) {
        this._instanceNode = node
    }

    /**
     * @returns {HTMLElement} The DOM element instance of the toaster.
     * @description Gets the DOM element instance of the toaster.
     */
    get instance() {
        return this._instanceNode
    }

}

export default State