import { Collider } from "./Collider.js";
import { Renderer } from "./Renderer.js";
import { Vector2 } from "./Vector2.js";
import { objectsList } from "./index.js";

export abstract class GameObject {
  public position: Vector2;
  protected collider: Collider;
  protected renderer: Renderer;

  constructor(x: number, y: number) {
    this.position = new Vector2(x, y);
  }

  public abstract update(): void;

  public move(vector: Vector2) {
    const originalPos = new Vector2(this.position.x, this.position.y);
    this.position.add(vector);

    let hit = objectsList
      .filter((obj) => obj !== this)
      .some((obj) => this.collider.checkCollision(obj.collider));
    if (hit) {
      this.position.subtract(vector);
      this.position.x += vector.x;
      hit = objectsList
        .filter((obj) => obj !== this)
        .some((obj) => this.collider.checkCollision(obj.collider));
      if (hit) {
        this.position.x -= vector.x;
        this.position.y += vector.y;
        hit = objectsList
          .filter((obj) => obj !== this)
          .some((obj) => this.collider.checkCollision(obj.collider));
        if (hit) this.position = originalPos;
      }
    }
  }
}
