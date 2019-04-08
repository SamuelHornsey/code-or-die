const template = `
    <div class="post__top">
        <div class="post__title js-title"></div>
        <small class="js-date"></small>
    </div>

    <div class="post__body js-body">
    </div>
`;

export default class Post extends HTMLElement {
    constructor () {
        super();
    }

    set body (body) {
        this._body = body;
    }

    set title (title) {
        this._title = title;
    }

    set date (date) {
        this._date = new Date(date);
    }

    connectedCallback () {
        this.classList.add('post');
        this.innerHTML = template;

        this._render();
    }

    _render () {
        this.querySelector('.js-title').innerHTML = this._title;
        this.querySelector('.js-date').innerHTML = `${this._date.getDate()}/${this._date.getMonth() + 1}/${this._date.getFullYear()}`;
        this.querySelector('.js-body').innerHTML = this._body;
    }
}