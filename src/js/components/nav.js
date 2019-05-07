export default class NavControls {
    constructor () {
        this.nav = document.querySelector('.js-nav');
        this.expand = this.nav.querySelector('.js-expand');
        this.dropdown = document.querySelector('.js-dropdown');
        this.close = this.dropdown.querySelector('.js-close');

        this.expand.addEventListener('click', (event) => this._expand(event));
        this.close.addEventListener('click', (event) => this._close(event));
    }

    _expand (event) {
        event.preventDefault();
        this.dropdown.classList.remove('dropdown--closed');
    }

    _close (event) {
        event.preventDefault();
        this.dropdown.classList.add('dropdown--closed');
    }
}