import { Vector2 } from "./Vector2.js";

export const movement = new Vector2(0, 0);

const keys = {};

document.addEventListener("keydown", (event) => {
  keys[event.code] = true;
  updateMovement();
});

document.addEventListener("keyup", (event) => {
  keys[event.code] = false;
  updateMovement();
});

export function updateMovement() {
  movement.set(0, 0);
  if (keys["KeyW"]) movement.y -= 1;
  if (keys["KeyA"]) movement.x -= 1;
  if (keys["KeyS"]) movement.y += 1;
  if (keys["KeyD"]) movement.x += 1;
}

// Optionally, you can call updateMovement() in your game loop or any update loop
// setInterval(updateMovement, 1000 / your_desired_updates_per_second);
