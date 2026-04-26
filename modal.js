class Modal {
    #handleOverlayClick;
    constructor(modal, openBtn = null, shouldCloseOnOverlay = false) {
        this.modal = document.getElementById(modal);
        this.overlay = document.getElementById('modal-overlay');
        this.shouldCloseOnOverlay = shouldCloseOnOverlay;
        this.#handleOverlayClick = () => this.close();
        if (openBtn) this.#initOpen(openBtn);
        this.#initClose();

    }

    open() {
        this.modal.classList.add('modal-showed');
        this.overlay.classList.add('overlay-showed');
        if (this.shouldCloseOnOverlay) {
            this.overlay.addEventListener('click', this.#handleOverlayClick);
        }
    }

    close() {
        this.overlay.removeEventListener('click', this.#handleOverlayClick);
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
        closeBtn.addEventListener('click', () => this.close());
    }
}

export { Modal };
