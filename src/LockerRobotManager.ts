import { Bag } from './Bag';
import { SLocker } from './SLocker';

const DEFAULT_LOCKER_NO = 1;

export class LockerRobotManager {
  sLocker: SLocker;
  constructor() {
    this.sLocker = new SLocker(DEFAULT_LOCKER_NO);
  }

  storeBag(bag: Bag) {
    return this.sLocker.storeBag(bag);
  }
}
