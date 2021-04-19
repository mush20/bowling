import { Frame } from "./frame";

/**
 * Bowling Game
 */
export class BowlingGame {
  frames: Frame[];

  constructor() {
    this.frames = [new Frame()];
  }

  private get currentFrame(): Frame {
    return this.frames[this.frames.length - 1];
  }

  /**
   * Strike: When all ten pins are knocked down with the first ball
   * a player is awarded ten points, plus a bonus of whatever is scored with the next two balls.
   * In this way, the points scored for the two balls after the strike are counted twice.
   * @param frameIndex
   */
  private calculateStrikeBonus(frameIndex: number): number {
    const nextFrame = this.frames[frameIndex + 1];
    const nextNextFrame = this.frames[frameIndex + 2];
    const isNextFrameStrike = nextFrame?.isStrike ?? false;
    const nextFrameBonus = (nextFrame?.bonusStrike ?? 0);
    const nextNextFrameBonus = nextNextFrame?.bonusSpare ?? 0;

    return nextFrameBonus + (isNextFrameStrike ? nextNextFrameBonus : 0);
  }

  roll(noOfPin: number): void {

    if(this.frames.length > 10) {
      return;
    }

    if (this.currentFrame.isComplete) {
      this.frames.push(new Frame(this.frames.length === 9));
    }

    this.currentFrame.roll(noOfPin);
  }

  score(): number {
    let score = 0;

    for (let frameIndex = 0; frameIndex < this.frames.length; frameIndex++) {
      const currentFrame = this.frames[frameIndex];
      const nextFrame = this.frames[frameIndex+1];

      score += currentFrame.total;

      if (currentFrame.isStrike) {
        score += this.calculateStrikeBonus(frameIndex);
      } else if (currentFrame.isSpare) {
        score += (nextFrame?.bonusSpare ?? 0);
      }
    }

    return score;
  }
}
