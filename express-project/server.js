const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: "John",
    },
    {
        id: 1,
        name: "Peter",
    },
    {
        id: 2,
        name: "Mary",
    },
];

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post('/friends', (req, res) => {
    if(!req.body.name){
        return res.status(400).json({
            message: "Name is required."
        });
        return;
    }
    const newFriend = {
        id: friends.length,
        name: req.body.name
    };
    friends.push(newFriend);
    res.json(newFriend);
});

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.get('/friends', (req, res) => {
    res.json(friends);
});


app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if(friend){
        res.status(200).json(friend);
    }else{
        res.status(404).json({message: "Friend not found."});
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`); 
});