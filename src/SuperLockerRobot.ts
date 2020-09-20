import _ from 'lodash';
import { Bag } from './Bag';
import { LLocker } from './LLocker';

export class SuperLockerRobot {
  private lLockerList: LLocker[] = [];

  constructor(count: number) {
    this.genLLocker(count);
  }

  private genLLocker(count: number) {
    for (let i = 0; i < count; i += 1) {
      this.lLockerList.push(new LLocker(i + 1));
    }
  }

  public getLLockerCount() {
    return this.lLockerList.length;
  }

  public storeBag(bag: Bag) {
    const highVacancyRate = _.maxBy(this.lLockerList, (locker) => {
      return locker.getVacancyRate();
    });

    return highVacancyRate?.storeBag(bag);
  }
}
