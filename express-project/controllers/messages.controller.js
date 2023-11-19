const path = require('path')

function getMessages(req, res){
    res.render('messages', {
        title: 'Messages',
        friend: 'Bruno'
    });
    //res.sendFile(path.join(__dirname,'..', 'public/images', 'skimountain.jpg'))
}

function postMessage(req, res){
    console.log("updating messages...")
}

module.exports = {
    getMessages,
    postMessage
}