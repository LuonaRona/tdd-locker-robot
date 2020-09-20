import { Bag } from './Bag';
import { L_LOCKER_CAPACITY, L_LOCKER_SIZE } from './constant/locker';
import { Locker } from './Locker';
import { StoredBag } from './StoredBag';
import { Ticket } from './Ticket';

export class LLocker extends Locker {
  private list: StoredBag[] = [];

  private getUsedCapacity() {
    return this.list.length;
  }

  constructor(lockerNo: number) {
    super(lockerNo, L_LOCKER_CAPACITY, L_LOCKER_SIZE);
  }

  public storeBag(bag: Bag) {
    if (this.getUsedCapacity() < this.getTotalCapacity()) {
      const ticket = new Ticket(L_LOCKER_SIZE, this.getLockerNo());
      this.list.push(new StoredBag(ticket.getTicketNo(), bag));

      return ticket;
    }
  }
}
