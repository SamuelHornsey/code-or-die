import { getApi } from "prismic-javascript";

const API_ENDPOINT = "https://codeordie.prismic.io/api/v2";

export default class Posts {
    constructor () {
        this.postsContainer = document.querySelector('.js-posts');

        this.init();
    }

    init () {
        getApi(API_ENDPOINT)
        .then(api => api.query(''))
        .then(res => {
            this.posts = res.results;
            this.render();
        });
    }

    render () {
        this.posts.forEach(post => {
            let el = document.createElement('app-post');

            el.title = post.data.title[0].text;
            el.date = post.first_publication_date;
            el.body = post.data.content[0].text;

            this.postsContainer.appendChild(el);
        });
    }
}