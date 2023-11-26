const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: true,
      maxlength: 50,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought', // Reference to the Thought model
      },
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model because friends are also users!
      },
    ],
  },

  {
    toJSON: {
      getters: true,
    },
  }
);
//To count the number of friends for each user.This will allow us to display the number of friends on the front-end.
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
