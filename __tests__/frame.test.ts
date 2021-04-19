import { Frame } from "../src/frame";

describe("Normal Frame", () => {
  let frame: Frame;

  beforeEach(() => {
    frame = new Frame();
  });

  it("should be a normal frame", () => {
    frame.roll(4);
    frame.roll(4);
    expect(frame.isComplete).toBeTruthy();
    expect(frame.isSpare).toBeFalsy();
    expect(frame.isStrike).toBeFalsy();
    expect(frame.total).toEqual(8);
    expect(frame.bonusSpare).toEqual(4);
    expect(frame.bonusStrike).toEqual(8);
  });

  it("should be a spare frame", () => {
    frame.roll(6);
    frame.roll(4);
    expect(frame.isComplete).toBeTruthy();
    expect(frame.isSpare).toBeTruthy();
    expect(frame.isStrike).toBeFalsy();
    expect(frame.total).toEqual(10);
    expect(frame.bonusSpare).toEqual(6);
    expect(frame.bonusStrike).toEqual(10);
  });

  it("should be a strike frame", () => {
    frame.roll(10);
    expect(frame.isComplete).toBeTruthy();
    expect(frame.isSpare).toBeFalsy();
    expect(frame.isStrike).toBeTruthy();
    expect(frame.total).toEqual(10);
    expect(frame.bonusSpare).toEqual(10);
    expect(frame.bonusStrike).toEqual(10);
  });
});

describe("Last Frame", () => {
  let frame: Frame;

  beforeEach(() => {
    frame = new Frame(true);
  });


  it("should be a last frame", () => {
    frame.roll(3);
    frame.roll(4);
    expect(frame.isComplete).toBeTruthy();
    expect(frame.isSpare).toBeFalsy();
    expect(frame.isStrike).toBeFalsy();
    expect(frame.total).toEqual(7);
    expect(frame.bonusSpare).toEqual(3);
    expect(frame.bonusStrike).toEqual(7);
  });

  it("should be a last spare frame", () => {
    frame.roll(6);
    frame.roll(4);
    expect(frame.isComplete).toBeFalsy();
    expect(frame.isSpare).toBeTruthy();
    expect(frame.isStrike).toBeFalsy();
    expect(frame.total).toEqual(10);
    frame.roll(4);
    expect(frame.isComplete).toBeTruthy();
    expect(frame.total).toEqual(14);
    expect(frame.bonusSpare).toEqual(6);
    expect(frame.bonusStrike).toEqual(10);
  });

  it("should be a last strike frame", () => {
    frame.roll(10);
    expect(frame.isComplete).toBeFalsy();
    expect(frame.isSpare).toBeFalsy();
    expect(frame.isStrike).toBeTruthy();
    frame.roll(6);
    expect(frame.total).toEqual(16);
    expect(frame.bonusSpare).toEqual(10);
    expect(frame.bonusStrike).toEqual(16);
  });

  it("should be a perfect last frame", () => {
    frame.roll(10);
    expect(frame.isComplete).toBeFalsy();
    expect(frame.isSpare).toBeFalsy();
    expect(frame.isStrike).toBeTruthy();
    frame.roll(10);
    expect(frame.isComplete).toBeFalsy();
    frame.roll(10);
    expect(frame.total).toEqual(30);
    expect(frame.bonusSpare).toEqual(10);
    expect(frame.bonusStrike).toEqual(20);
  });
});


