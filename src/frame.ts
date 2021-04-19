export class Frame {

  isLast = false;
  rolls: number[] = [];

  constructor(isLast = false) {
    this.isLast = isLast;
  }

  get isComplete(): boolean {
    if (this.isLast) {
      return this.rolls.length == (this.isStrike || this.isSpare ? 3 : 2);
    }

    return this.isStrike || this.rolls.length == 2;
  }

  get isSpare(): boolean {
    return this.rolls[0] + this.rolls[1] === 10;
  }

  get isStrike(): boolean {
    return this.rolls[0] === 10;
  }

  get bonusSpare(): number {
    return this.rolls[0];
  }

  get bonusStrike(): number {
    return (this.rolls[0] ?? 0) + (this.rolls[1] ?? 0)
  }

  get total(): number {
    return this.rolls.reduce((p, c) => {
      const sum = p + c;
      return sum;
    }, 0);
  }

  roll(noOfPins: number): void {
    this.rolls.push(noOfPins);
  }
}
