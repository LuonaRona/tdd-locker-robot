import { Bag } from './Bag';
import { MLocker } from './MLocker';

export class PrimaryLockerRobot {
  private mLockerList: MLocker[] = [];

  constructor(mLockerCount: number) {
    this.genMLocker(mLockerCount);
  }

  private genMLocker(count: number) {
    for (let i = 0; i < count; i += 1) {
      this.mLockerList.push(new MLocker(i + 1));
    }
  }

  public getMLockerCount() {
    return this.mLockerList.length;
  }

  public storeBag(bag: Bag) {
    const count = this.getMLockerCount();

    for (let i = 0; i < count; i += 1) {
      const currentLocker = this.mLockerList[i];

      if (!currentLocker.isFull()) {
        return currentLocker.storeBag(bag);
      }
    }
  }
}
