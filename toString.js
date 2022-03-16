// Point.js
// Реализуйте метод toString(), который преобразует точку к строке 

// Implement a toString() method that converts a point to a string

function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.getX = function getX() {
    return this.x;
};

Point.prototype.getY = function getY() {
    return this.y;
};

Point.prototype.toString = function () {
    return `(${this.getX()}, ${this.getY()})`
}
const point1 = new Point(1, 10);

function Segment(beginPoint, endPoint) {
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
}

// Segment.js
// Реализуйте метод toString(), который преобразует отрезок к строке
//
// Implement the toString() method, which converts a segment to a string

Segment.prototype.getBeginPoint = function getBeginPoint() {
    return this.beginPoint;
};

Segment.prototype.getEndPoint = function getEndPoint() {
    return this.endPoint;
};

Segment.prototype.toString = function() {
    return `[${this.getBeginPoint().toString()}, ${this.getEndPoint().toString()}]`
}