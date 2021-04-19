import { BowlingGame } from "../src/bowling";

describe("Bowling score system", () => {

  let bowlingGame: BowlingGame;

  beforeEach(() => {
    bowlingGame = new BowlingGame();
  });

  it("should return simple roll score", () => {
    bowlingGame.roll(4);
    bowlingGame.roll(4);
    expect(bowlingGame.score()).toEqual(8);
  });

  it("should strike roll score", () => {
    bowlingGame.roll(4);
    bowlingGame.roll(6);
    bowlingGame.roll(5);
    expect(bowlingGame.score()).toEqual(20);
  });

  it("should spare roll score", () => {
    bowlingGame.roll(10);
    bowlingGame.roll(5);
    bowlingGame.roll(4);
    expect(bowlingGame.score()).toEqual(28);
  });

  it("should return perfect game score", () => {
    bowlingGame.roll(10);
    bowlingGame.roll(10);
    bowlingGame.roll(10);
    bowlingGame.roll(10);
    bowlingGame.roll(10);
    bowlingGame.roll(10);
    bowlingGame.roll(10);
    bowlingGame.roll(10);
    bowlingGame.roll(10);
    bowlingGame.roll(10);
    bowlingGame.roll(10);
    bowlingGame.roll(10);
    expect(bowlingGame.score()).toEqual(300);
  });
});
