// numeric enum
enum Direction {
  Up,
  Down,
  Left,
  Right
}
// console.log(Direction);
// console.log(Direction.Up);
// console.log(Direction['Up']);

// string enum
enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}
// console.log(Direction2);
// console.log(Direction2.Up);
// console.log(Direction2['Up']);

// hetergenous enum
enum Direction3 {
  Up = 'UP',
  Down = 1,
  Left = 'LEFT',
  Right = 2
}