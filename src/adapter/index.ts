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