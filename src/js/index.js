import '../styles/main.scss';

// Components
import './components/index';

// Services
import './services/scroll';
import { Posts } from "./services";

window.addEventListener('load', () => {
  let posts = new Posts;
});