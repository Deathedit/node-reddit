const fetch = require('node-fetch')
const { format } = require('./function')
const type = ['hot', 'top', 'new']
let API_URL = 'https://api.reddit.com/r';

module.exports = {
    search(subreddit){
        const link = `${API_URL}/${subreddit}/${type[Math.floor(Math.random() * type.length)]}`
        let data;

        return fetch(link)
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
    },
};