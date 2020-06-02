var router = require("express").Router();
var store = require("../db/store");

router.get("/api/notes", function (req, res) {
    store
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));

});

router.post("/api/notes", (req, res) => {
    store
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

router.delete("/api/notes/:id", function (req, res) {
    store
    .removeNote(req.params.id)
    .then(() => res.json({ok: true}))
    .catch(err => res.status(500).json(err));
    
});

module.exports = router;