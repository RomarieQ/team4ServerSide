const express = require('express');
const router = express.Router();
const { Router } = require('express');

const validateSession = require('../middleware/validate-session');
const Location = require('../db').import('../models/location');

/*******CREATE ******/
router.post('/create', validateSession, (req, res) => {
    const createPost = {
        name: req.body.location.name,
        description: req.body.location.description,
        owner: req.user.id
    }
    Location.create(createPost)
    .then(location => res.status(200).json(location))
    .catch(err => res.status(500).json({ error: err}))
});

/**** READ ALL ******/

router.get("/", (req, res) => {
    Location.findAll()
    .then(locations => res.status(200).json(locations))
    .catch(err => res.status(500).json({ error: err}))

});

/* READ BY USER******/

router.get('/mine', validateSession, (req, res) => {
    let userid = req.user.id
    Location.findAll({
        where: { owner: userid }
    })
    .then(locations => res.status(200).json(locations))
    .catch(err=> res.status(500).json({ error: err}))
});

/* READ BY TITLE******/

router.get('/:name', validateSession, function (req, res) {
    let title = req.params.title;
    Location.findAll({
        where: { name: name }
    })
    .then(locations => res.status(200).json(locations))
    .catch(err=> res.status(500).json({ error: err}))
});

// UPDATE BY NAME
router.put('/update/:entryId', validateSession, function(req, res) {
    const updateLocationPost = {
        name: req.body.location.name,
        description: req.body.location.description,
    };

    const query = { where: {id: req.params.entryId, owner: req.user.id } };

    Location.update(updateLocationPost, query)
        .then((locations) => res.status(200).json(locations))
        .catch((err) => res.status(500).json({ error: err }))
});


// DELETE LOCATION BY TITLE
router.delete('/delete/:id', validateSession, function (req, res) {
    const query = { where: { id: req.params.id, owner: req.user.id }};

    Location.destroy(query)
        .then(() => res.status(200).json({ message: 'Location Deleted' }))
        .catch((err) => res.status(500).json({ error: err }))
})

module.exports = router;