import _ from 'lodash';
import { Bag } from './Bag';
import { PROMPT_MESSAGE_INVALID_TICKET, PROMPT_MESSAGE_LOCKER_IS_FULL } from './constant/locker';
import { LLocker } from './LLocker';
import { Ticket } from './Ticket';

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

    if (highVacancyRate!.getVacancyRate() !== 0) {
      return highVacancyRate!.storeBag(bag);
    }

    return PROMPT_MESSAGE_LOCKER_IS_FULL;
  }

  public takeBag(ticket: Ticket) {
    const count = this.getLLockerCount();
    for (let i = 0; i < count; i++) {
      const currentLocker = this.lLockerList[i];
      if (currentLocker.bagIsExists(ticket.getTicketNo())) {
        return currentLocker.takeBag(ticket);
      }
    }

    return PROMPT_MESSAGE_INVALID_TICKET;
  }
}