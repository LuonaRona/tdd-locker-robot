import { Bag } from './Bag';
import { PROMPT_MESSAGE_LOCKER_IS_FULL } from './constant/locker';
import { SLocker } from './SLocker';

export class LockerRobot {
  private sLockerList: SLocker[] = [];

  constructor(sLockerCount: number) {
    this.genSLocker(sLockerCount);
  }

  private genSLocker(count: number) {
    for (let i = 0; i < count; i += 1) {
      this.sLockerList.push(new SLocker());
    }
  }

  private getSLockerCount() {
    return this.sLockerList.length;
  }

  private storeInSLocker(bag: Bag) {
    const count = this.getSLockerCount();

    for (let i = 0; i < count; i += 1) {
      const currentLocker = this.sLockerList[i];

      if (!currentLocker.isFull()) {
        return currentLocker.storeBag(bag);
      }
    }

    return PROMPT_MESSAGE_LOCKER_IS_FULL;
  }

  public storeBag(bag: Bag) {
    return this.storeInSLocker(bag);
  }
}
