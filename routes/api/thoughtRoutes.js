const router = require('express').Router();

const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// GET all & POST thought //
router.route('/').get(getThought).post(createThought);

// GET one thought, PUT & DELETE by ID //
router.route('/:thoughtId')
.get(getSingleThought)
.put(updateThought)
.delete(deleteThought);

// POST new reactions //
router.route('/:thoughtId/reactions')
.post(createReaction);

// DELETE reaction by ID //
router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);


module.exports = router;