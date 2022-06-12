const { User } = require('../models');

const friendController = {
  // add friend
  addFriend({ params }, res) {
    User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { friends: params.friendId } },
          { new: true }
        )
      .then(dbFriendData => {
        if (!dbFriendData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbFriendData);
      })
      .catch(err => res.json(err));
  },

  // remove friend
  removeFriend({ params }, res) {
    User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { friends: params.friendId } },
          { new: true }
        )
      .then(dbFriendData => {
        if (!dbFriendData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbFriendData);
      })
      .catch(err => res.json(err));
  }
};

module.exports = friendController;
