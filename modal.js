class Modal {
    constructor(id) {
        this.modal = document.getElementById(id);
        this.overlay = document.querySelector('.overlay');
    }

    open() {
        this.overlay.classList.add('overlay-showed');
        this.modal.classList.add('modal-showed');
        this.initClose();
    }

    close() {
        this.overlay.classList.remove('overlay-showed');
        this.modal.classList.remove('modal-showed');
    }

    isOpen() {
        return this.modal.classList.contains('modal-showed');
    }

    initClose() {
        const closeBtn = this.modal.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => this.close());
    }
}

export { Modal };
