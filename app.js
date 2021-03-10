const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('/root');
});

app.listen(3010,function(){
    console.log('server running');
});