//only need when you convert a string to an object id
//const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
  //Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      const userObj = {
        users,
      };
      return res.json(userObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate('thoughts')
        .lean();

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json({
        user,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Create a user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Update a user
  async updateUser(req, res) {
    try {
      // The second parameter is the update data
      // The third parameter { new: true } ensures the updated document is returned
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        req.body,
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(updatedUser);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Delete a user and their thoughts
  async deleteUser(req, res) {
    try {
      const userId = req.params.userId;

      // Find the user to make sure they exist
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'No user found with this ID' });
      }

      // Delete the user's thoughts
      await Thought.deleteMany({ userId: userId });

      // Now delete the user
      await User.findByIdAndDelete(userId);

      res.json({
        message: `User and all associated thoughts have been deleted.`,
      });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ message: 'Error deleting user and thoughts', error: err });
    }
  },
  // Add friend
  async addFriend(req, res) {
    try {
      console.log('You are adding a friend');
      const friendId = req.body.friendId; // This is the _id of the friend to add
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: friendId } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json({
        message: `Friend was added.`,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Remove friend
  async removeFriend(req, res) {
    try {
      console.log('You are removing a friend');
      // const friendId = req.body.friendId;
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      res.json({
        message: `Friend was deleted.`,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};
