const assert = require("assert");
const Paint = require("../paint.js");

describe("Paint", function () {

  let paint;

  beforeEach(function () {
    paint = new Paint(5);
  });

  it("Should have a number of litres:", function () {
    assert.strictEqual(paint.volume, 5);
  });

  it("Can be empty and checked:", function () {
    paint.volume = 0;
    assert.strictEqual(paint.available(), false);
  });

  it("Can be emptied:", function () {
    paint.empty();
    assert.strictEqual(paint.volume, 0);
    //assert.strictEqual(paint.available(), false);
  });

});
