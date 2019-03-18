const template = `
    <div class="post__top">
        <div class="post__title">Hello World</div>
        <small>15.03.19</small>
    </div>

    <div class="post__body">
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
        </p>
    </div>
`;

export default class Post extends HTMLElement {
    constructor () {
        super();
    }

    set body (body) {
        this.body = body;
    }

    set title (title) {
        this.title = title;
    }

    set date (date) {
        this.date = date;
    }

    connectedCallback () {
        this.classList.add('post');
        this.innerHTML = template;
    }
}