const reddit = require('../lib/index')

reddit.OnlyImgs('fitgirls').then(d => {
    console.log(d);
})