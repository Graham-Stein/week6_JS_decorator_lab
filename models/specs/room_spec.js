const assert = require("assert");
const Room = require("../room.js");

describe("Room", function () {

  let room;

  beforeEach(function () {
    room = new Room(5);
  });

  it("Should have integer as an area:", function () {
    assert.strictEqual(room.area, 5);
  });

  it("Should start not painted:", function () {
    assert.strictEqual(room.painted, false);
  });

  it("Can be painted:", function () {
    room.paint();
    assert.strictEqual(room.painted, true);
  })

});
