const { User, Thought } = require('../models');

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      return res.json(thoughts);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Get a single thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .lean();

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Create a thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  //delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });
      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }
      await User.deleteMany({ _id: { $in: thought.users } });
      res.json({ message: 'Thought and associated users deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Update a thought
  async updateThought(req, res) {
    try {
      const updatedThought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId }, // the query
        { $set: req.body }, // update data
        { new: true } //ensures the updated document is returned
      );

      if (!updatedThought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(updatedThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a reaction to the thought
  async addReaction(req, res) {
    try {
      console.log('You are adding a reaction');
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $push: { reactions: req.body } },
        { new: true, runValidators: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json({
        message: `Reaction was added.`,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Delete a reaction

  async deleteReaction(req, res) {
    try {
      console.log('You are deleting the reaction');
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { new: true }
      );
      if (!thought) {
        return res.status(404).json({ message: 'No thought with this ID' });
      }
      res.json({
        message: `Reaction was deleted.`,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
