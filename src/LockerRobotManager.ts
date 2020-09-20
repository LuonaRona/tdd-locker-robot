import { Bag } from './Bag';
import { M_LOCKER_SIZE, PROMPT_MESSAGE_MISMATCH_TICKET, S_LOCKER_SIZE } from './constant/locker';
import { PrimaryLockerRobot } from './PrimaryLockerRobot';
import { SLocker } from './SLocker';
import { Ticket } from './Ticket';

const DEFAULT_LOCKER_NO = 1;
const DEFAULT_LOCKER_COUNT = 1;

export class LockerRobotManager {
  private sLocker: SLocker;
  private primaryLockerRobot: PrimaryLockerRobot;

  constructor() {
    this.sLocker = new SLocker(DEFAULT_LOCKER_NO);
    this.primaryLockerRobot = new PrimaryLockerRobot(DEFAULT_LOCKER_COUNT);
  }

  public storeBag(bag: Bag) {
    switch (bag.getSize()) {
      case S_LOCKER_SIZE:
        return this.sLocker.storeBag(bag);
      case M_LOCKER_SIZE:
        return this.primaryLockerRobot.storeBag(bag);
    }
  }

  public takeSBag(ticket: Ticket) {
    if (ticket.getLockerSize() === S_LOCKER_SIZE) {
      return this.sLocker.takeBag(ticket);
    }

    return PROMPT_MESSAGE_MISMATCH_TICKET;
  }
}
