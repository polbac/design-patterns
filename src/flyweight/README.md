# Flyweight

- [Volver al índice](../../README.md)

El patrón Flyweight (u objeto ligero) sirve para eliminar o reducir la redundancia cuando tenemos gran cantidad de objetos que contienen información idéntica, además de lograr un equilibrio entre flexibilidad y rendimiento (performance).

```typescript
/////////////////////////////////

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

/////////////////////////////////

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

/////////////////////////////////
```