// Time.js
// Добавьте в класс Time статический метод fromString(), который позволяет создавать инстансы Time на основе времени переданного строкой формата часы:минуты.
//    
// Add a static fromString() method to the Time class, which allows you to create Time instances based on the time passed in the hours:minutes format string.

class Time {
    static fromString(time) {
        const [h, m] = time.split(':');
        return new Time(h, m)
    }

    constructor(hours, minutes) {
        this.minutes = minutes;
        this.hours = hours;
    }

    toString() {
        return `${this.hours}:${this.minutes}`;
    }
}
