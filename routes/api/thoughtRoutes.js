const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThoughts);

// /api/thoughts/:userId
router.route('/:userId').post(addThought);

// /api/thoughts/:id
router.route('/:id').get(getThoughtById).put(updateThought).delete(removeThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction).delete(removeReaction);

module.exports = router;