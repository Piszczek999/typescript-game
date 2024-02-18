import { Vector2 } from "./Vector2.js";
import { ctx } from "./index.js";

export class GameObject {
  public position: Vector2;

  constructor(x: number, y: number) {
    this.position = new Vector2(x, y);
  }

  protected draw() {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(this.position.x, this.position.y, 10, 10);
  }

  public update() {}

  public move(vector: Vector2) {
    this.position.add(vector);
  }
}
