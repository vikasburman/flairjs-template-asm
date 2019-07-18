const flair = require('flairjs');
const preamble = require('../dist/preamble.js');
preamble(flair).then(() => {
    console.log(`Assembly preamble loaded!`);
    debugger;
}).catch((err) => {
    console.log(err);
})
