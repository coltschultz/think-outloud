const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
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