import { GameObject } from "./GameObject.js";
import { movement } from "./Movement.js";
import { Player } from "./Player.js";
import { Vector2 } from "./Vector2.js";
import { Wall } from "./Wall.js";

const canvas = document.querySelector("canvas");
export const ctx = canvas.getContext("2d");

const scoreEl = document.querySelector("#scoreEl");

canvas.width = innerWidth;
canvas.height = innerHeight;

const objectsList: GameObject[] = [];

const player = new Player(100, 100);
objectsList.push(player, new Wall(300, 200, 100, 20));

let animationId: number;

function animate() {
  animationId = requestAnimationFrame(animate);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  scoreEl.innerHTML = `(${player.position.x.toFixed(
    0
  )}, ${player.position.y.toFixed(0)})`;
  objectsList.forEach((obj) => obj.update());
}

animate();
