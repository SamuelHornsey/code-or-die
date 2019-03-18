import '../styles/main.scss';

// Components
import './components/index';

// Services
import { Posts } from "./services";

window.addEventListener('load', () => {
  let posts = new Posts;
});

// const apiEndpoint = "https://codeordie.prismic.io/api/v2";

// Prismic.getApi(apiEndpoint)
//   .then(function(api) {
//     return api.query(""); // An empty query will return all the documents
//   })
//   .then(
//     function(response) {
//       console.log("Documents: ", response.results);
//     },
//     function(err) {
//       console.log("Something went wrong: ", err);
//     }
//   );

// console.log("Hello World");
