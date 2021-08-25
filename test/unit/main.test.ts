import { assert } from "chai";
import { loop } from "../../src/main";
import { Game, Memory } from "./mock";
import { harvsterImpl } from "../../src/component/role/impl/harvsterImpl";
import { harvster } from "../../src/component/role/harvester";

describe("main", () => {
  before(() => {
    // runs before all test in this block
  });

  beforeEach(() => {
    // runs before each test in this block
    // @ts-ignore : allow adding Game to global
    global.Game = _.clone(Game);
    // @ts-ignore : allow adding Memory to global
    global.Memory = _.clone(Memory);
  });

  it("should export a loop function", () => {
    assert.isTrue(typeof loop === "function");
  });

  it("should return void when called with no context", () => {
    assert.isUndefined(loop());
  });
  it("should retuen true", () => {
    let o: harvster;
    o = new harvsterImpl();
    assert.isTrue(o.prepare(Game.creeps[0]));
  });
});
