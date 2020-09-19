import { Bag } from './Bag';
import { PROMPT_MESSAGE_LOCKER_IS_FULL } from './constant/locker';
import { SLocker } from './SLocker';
import { Ticket } from './Ticket';

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

  private takeFromSLocker(ticket: Ticket) {
    const count = this.getSLockerCount();

    for (let i = 0; i < count; i += 1) {
      const currentLocker = this.sLockerList[i];

      if (currentLocker.bagIsExists(ticket.getTicketNo())) {
        return currentLocker.takeBag(ticket);
      }
    }
  }

  public storeBag(bag: Bag) {
    return this.storeInSLocker(bag);
  }

  public takeBag(ticket: Ticket) {
    return this.takeFromSLocker(ticket);
  }
}
