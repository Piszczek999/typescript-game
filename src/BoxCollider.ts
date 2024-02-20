import { Collider } from "./Collider.js";
import { GameObject } from "./GameObject.js";

export class BoxCollider extends Collider {
  private width: number;
  private height: number;

  constructor(
    gameObject: GameObject,
    width: number,
    height: number,
    offsetX = 0,
    offsetY = 0
  ) {
    super(gameObject, offsetX, offsetY);
    this.width = width;
    this.height = height;
  }

  public checkCollision(other: Collider): boolean {
    if (other instanceof BoxCollider) {
      if (
        Math.abs(
          this.obj.position.x +
            this.offsetX -
            other.obj.position.x +
            other.offsetX
        ) <
          this.width / 2 + other.width / 2 &&
        Math.abs(
          this.obj.position.y +
            this.offsetY -
            other.obj.position.y +
            other.offsetY
        ) <
          this.height / 2 + other.height / 2
      )
        return true;
    }
    return false;
  }
}
