import { GameObject } from "./GameObject.js";
import { ctx } from "./index.js";

export class Renderer {
  private gameObject: GameObject;
  private width: number;
  private height: number;
  private offsetX: number = 0;
  private offsetY: number = 0;

  constructor(
    gameObject: GameObject,
    width: number,
    height: number,
    offsetX = 0,
    offsetY = 0
  ) {
    this.gameObject = gameObject;
    this.width = width;
    this.height = height;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }

  render() {
    if (!ctx || !this.gameObject) return;

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(
      this.gameObject.position.x + this.offsetX - this.width / 2,
      this.gameObject.position.y + this.offsetY - this.height / 2,
      this.width,
      this.height
    );
  }
}
