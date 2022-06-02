const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  email: {
    type: String,
    required: true,
    unqiue: true,
    // add validation
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
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

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
  });

const User = model('User', UserSchema);

module.exports = User;