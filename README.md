[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Contact App

## Description

Contact App is a social network API that allows users to create, update, and manage their thougths. It features a robust backend built with Node.js, Express, and MongoDB, designed to handle API requests for managing user data and their thoughts and reactions to the thoughts.

## 📑 Table of Contents

- [Description](#description)
- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [Credits](#-credits)
- [License](#license)

## ✨ Features

- User creation, update, and deletion.
- Ability to add and manage user thoughts.
- Option to add and remove friends from a user's friend list.
- Ability to create and delete reactions to thoughts.
- Responsive and intuitive API endpoints.
- `BONUS`Additional feature: User deletion and associated thoughts with that user.

## 🔧 Installation

To install the Contact App on your local machine:

1. Clone the repository to your local machine using `git clone`.
2. Navigate to the cloned directory and run `npm install` to install all required dependencies.
3. Ensure MongoDB is installed and running on your local machine.
4. Seed the database `npm run seed`.
5. Start the application by running `npm start`.

## 🖥 Usage

To use Contact App:

1. Make API requests to the provided endpoints to manage users, thoughts, friends, and reactions.
2. Use tools like Postman or Insomnia for API testing and interaction.
3. Deploy the application to Heroku for live usage (see deployment section).

## 🔗 Links

- This is the link of my [GitHub repository](https://github.com/Kirill777-web/contactApp)
- Link to the Heroku [Heroku]()
- The following video of the app: technical acceptance/start server. GET routes all Users and all Thoughts, single User, single Thought ![contactApp](https://drive.google.com/file/d/1SLS5l3uUOhrukQ_2NvGL4oSwtEaxiO_s/view)
- The following video of the app: POST, PUT, and DELETE routes for users and thoughts ![contactApp](https://drive.google.com/file/d/1SWpy-Ex8Xe1rbepjrezL4lQFLcvKH7x3/view)
- The following video of the app: POST and DELETE routes for a user’s friend list ![contactApp](https://drive.google.com/file/d/1LWrhjdHb22VZ9YHfgLWV-qiSmoINCtuW/view)
- The following video of the app: POST and DELETE routes for reactions ![contactApp](https://drive.google.com/file/d/1sxgoos23GmWuXB93GysZsHEWqNkO_fqN/view)
- The following `BONUS`video of the app: deletes a user's associated thoughts when the user is deleted ![contactApp](https://drive.google.com/file/d/1cG9TcbdyTe8ALRy3k0Z0rIoinuNigKPt/view)

## 🙏 Credits

Developed by [Kirill_Lazutin]

- Node.js
- Express
- MongoDB
- Mongoose
- NPM packages

## 🚀 Deployment

To deploy on Heroku:

1. Create a Heroku account and install the Heroku CLI.
2. Log in to Heroku through the CLI and create a new Heroku app.
3. Link your GitHub repository to the Heroku app.
4. Set up your MongoDB database on a cloud platform like MongoDB Atlas and link it to your Heroku app.
5. Deploy the app by pushing your code to the linked GitHub repository or directly through Heroku CLI.

## License

Copyright (c) 2023 Kirill Lazutin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

TODO: Create video of application all in LINKS!
TODO: Upload to the insomnia!
