const names = [
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkarem',
  'Smith',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
];

const thoughtMessages = [
  'This is a great day!',
  "I'm learning something new.",
  'Just had an interesting thought...',
  "I'm feeling great!",
  'I like this app.',
  "I'm excited to learn more!",
  'I like web development.',
  "I'm learning React.",
  "I'm learning Node.js.",
  'I think MongoDB is cool.',
  'Just to need learn more about Compass and Atlas.',
];

const reactions = [
  '😀',
  '😂',
  '😆',
  '😊',
  '😍',
  '😎',
  '🤓',
  '🥳',
  '🤩',
  '🤯',
  'What is this?',
  '🤔',
  "I don't get it.",
  'Maybe I should try again.',
  'Oh, now I get it!',
  'Now I understand.',
  'Not sure what to think.',
];

// Function to get a random item from an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Function to get a random name
const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate a random thought
const getRandomThought = () => ({
  message: getRandomArrItem(thoughtMessages),
  createdAt: new Date(),
  // Note: userId and username will be assigned in the seed script
});

// Function to generate a random reaction
const getRandomReaction = () => ({
  text: getRandomArrItem(reactions), // Changed from reactionBody to text to match your schema
  // Note: username will be assigned in the seed script
  createdAt: new Date(),
});

// Export the functions and data
module.exports = {
  getRandomName,
  getRandomArrItem,
  getRandomThought,
  getRandomReaction,
  // No need to export the arrays if they are only used in this file
};
