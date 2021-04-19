export class Frame {

  constructor(isLast = false) {
  }

  get isComplete(): boolean {
    return false;
  }

  get isSpare(): boolean {
    return false;
  }

  get isStrike(): boolean {
    return false;
  }

  get bonusSpare(): number {
    return 0;
  }

  get bonusStrike(): number {
    return 0;
  }

  get total(): number {
    return 0;
  }

  roll(noOfPins: number): void {

  }
}
