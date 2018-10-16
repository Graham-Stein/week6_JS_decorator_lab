const assert = require("assert");
const Decorator = require("../decorator.js");
const Paint = require("../paint.js");

describe("Decorator", function () {

  let decorator;

  beforeEach(function () {
    decorator = new Decorator();
    paint1 = new Paint(7);
    paint2 = new Paint(6);
  });

  it("Should start with empty paint stock:", function () {
    assert.deepStrictEqual(decorator.stock, []);
  });

  it("Can add paint to stock:", function () {
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    assert.deepStrictEqual(decorator.stock, [paint1, paint2]);
  });

  it("Can get total volume of paint in stock:", function () {
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    let total = decorator.totalPaint();
    assert.deepStrictEqual(total, 13);
  });

});
