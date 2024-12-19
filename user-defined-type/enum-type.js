// numeric enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// console.log(Direction);
// console.log(Direction.Up);
// console.log(Direction['Up']);
// string enum
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
// console.log(Direction2);
// console.log(Direction2.Up);
// console.log(Direction2['Up']);
// hetergenous enum
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "UP";
    Direction3[Direction3["Down"] = 1] = "Down";
    Direction3["Left"] = "LEFT";
    Direction3[Direction3["Right"] = 2] = "Right";
})(Direction3 || (Direction3 = {}));
