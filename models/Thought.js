const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
  {
    toughtText: {
        type: String,
        required: "Thought text is required",
      //  @TODO: add validation between 1 and 280 characters
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtValue => dateFormat(createdAtValue)
    },
    username: {
      type: String
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Reaction'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

// get total count of reactions and replies on retrieval
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
