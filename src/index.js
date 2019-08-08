import Paddle from "./paddle";
import InputHandler from "./input";
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
ctx.clearRect(0, 0, 800, 600); //supaya ngerender ulang ketika ada yang berubah
let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let lastTime = 0;
new InputHandler(paddle);
function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, 800, 600);
  paddle.update(deltaTime);
  paddle.draw(ctx);
  requestAnimationFrame(gameLoop);
}

gameLoop();
// ctx.fillStyle = "#f00";
// ctx.fillRect(20, 20, 100, 100);

// ctx.fillStyle = "#00f";
// ctx.fillRect(370, 200, 50, 50);
