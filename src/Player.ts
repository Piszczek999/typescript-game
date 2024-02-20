import { BoxCollider } from "./BoxCollider.js";
import { GameObject } from "./GameObject.js";
import { movement } from "./Movement.js";
import { Renderer } from "./Renderer.js";
import { Vector2 } from "./Vector2.js";

export class Player extends GameObject {
  private speed = 2;
  constructor(x: number, y: number) {
    super(x, y);
    this.renderer = new Renderer(this, 20, 20);
    this.collider = new BoxCollider(this, 20, 20);
  }

  public update() {
    this.renderer.render();
    this.move(Vector2.multiply(movement.normalized, this.speed));
  }
}
