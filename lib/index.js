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


    /*
    search(subreddit){
        let data;
        return fetch(`${API_URL}/${subreddit}/${type[Math.floor(Math.random() * type.length)]}?limit=${limit}`)
        .then(res => res.json())
        .then(res => {
            if(!res){
                return Error('Please try again!')
            } else if(!res.data){
                return Error('Private Subreddit!')
            } else if(res.data.dist === 0){
                return Error('Invalid Subreddit!')
            } else {
                const post = res.data.children[Math.floor(Math.random() * res.data.children.length)]
                data = format(post.data)
            }
            return data;
        });
    },*/
};