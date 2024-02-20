export class Vector2 {
  static readonly up = new Vector2(0, -1);
  static readonly down = new Vector2(0, 1);
  static readonly right = new Vector2(1, 0);
  static readonly left = new Vector2(-1, 0);
  static readonly zero = new Vector2(0, 0);

  private _x: number;
  private _y: number;
  private _magnitude: number | null = null;
  private _normalized: Vector2 | null = null;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  get x(): number {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
    this.resetCachedValues();
  }

  get y(): number {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
    this.resetCachedValues();
  }

  get magnitude(): number {
    if (this._magnitude === null) {
      this._magnitude = Math.sqrt(this._x * this._x + this._y * this._y);
    }
    return this._magnitude;
  }

  get normalized(): Vector2 {
    if (this._normalized === null) {
      this._normalized =
        this.magnitude !== 0
          ? new Vector2(this._x / this.magnitude, this._y / this.magnitude)
          : new Vector2(0, 0);
    }
    return this._normalized;
  }

  public set(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public add(vector: Vector2): void {
    if (!vector) return;
    this._x += vector.x;
    this._y += vector.y;
    this.resetCachedValues();
  }

  public subtract(vector: Vector2): void {
    if (!vector) return;
    this._x -= vector.x;
    this._y -= vector.y;
    this.resetCachedValues();
  }

  public multiply(scalar: number | Vector2): void {
    if (typeof scalar === "number") {
      this._x *= scalar;
      this._y *= scalar;
    } else {
      this._x *= scalar.x;
      this._y *= scalar.x;
    }
    this.resetCachedValues();
  }

  public divide(scalar: number): void {
    if (scalar !== 0) {
      this._x /= scalar;
      this._y /= scalar;
      this.resetCachedValues();
    } else {
      throw new Error("Division by zero.");
    }
  }

  public normalize(): void {
    if (this.magnitude !== 0) {
      this._x /= this.magnitude;
      this._y /= this.magnitude;
      this._magnitude = 1; // After normalization, magnitude is always 1
      this._normalized = new Vector2(this._x, this._y); // Update normalized vector
    }
  }

  public distanceTo(other: Vector2): number {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  private resetCachedValues(): void {
    this._magnitude = null;
    this._normalized = null;
  }

  static add(v1: Vector2, v2: Vector2): Vector2 {
    if (!v1 || !v2) return new Vector2(0, 0);
    return new Vector2(v1.x + v2.x, v1.y + v2.y);
  }

  static subtract(v1: Vector2, v2: Vector2): Vector2 {
    if (!v1 || !v2) return new Vector2(0, 0);
    return new Vector2(v1.x - v2.x, v1.y - v2.y);
  }

  static multiply(arg1: Vector2, arg2: number | Vector2): Vector2 {
    if (!arg1) return new Vector2(0, 0);
    if (typeof arg2 === "number") {
      return new Vector2(arg1.x * arg2, arg1.y * arg2);
    } else {
      return new Vector2(arg1.x * arg2.x, arg1.y * arg2.y);
    }
  }

  static divide(vector: Vector2, scalar: number): Vector2 {
    if (!vector) return new Vector2(0, 0);
    if (scalar === 0) {
      throw new Error("Division by zero.");
    }
    return new Vector2(vector.x / scalar, vector.y / scalar);
  }
}
