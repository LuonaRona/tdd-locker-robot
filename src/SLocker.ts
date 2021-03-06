import _ from 'lodash';
import { Bag } from './Bag';
import { Locker } from './Locker';
import { Ticket } from './Ticket';
import { StoredBag } from './StoredBag';
import {
  PROMPT_MESSAGE_INVALID_TICKET,
  PROMPT_MESSAGE_LOCKER_IS_FULL,
  PROMPT_MESSAGE_MISMATCH_TICKET,
  S_LOCKER_CAPACITY,
  S_LOCKER_SIZE,
} from './constant/locker';

export class SLocker extends Locker {
  private list: StoredBag[] = [];

  constructor(lockerNo: number) {
    super(lockerNo, S_LOCKER_CAPACITY, S_LOCKER_SIZE);
  }

  private getUsedCapacity() {
    return this.list.length;
  }

  private storeInLocker(ticketNo: string, bag: Bag) {
    this.list.push(new StoredBag(ticketNo, bag));
  }

  public bagIsExists(ticketNo: string): boolean {
    const ticketsNo = this.list.map((bag) => bag.getTicketNo());
    return ticketsNo.includes(ticketNo);
  }

  public isFull(): boolean {
    return this.getTotalCapacity() === this.getUsedCapacity();
  }

  public storeBag(bag: Bag): Ticket | string {
    if (!this.isFull()) {
      const ticket = new Ticket(S_LOCKER_SIZE, this.getLockerNo());
      this.storeInLocker(ticket.getTicketNo(), bag);

      return ticket;
    }

    return PROMPT_MESSAGE_LOCKER_IS_FULL;
  }

  public takeBag(ticket: Ticket) {
    if (ticket.getLockerSize() !== S_LOCKER_SIZE) {
      return PROMPT_MESSAGE_MISMATCH_TICKET;
    }

    if (this.bagIsExists(ticket.getTicketNo())) {
      const ticketNo = ticket.getTicketNo();
      const [currentStoredBag] = _.remove(this.list, (bag) => {
        return bag.getTicketNo() === ticketNo;
      });

      return currentStoredBag;
    }

    return PROMPT_MESSAGE_INVALID_TICKET;
  }
}
