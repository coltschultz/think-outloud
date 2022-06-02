const router = require('express').Router();
const { addReaction, removeReaction } = require('../../controllers/reaction-controller');

// /api/comments/<thoughtId>
router.route('/:thoughtId').post(addReaction);

// /api/comments/<thoughtId>/<reactionId>
router.route('/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
