import { Bag } from './Bag';
import { SLocker } from './SLocker';
import { Ticket } from './Ticket';

const DEFAULT_LOCKER_NO = 1;

export class LockerRobotManager {
  private sLocker: SLocker;

  constructor() {
    this.sLocker = new SLocker(DEFAULT_LOCKER_NO);
  }

  public storeBag(bag: Bag) {
    return this.sLocker.storeBag(bag);
  }

  public takeBag(ticket: Ticket) {
    return this.sLocker.takeBag(ticket);
  }
}
