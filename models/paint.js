const Paint = function (volume) {
  this.volume = volume;
};

Paint.prototype.available = function () {
  if (this.volume === 0) {
    return false;
  } else {
    return true;
  };
};

Paint.prototype.empty = function () {
  this.volume = 0;
};

module.exports = Paint;
