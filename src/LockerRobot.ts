import { Bag } from './Bag';
import {
  L_LOCKER_SIZE,
  M_LOCKER_SIZE,
  PROMPT_MESSAGE_INVALID_TICKET,
  PROMPT_MESSAGE_LOCKER_IS_FULL,
  PROMPT_MESSAGE_MISMATCH_TICKET,
  S_LOCKER_SIZE,
} from './constant/locker';
import { SLocker } from './SLocker';
import { Ticket } from './Ticket';
import { PrimaryLockerRobot } from './PrimaryLockerRobot';
import { SuperLockerRobot } from './SuperLockerRobot';

export class LockerRobot {
  private sLockerList: SLocker[] = [];
  private primaryLockerRobot: PrimaryLockerRobot;
  private superLockerRobot: SuperLockerRobot;

  constructor(sLockerCount: number, mLockerCount: number, lLockerCount: number) {
    this.genSLocker(sLockerCount);
    this.primaryLockerRobot = new PrimaryLockerRobot(mLockerCount);
    this.superLockerRobot = new SuperLockerRobot(lLockerCount);
  }

  private genSLocker(count: number) {
    for (let i = 0; i < count; i += 1) {
      this.sLockerList.push(new SLocker(i + 1));
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
    if (ticket.getLockerSize() !== S_LOCKER_SIZE) {
      return PROMPT_MESSAGE_MISMATCH_TICKET;
    }

    const count = this.getSLockerCount();

    for (let i = 0; i < count; i += 1) {
      const currentLocker = this.sLockerList[i];

      if (currentLocker.bagIsExists(ticket.getTicketNo())) {
        return currentLocker.takeBag(ticket);
      }
    }

    return PROMPT_MESSAGE_INVALID_TICKET;
  }

  public storeBag(bag: Bag) {
    switch (bag.getSize()) {
      case S_LOCKER_SIZE:
        return this.storeInSLocker(bag);
      case M_LOCKER_SIZE:
        return this.primaryLockerRobot.storeBag(bag);
      case L_LOCKER_SIZE:
        return this.superLockerRobot.storeBag(bag);
    }
  }

  public takeSBag(ticket: Ticket) {
    return this.takeFromSLocker(ticket);
  }

  public takeMBag(ticket: Ticket) {
    return this.primaryLockerRobot.takeBag(ticket);
  }

  public takeLBag(ticket: Ticket) {
    return this.superLockerRobot.takeBag(ticket);
  }
}
