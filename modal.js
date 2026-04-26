class Modal {
    #handleOverlayClick;
    #handleCloseClick;
    constructor(modal, openBtn = null, shouldCloseOnOverlay = false) {
        this.modal = document.getElementById(modal);
        this.overlay = document.getElementById('modal-overlay');
        this.shouldCloseOnOverlay = shouldCloseOnOverlay;
        this.#handleOverlayClick = () => this.close();
        this.#handleCloseClick = () => this.close();
        if (openBtn) this.#initOpen(openBtn);

    }

    open() {
        this.modal.classList.add('modal-showed');
        this.overlay.classList.add('overlay-showed');
        if (this.shouldCloseOnOverlay) {
            this.overlay.addEventListener('click', this.#handleOverlayClick);
        }
        this.#initClose();
    }

    close() {
        this.overlay.removeEventListener('click', this.#handleOverlayClick);
        this.modal.querySelector('.close-btn').removeEventListener('click', this.#handleCloseClick);
        this.modal.classList.remove('modal-showed');
        this.overlay.classList.remove('overlay-showed');
    }

    isOpen() {
        return this.modal.classList.contains('modal-showed');
    }

    #initOpen(openBtn) {
        const openButton = document.getElementById(openBtn);
        openButton.addEventListener('click', () => this.open());
    }

    #initClose() {
        const closeBtn = this.modal.querySelector('.close-btn');
        closeBtn.addEventListener('click', this.#handleCloseClick);
    }
}

export { Modal };
