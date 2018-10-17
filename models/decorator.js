const Decorator = function () {
  this.stock = [];
};

Decorator.prototype.addPaint = function (paint) {
  this.stock.push(paint);
};

Decorator.prototype.totalPaint = function () {
  count = 0
  for (paint of this.stock) {
    count += paint.volume;
  };
  return count;
};

Decorator.prototype.enoughPaint = function (room) {
  if (room.area <= this.totalPaint()) {
    return true;
  } else {
    return false;
  };
};

Decorator.prototype.paintRoom = function (room) {
  console.log("room:", room);
  // console.log("room2.painted:", room2.painted);
  // console.log("room.painted:", room.painted);
  if (this.enoughPaint(room) === true) {
    room.painted = true;
    console.log("actual room:", room);
    // and remove the paint
  } else {
    room.painted = false;
  };
  // console.log("room.painted: after", room2.painted);
};

module.exports = Decorator;
