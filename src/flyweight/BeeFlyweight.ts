type Pos = {
  x: Number;
  y: Number;
};

class Bee {
  public x: Number;
  public y: Number;

  constructor(position: Pos) {
    this.x = position.x;
    this.y = position.y;
  }
}

class BeeFlyweight {
  private pool: any = {};

  public getBee(position: Pos) {
    const found: Bee | null = this.pool[`${position.x}-${position.y}`];

    if (found) {
      return found;
    }

    const bee: Bee = new Bee(position);
    this.pool[`${position.x}-${position.y}`] = bee;
    return bee;
  }
}

export { Bee, BeeFlyweight };
