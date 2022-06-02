const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/thought-controller');

// /api/pizzas
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// /api/pizzas/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
