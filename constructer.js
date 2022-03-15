function getX() {
    return this.x;
};

function getY() {
    return this.y;
};

function Point (x, y) {
    this.x = x;
    this.y = y;
    this.getX = getX.bind(this);
    this.getY = getY.bind(this);
}

function getBeginPoint() {
    return this.beginPoint;
};

function getEndPoint() {
    return this.endPoint;
};

function Segment (beginPoint, endPoint) {
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
    this.getBeginPoint = getBeginPoint.bind(this);
    this.getEndPoint = getEndPoint.bind(this);
}

const reverse = (segment) => {
    const newBeginPoint = new Point(segment.endPoint.getX(), segment.endPoint.getY())
    const newEndPoint = new Point(segment.beginPoint.getX(), segment.beginPoint.getY())
   const newSegment = new Segment(newBeginPoint, newEndPoint);
   return newSegment;
}

const beginPoint = new Point(1, 10);
const endPoint = new Point(11, -3);

const segment = new Segment(beginPoint, endPoint);
const reversedSegment = reverse(segment);

console.log(
    segment.beginPoint.x,
    segment.beginPoint.y,
    segment.endPoint.x,
    segment.endPoint.y,
);// => 1 10 11 -3

console.log(
    reversedSegment.beginPoint.x,
    reversedSegment.beginPoint.y,
    reversedSegment.endPoint.x,
    reversedSegment.endPoint.y,
); // => 11 -3 1 10
