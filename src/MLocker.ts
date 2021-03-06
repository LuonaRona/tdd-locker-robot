import _ from 'lodash';
import { Bag } from './Bag';
import { Locker } from './Locker';
import { Ticket } from './Ticket';
import { StoredBag } from './StoredBag';
import { M_LOCKER_CAPACITY, M_LOCKER_SIZE } from './constant/locker';

export class MLocker extends Locker {
  private list: StoredBag[] = [];

  constructor(lockerNo: number) {
    super(lockerNo, M_LOCKER_CAPACITY, M_LOCKER_SIZE);
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

  public storeBag(bag: Bag) {
    const ticket = new Ticket(M_LOCKER_SIZE, this.getLockerNo());
    this.storeInLocker(ticket.getTicketNo(), bag);

    return ticket;
  }

  public takeBag(ticket: Ticket) {
    const ticketNo = ticket.getTicketNo();
    const [currentStoredBag] = _.remove(this.list, (bag) => {
      return bag.getTicketNo() === ticketNo;
    });
    return currentStoredBag;
  }
}
