# Collab Block App

Collab Block is an interactive web application that allows anonymous users to collaborate in a unique and creative way. It generates random words for users to draw on a shared canvas, enabling real-time communication and collaboration through the use of Socket.io. The canvas functionality is powered by the HTML5 Canvas API, providing an intuitive drawing experience for all participants. 
( *This project is still a work in progress. In case you were wondering, my commit history isn't looking good due starting on a new repo and referencing my previous repo, collablock. I am in the middle of fixing a bug I've been facing relating to not being able to push the rest of my work along with their commits, so this is the bandaid so to speak.* )

## Features

- **Word Generation**: When a user goes to the canvas page, a random word is generated and assigned to them. This word serves as the theme for their drawing on the shared canvas. The word generation is achieved through an external API provided by [random-word-form.repl.co](https://random-word-form.repl.co/).

- **Canvas Drawing**: Users can draw freely on the canvas by HTML5 Canvas API. The canvas currently only provides a black pen for drawing and a button to clear canvas.

- **Real-Time Communication**: Collab Block implements real-time communication using Socket.io. This means that whenever a user draws on the canvas, the changes are instantly reflected on the screens of all other connected users, creating a seamless collaborative experience.

- **Anonymous Participation**: The app allows users to join without requiring any sign-up or login process.

- In the near future, more functionality will be added and more testing is needed to make sure that the changes are actually being reflected on both screens of the users.


## How to Use

1. Clone the repository to your local machine, on the desktop then run following command.

    * git clone https://github.com/anajmabdi/collab-block
    * cd collablock

2. Install the required dependencies by running '*npm install*'

3. Start front and back servers
    * Front: npm run start 
    * Back: node index.js

3. Access the application in your web browser.
    Open your web browser and go to http://localhost:3000 to access the Collablock app. Share the URL with others to invite them to join the collaborative drawing session.

## Technologies Used
- Node.js: The server-side environment for running the Collab Block app.
- Express.js: A web framework for handling HTTP requests and routes.
- Socket.io: Enables real-time, bidirectional communication between clients and the server.
- HTML5 Canvas API: The foundation for the collaborative drawing canvas, providing tools for rendering graphics on the web page.

## Bugs
- None

## License

MIT License

Copyright (c) [2023] [Najma Abdi]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: