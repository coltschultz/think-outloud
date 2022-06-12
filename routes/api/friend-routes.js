const router = require('express').Router();
const { addFriend, removeFriend } = require('../../controllers/friend-controller');

// /api/friends/<userId>/<friendId>
router.route('/:userId/:friendId').post(addFriend);

// /api/friends/<userId>/<friendId>
router.route('/:userId/:friendId').delete(removeFriend);

module.exports = router;
