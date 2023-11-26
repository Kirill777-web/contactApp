const { Schema, Types } = require('mongoose');

// Schema for what makes up a comment
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  text: {
    type: String,
    required: true,
    maxlength: 280,
  },
  // username of the user who created this reaction
  username: {
    type: String,
    required: true,
  },
  //timestamp of when this reaction was created
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => timestamp.toISOString(),
  },
});

module.exports = reactionSchema;
