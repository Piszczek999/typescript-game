import { GameObject } from "./GameObject.js";
import { Renderer } from "./Renderer.js";
import { Vector2 } from "./Vector2.js";
import { ctx } from "./index.js";

export class Wall extends GameObject {
  private width: number;
  private height: number;
  private renderer: Renderer;

  constructor(x: number, y: number, width: number, height: number) {
    super(x, y);
    this.width = width;
    this.height = height;
    this.renderer = new Renderer(this, this.width, this.height);
  }

  public update() {
    super.update();
    this.renderer.render();
  }
}
