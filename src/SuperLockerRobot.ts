import { Bag } from './Bag';
import { LLocker } from './LLocker';

export class SuperLockerRobot {
  private lLocker: LLocker;

  constructor() {
    this.lLocker = new LLocker(1);
  }

  public storeBag(bag: Bag) {
    return this.lLocker.storeBag(bag);
  }
}
