const assert = require("assert");
const Decorator = require("../decorator.js");
const Paint = require("../paint.js");
const Room = require("../room.js");

describe("Decorator", function () {

  let decorator;

  beforeEach(function () {
    decorator = new Decorator();
    room1 = new Room (14);
    room2 = new Room (12);
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

  it("Has enough paint to cover the room:", function () {
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    assert.strictEqual(decorator.enoughPaint(room2), true );
  });

  it("Doesn't have enough paint to cover the room:", function () {
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);
    assert.strictEqual(decorator.enoughPaint(room1), false );
  });

  // it("Can paint room if enough paint:", function () {
  //   decorator.addPaint(paint1);
  //   decorator.addPaint(paint2);
  //   decorator.paintRoom(room2);
  //   console.log("room.painted:", room2.painted);
  //   assert.strictEqual(room2.painted, true);
  // });

});
