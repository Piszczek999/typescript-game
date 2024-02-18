import { Vector2 } from "./Vector2.js";

export const movement = new Vector2(0, 0);

document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "KeyW":
      movement.y = -1;
      break;
    case "KeyA":
      movement.x = -1;
      break;
    case "KeyS":
      movement.y = 1;
      break;
    case "KeyD":
      movement.x = 1;
      break;
  }
});

document.addEventListener("keyup", (event) => {
  switch (event.code) {
    case "KeyW":
      if (movement.y === -1) movement.y = 0;
      break;
    case "KeyA":
      if (movement.x === -1) movement.x = 0;
      break;
    case "KeyS":
      if (movement.y === 1) movement.y = 0;
      break;
    case "KeyD":
      if (movement.x === 1) movement.x = 0;
      break;
  }
});
