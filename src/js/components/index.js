import Post from './post';
import NavControls from './nav';

(() => {
    window.customElements.define('app-post', Post);

    new NavControls();
})();