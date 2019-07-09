# Adapter

- [Volver al índice](../../README.md)

El patrón adaptador se utiliza para transformar una interfaz en otra, de tal modo que una clase que no pueda utilizar la primera haga uso de ella a través de la segunda.

```
 ------------------     ---------        ---------
| NewClockAdapter  |   | OldClock | <> | NewClock |
 ------------------     ---------        ---------
```

De este modo un Adapter adapta una interfaz vieja a una nueva:

```typescript
/////////////////////////////////

enum OldClockOperation {
    INCREASE,
    DECREASE,
}

enum OldClockUnitType {
    SECOND,
    MINUTE,
    HOUR,
}

interface OldClock {
    date: Date
    operate(
        operation: OldClockOperation,
        unit: OldClockUnitType,
        value: Number,
    ): void
    getDate(): Date
}

/////////////////////////////////

interface NewClock {
    date: Date
    increaseSecond(seconds: Number): void
    decreaseSecond(seconds: Number): void

    increaseMinute(minute: Number): void
    decreaseMinute(minute: Number): void

    increaseHour(hour: Number): void
    decreaseHour(hours: Number): void

    getDate(): Date
}   

/////////////////////////////////

class NewClockAdapter implements NewClock {
    private oldClock: OldClock
    public date: Date

    constructor(oldClock: OldClock) {
        this.oldClock = oldClock
    }

    increaseSecond(seconds: Number) {
        this.oldClock.operate(OldClockOperation.INCREASE, OldClockUnitType.SECOND, seconds)
    }

    decreaseSecond(seconds: Number) {
        this.oldClock.operate(OldClockOperation.DECREASE, OldClockUnitType.SECOND, seconds)
    }

    increaseMinute(minutes: Number) {
        this.oldClock.operate(OldClockOperation.INCREASE, OldClockUnitType.MINUTE, minutes)
    }

    decreaseMinute(seconds: Number) {
        this.oldClock.operate(OldClockOperation.DECREASE, OldClockUnitType.MINUTE, seconds)
    }

    increaseHour(hours: Number) {
        this.oldClock.operate(OldClockOperation.INCREASE, OldClockUnitType.HOUR, hours)
    }

    decreaseHour(hours: Number) {
        this.oldClock.operate(OldClockOperation.DECREASE, OldClockUnitType.HOUR, hours)
    }

    getDate() {
        return this.oldClock.getDate()
    }
}

/////////////////////////////////
```