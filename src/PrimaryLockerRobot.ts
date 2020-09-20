import _ from 'lodash';
import { Bag } from './Bag';
import { PROMPT_MESSAGE_INVALID_TICKET, PROMPT_MESSAGE_LOCKER_IS_FULL } from './constant/locker';
import { MLocker } from './MLocker';
import { Ticket } from './Ticket';
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

    return PROMPT_MESSAGE_LOCKER_IS_FULL;
  }

  public takeBag(ticket: Ticket) {
    const count = this.getMLockerCount();

    for (let i = 0; i < count; i += 1) {
      const currentLocker = this.mLockerList[i];

      if (currentLocker.bagIsExists(ticket.getTicketNo())) {
        return currentLocker.takeBag(ticket);
      }
    }

    return PROMPT_MESSAGE_INVALID_TICKET;
  }
}
