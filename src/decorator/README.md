# Decorator

- [Volver al índice](../../README.md)

El patrón Decorator responde a la necesidad de añadir dinámicamente funcionalidad a un Objeto. Esto nos permite no tener que crear sucesivas clases que hereden de la primera incorporando la nueva funcionalidad, sino otras que la implementan y se asocian a la primera.

```typescript
/////////////////////////////////

function log(
  target: Object,
  propertyName: string,
  propertyDesciptor: PropertyDescriptor
) {
     propertyDesciptor.value = function (...args: any[]) {
        console.log(`Someone call ${propertyName}`);
     }

}

/////////////////////////////////

class Counter {
  current = 0;

  constructor(startValue: number) {
    this.current = startValue;
  }

  @log
  increment() {
    this.current++;
  }

  @log
  decrement() {
    this.current--;
  }
}

const counter = new Counter(0);
counter.increment();
counter.decrement();
counter.increment();

/////////////////////////////////
```