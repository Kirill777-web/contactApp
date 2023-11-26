const connection = require('../config/connection');
const { User, Thought } = require('../models');
const {
  getRandomName,
  getRandomArrItem,
  getRandomThought,
  getRandomReaction,
} = require('./data');

const seedDatabase = async () => {
  await connection;

  await User.deleteMany({});
  await Thought.deleteMany({});

  const users = [];
  //To create 5 users in DB
  for (let i = 0; i < 5; i++) {
    const name = getRandomName();
    users.push({
      firstName: name.split(' ')[0],
      lastName: name.split(' ')[1],
    });
  }

  // Insert users and get their IDs
  const createdUsers = await User.insertMany(users);
  const userIds = createdUsers.map((user) => user._id);

  // Generating thoughts and reactions
  const thoughts = [];
  const allUsers = await User.find({});
  allUsers.forEach((user) => {
    const username = `${user.firstName} ${user.lastName}`;
    for (let i = 0; i < 2; i++) {
      const newThought = getRandomThought();
      newThought.userId = user._id;
      newThought.username = username;

      const thoughtReactions = [];
      for (let j = 0; j < Math.floor(Math.random() * 2); j++) {
        const newReaction = getRandomReaction();
        newReaction.username = username; // Set the username for each reaction
        thoughtReactions.push(newReaction);
      }

      newThought.reactions = thoughtReactions;
      thoughts.push(newThought);
    }
  });

  await Thought.collection.insertMany(thoughts);

  // Updating users with their thoughts
  thoughts.forEach(async (thought) => {
    await User.findByIdAndUpdate(thought.userId, {
      $push: { thoughts: thought._id },
    });
  });

  // Adding friends to each user
  for (const user of createdUsers) {
    const friendIds = userIds.filter(
      (id) => id.toString() !== user._id.toString()
    );
    const shuffledFriends = friendIds.sort(() => 0.5 - Math.random());
    const selectedFriends = shuffledFriends.slice(
      0,
      Math.floor(Math.random() * 5)
    );
    await User.findByIdAndUpdate(user._id, {
      $set: { friends: selectedFriends },
    });
  }
  console.table(users);
  console.table(thoughts);
  console.log('All data seeded! 🌱');
  process.exit(0);
};

seedDatabase().catch(console.error);
