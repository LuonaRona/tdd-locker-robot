import { Bag } from './Bag';
import { L_LOCKER_CAPACITY, L_LOCKER_SIZE } from './constant/locker';
import { Locker } from './Locker';
import { StoredBag } from './StoredBag';
import { Ticket } from './Ticket';

export class LLocker extends Locker {
  private list: StoredBag[] = [];

  constructor(lockerNo: number) {
    super(lockerNo, L_LOCKER_CAPACITY, L_LOCKER_SIZE);
  }

  private getUsedCapacity() {
    return this.list.length;
  }

  public getVacancyRate() {
    const total = this.getTotalCapacity();
    const remaining = total - this.getUsedCapacity();

    return remaining / total;
  }

  public isFull(): boolean {
    return this.getTotalCapacity() === this.getUsedCapacity();
  }

  public storeBag(bag: Bag) {
    if (this.getUsedCapacity() < this.getTotalCapacity()) {
      const ticket = new Ticket(L_LOCKER_SIZE, this.getLockerNo());
      this.list.push(new StoredBag(ticket.getTicketNo(), bag));

      return ticket;
    }
  }
}
