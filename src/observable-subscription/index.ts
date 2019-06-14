class Subscription {
  observable: Observable;
  fn: Function;

  constructor(observable: Observable, fn: Function) {
    this.observable = observable;
    this.fn = fn;
  }

  unsubscribe() {
    this.observable.observers = this.observable.observers.filter(
      subscriber => subscriber !== this.fn
    );
  }
}

class Observable {
  observers: Array<any> = [];

  subscribe(f: Function) {
    this.observers.push(f);
    return new Subscription(this, f);
  }

  next(value: any) {
    this.observers.forEach(observer => observer(value));
  }
}

class Robot extends Observable {
  altitude = 0;

  wing() {
    this.altitude++;
    this.next(this.altitude)
  }
}

const robot: Robot = new Robot();
const subscription: Subscription = robot.subscribe((value: any) => console.log(value));

robot.wing();
robot.wing();
robot.wing();
robot.wing();

subscription.unsubscribe()

robot.wing();