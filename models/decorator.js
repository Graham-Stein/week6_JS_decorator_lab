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

module.exports = Decorator;
