const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
  reactionBody: {
    type: String
  },
  username: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;