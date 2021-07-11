const fetch = require('node-fetch')
const { format } = require('./function')
const type = ['hot', 'top', 'new']
const limit = '100';
let API_URL = 'https://api.reddit.com/r';

module.exports = {
    OnlyGifs(subreddit){
        let data;
        return fetch(`${API_URL}/${subreddit}/${type[Math.floor(Math.random() * type.length)]}?limit=${limit}`)
        .then(res => res.json())
        .then(res => {
            while(true){
                const post = res.data.children[Math.floor(Math.random() * res.data.children.length)]
                if(post.data.url.includes('.gifv')) {
                    return data = format(post.data);
                    break;
                }
            }
        })
    },
    OnlyImgs(subreddit){
        let data;
        return fetch(`${API_URL}/${subreddit}/${type[Math.floor(Math.random() * type.length)]}?limit=${limit}`)
        .then(res => res.json())
        .then(res => {
            while(true){
                const post = res.data.children[Math.floor(Math.random() * res.data.children.length)]
                if(post.data.post_hint === 'image') {
                    return data = format(post.data);
                    break;
                }
            }
        })
    },
};