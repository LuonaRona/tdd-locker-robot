import { Bag } from './Bag';
import { Locker } from './Locker';
import { Ticket } from './Ticket';
import { StoredBag } from './StoredBag';
import { M_LOCKER_CAPACITY, M_LOCKER_SIZE } from './constant/locker';

export class MLocker extends Locker {
  private list: StoredBag[] = [];

  constructor() {
    super(M_LOCKER_CAPACITY, M_LOCKER_SIZE);
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
    if (!this.isFull()) {
      const ticket = new Ticket(M_LOCKER_SIZE);
      this.storeInLocker(ticket.getTicketNo(), bag);

      return ticket;
    }
  }
}
