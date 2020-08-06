const express = require('express');
const router = express.Router();

const validateSession = require('../middleware/validate-session');
const location = require('../db').import('../models/location');

/*******CREATE ******/
router.post('/create', validateSession, (req, res) => {
    const createPost = {
        title: req.body.location.title,
        date: req.body.location.date,
        post: req.body.location.entry,
        owner: req.user.id
    }
    Location.create(createPost)
    .then(location => res.status(200).json(location))
    .catch(err => res.status(500).json({ error: err}))
});

/**** READ ALL ******/

router.get("/", (req, res) => {
    location.findAll()
    .then(locations => res.status(200).json(locations))
    .catch(err => res.status(500).json({ error: err}))

});

/* READ BY USER******/

router.get('/mine', validateSession, (req, res) => {
    let userid = req.user.id
    location.findAll({
        where: { owner: userid }
    })
    .then(locations => res.status(200).json(locations))
    .catch(err=> res.status(500).json({ error: err}))
});

/* READ BY TITLE******/

router.get('/:title', function (req, res) {
    let title = req.params.title;
    location.findAll({
        where: { title: title }
    })
    .then(locations => res.status(200).json(locations))
    .catch(err=> res.status(500).json({ error: err}))
});



module.exports = router