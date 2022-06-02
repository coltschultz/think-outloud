const { Reaction, Thought } = require('../models');

const reactionController = {
  // add reaction to thought
  addReaction({ req.body, body }, res) {
    console.log(body);
    Reaction.create(body)
      .then(({ _id }) => {
        return Thought.findOneAndUpdate(
          { _id: req.body.pizzaId },
          { $push: { reactions: _id } },
          { new: true }
        );
      })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => res.json(err));
  },

  // remove reaction
  removeReaction({ req.body }, res) {
    Reaction.findOneAndDelete({ _id: req.body.reactionId })
      .then(deletedReaction => {
        if (!deletedReaction) {
          return res.status(404).json({ message: 'No reaction with this id!' });
        }
        return Thought.findOneAndUpdate(
          { _id: req.body.pizzaId },
          { $pull: { reactions: req.body.reactionId } },
          { new: true }
        );
      })
      .then(dbThoughtData => {
        if (!dbThoughtData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch(err => res.json(err));
  }
};

module.exports = reactionController;
