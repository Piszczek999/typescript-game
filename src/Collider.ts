import { GameObject } from "./GameObject.js";

export abstract class Collider {
  protected obj: GameObject;
  protected offsetX: number = 0;
  protected offsetY: number = 0;

  constructor(gameObject: GameObject, offsetX = 0, offsetY = 0) {
    this.obj = gameObject;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }

  public abstract checkCollision(other: Collider): boolean;
}
