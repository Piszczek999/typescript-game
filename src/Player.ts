import { GameObject } from "./GameObject.js";
import { movement } from "./Movement.js";
import { Renderer } from "./Renderer.js";

export class Player extends GameObject {
  private renderer = new Renderer(this, 20, 20);

  constructor(x: number, y: number) {
    super(x, y);
  }

  public update() {
    super.update();
    this.renderer.render();
    this.move(movement.normalized);
  }
}
