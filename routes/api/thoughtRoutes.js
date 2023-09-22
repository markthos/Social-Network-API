const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

router.routes('/').get(getAllThoughts).post(addThought);

router.route('/:id').get(getThoughtById).put(updateThought).delete(removeThought);

router.route('/:thoughtId/reactions').post(addReaction).delete(removeReaction);

module.exports = router;