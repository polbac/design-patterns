// Singleton
/* import UniqueId from './singleton/unique-id'
console.log(UniqueId.getId())
setTimeout(() => console.log(UniqueId.getId()), 2000) */

// Flyweight
import { Bee, BeeFlyweight } from "./flyweight/BeeFlyweight";
const dateStart: Date = new Date();
const ITEMS = 9999;
for (let i = 0; i < ITEMS; i++) {
  /* const bee = new BeeFlyweight().getBee({
    x: Math.round(Math.random()),
    y: Math.round(Math.random())
  }); */
  const bee = new Bee({
    x: Math.round(Math.random()),
    y: Math.round(Math.random())
  });
}

const dateEnd = new Date();
console.log(dateEnd.getTime() - dateStart.getTime());
