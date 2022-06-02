const router = require('express').Router();
const reactionRoutes = require('./reaction-routes');
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

router.use('/comments', reactionRoutes);
router.use('/thought', thoughtRoutes);
router.use('/user', userRoutes);

module.exports = router;
