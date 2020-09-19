import { Bag } from './Bag';
import { SLocker } from './SLocker';

export class LockerRobot {
  sLockerList: SLocker[] = [];

  constructor(sLockerCount: number) {
    this.genSLocker(sLockerCount);
  }

  private genSLocker(count: number) {
    for (let i = 0; i < count; i += 1) {
      this.sLockerList.push(new SLocker());
    }
  }

  storeBag(bag: Bag) {
    const sLockerCount = this.sLockerList.length;

    for (let i = 0; i < sLockerCount; i += 1) {
      const currentLocker = this.sLockerList[i];

      if (currentLocker.getCurrentRemainingCapacity() > 0) {
        return currentLocker.storeBag(bag);
      }
    }
  }
}
