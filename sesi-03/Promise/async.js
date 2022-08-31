import fetch from 'node-fetch';

const fetchTweets = async () => {

const response = await fetch("https://fake-tweets-api.herokuapp.com/posts");
const tweets = await response.json();
console.log(tweets);
}

fetchTweets();

