import fetch from 'node-fetch';

fetch("https://fake-tweets-api.herokuapp.com/posts")
.then(response =>  response.json())
// .then(tweet =>  tweet.filter(tweet =>  tweet.stars > 50))
// .then(tweets => tweets.filter(tweet => tweet.rts > 50))
.catch(err => console.error(error))