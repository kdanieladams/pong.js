# Pong.js
### by K. Daniel Adams

This is pong in typescript.  There is a crude AI implemented at the moment, which I will likely revise later.  The right-side paddle is controlled with the up-arrow and down-arrow.  Press spacebar to start the game.  I did not reference any other projects or guides to get this far, although I may need a reference for the finer points of pong (e.g. angular trajectory from a moving paddle, an AI which offers a decent challenge instead of just following the ball perfectly, drawing the score using squares so it  <a href="https://en.wikipedia.org/wiki/Pong" target="_blank">looks like it did on the old arcade cabinet</a>, etc.).

## Usage
1. Clone the project.
```
> git clone git@github.com:kdanieladams/pong.js.git
> cd ./pong.js
```
2. Install project dependencies (Typescript and Webpack).
```
> npm install
```
3. Build and run the project.
```
> npm run build && npm start
```
4. Visit the appropriate url in the browser (defaults to http://localhost:3000).
