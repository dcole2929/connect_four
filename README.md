# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It uses no outside libraries or frameworks aside from react. 
The approach is pretty straightforwad. We bootstrap a 6x7 grid as an array to store the game state and then separately store state for current play and winner.
After each move we check the various win conditions and if there is no winner change the current player
On win we display the winner
We also have a new game button that resets all the current game state in order to boostrap a new game.

The biggest tradeoffs were in the lack of animations. It would be nice to see a game piece animate down from the bottom to it's final ultimate resting place but this
wasn't doable in the time alotted. A future iteration might use a library like d3 / framer to accomplish this, or simply use css transitions.

It would also be good to make this more fully multiplayer. This would involve some database to store game state or alternatively using sockets to connect two users

The last improvement would be building some Game AI to play against. This could be pretty simple either using a random placement or more intelligent strategy involving backtracking.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
