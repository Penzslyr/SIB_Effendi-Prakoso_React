import fetch from 'node-fetch';

// fetch("https://fake-tweets-api.herokuapp.com/posts")
// .then(response => {
//     return response.json()
// }).then(tweets => {
//     return tweets.filter(tweet => {
//         return tweet.rts > 50;
//     })
// }).catch(err => {
//     console.error(error);
// })

fetch('https://fake-tweets-api.herokuapp.com/posts')
.then(response => {
    return response.json()
}).then(tweets=> {
    return console.log(tweets, " panjang data: " + tweets.length)
});