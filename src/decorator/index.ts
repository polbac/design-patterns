function log(
  target: Object,
  propertyName: string,
  propertyDesciptor: PropertyDescriptor
) {
     propertyDesciptor.value = function (...args: any[]) {
        console.log(`Someone call ${propertyName}`);
     }

}

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
counter.increment()
counter.decrement();
counter.increment()