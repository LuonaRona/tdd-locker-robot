import { Bag } from './Bag';
import { PROMPT_MESSAGE_MISMATCH_TICKET, S_LOCKER_SIZE } from './constant/locker';
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

  public takeSBag(ticket: Ticket) {
    if (ticket.getLockerSize() === S_LOCKER_SIZE) {
      return this.sLocker.takeBag(ticket);
    }

    return PROMPT_MESSAGE_MISMATCH_TICKET;
  }
}
