const express = require('express');
const router = express.Router();
const User = require('../models/user');

const mongoose = require('mongoose');
const db = "mongodb+srv://usershahriar:passwordshahriar@users.kmmww.mongodb.net/<dbname>?retryWrites=true&w=majority" ;

mongoose.connect(db, err => {
    if(err){
        console.error('Error!' + err)
    }else{
        console.log('Connected to mongodb');
    }
})

router.get('/', (req, res)=>{
    res.send('From API route');

})

router.post('/register', (req, res) => {
    let userData = req.body ;
    let user = new User(userData);
    user.save((error, registerUser) => {
        if(error){
            console.log(error);
        }else{
            res.status(200).send(registerUser);
        }
    });
});


router.post('/login', (req, res) => {
    let userData = req.body;

    User.findOne({email: userData.email}, (error, user) => {
        if(error){
            console.log(error);

        }else{
            if(!user){
                res.status(401).send('Invalid Email');

            }else{
                if(user.password !== userData.password){
                    res.status(401).send('Invalid Password');

                }else{
                    res.status(200).send(user);
                }

            }
        }
    });

} );



router.get('/events', (req, res) => {
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem Epsome",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lorem Epsome",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lorem Epsome",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lorem Epsome",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lorem Epsome",
            "date": "2012-04-23T18:25:43.511Z"
        },
        
    ]
    res.json(events);

})




router.get('/special', (req, res) => {
    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem Epsome",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lorem Epsome",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lorem Epsome",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lorem Epsome",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lorem Epsome",
            "date": "2012-04-23T18:25:43.511Z"
        },
        
    ]
    res.json(events);

})

module.exports = router;