import fetch from 'node-fetch';

( async () => {

const response = await fetch("https://fake-tweets-api.herokuapp.com/posts");
const tweets = await response.json();
console.log(tweets, tweets.length);
})();
