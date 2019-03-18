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
            this.postsContainer.appendChild(el);
            console.log(post);
        });
    }
}