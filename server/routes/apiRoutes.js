const express = require('express');
const router = express.Router();
const User = require('../database/models/user');
const passport = require("../auth/passport");

router.get("/user", (req, res) => {
    console.log("GETTING USER DATA");
    User.findById(req.user.id, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            userInfo = user;
            res.json(userInfo);
        }
    })
})

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    if (req.user) {
        res.json({ user: req.user })
        console.log(`sending "user: req.user"`);
    } else {
        res.json({ user: null })
        console.log(`req.user not found`);
    }
})

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.post('/user', (req, res) => {
    console.log('user signup');
    const { username, password, displayName } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.send({status: 403, message: "A USER WITH THAT EMAIL ALREADY EXISTS!"});
        }
        else {
            const newUser = new User({
                username: username, password: password, displayName: displayName
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser).status(200)
            })
        }
    })
})

module.exports = router