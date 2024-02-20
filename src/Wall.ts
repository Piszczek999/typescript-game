import { BoxCollider } from "./BoxCollider.js";
import { GameObject } from "./GameObject.js";
import { Renderer } from "./Renderer.js";

export class Wall extends GameObject {
  constructor(x: number, y: number, width: number, height: number) {
    super(x, y);
    this.renderer = new Renderer(this, width, height);
    this.collider = new BoxCollider(this, width, height);
  }

  public update() {
    this.renderer.render();
  }
}
