const { Schema, model } = require('mongoose');
const reactionSchema = require('./reactions');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => timestamp.toISOString(),
    },

    reactions: [reactionSchema],
    //reference the User who created this thought
    userId: {
      type: Schema.Types.ObjectId, //expect an ObjectId
      ref: 'User', //reference to the User model
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
// Create a virtual property name for virtual`commentCount` that gets the amount of comments per post
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Create the model from the schema
const Thought = model('Thought', thoughtSchema);

// Export the model
module.exports = Thought;
