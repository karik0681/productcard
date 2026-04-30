class Modal {
    #handleClose;

    constructor(modal, openBtn = null, shouldCloseOnOverlay = false) {
        this.modal = document.getElementById(modal);
        this.overlay = document.getElementById('modal-overlay');
        this.closeBtn = this.modal.querySelector('.close-btn');
        this.shouldCloseOnOverlay = shouldCloseOnOverlay;
        this.#handleClose = () => this.close();
        if (openBtn) this.#initOpen(openBtn);
    }

    open() {
        this.modal.classList.add('modal-showed');
        this.overlay.classList.add('overlay-showed');
        if (this.shouldCloseOnOverlay) {
            this.overlay.addEventListener('click', this.#handleClose);
        }
        this.#initClose();
    }

    close() {
        this.overlay.removeEventListener('click', this.#handleClose);
        this.closeBtn.removeEventListener('click', this.#handleClose);
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
        this.closeBtn.addEventListener('click', this.#handleClose);
    }
}

export { Modal };
