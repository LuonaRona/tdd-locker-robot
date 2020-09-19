import { Bag } from './Bag';
import { Locker } from './Locker';
import { Ticket } from './Ticket';
import { StoredBag } from './StoredBag';
import { PROMPT_MESSAGE_LOCKER_IS_FULL, S_LOCKER_CAPACITY, S_LOCKER_SIZE } from './constant/locker';

export class SLocker extends Locker {
  private list: StoredBag[] = [];

  constructor() {
    super(S_LOCKER_CAPACITY, S_LOCKER_SIZE);
  }

  private getUsedCapacity() {
    return this.list.length;
  }

  private storeInLocker(ticketNo: string, bag: Bag) {
    this.list.push(new StoredBag(ticketNo, bag));
  }

  public isFull(): boolean {
    return this.getTotalCapacity() === this.getUsedCapacity();
  }

  public storeBag(bag: Bag): Ticket | string {
    if (!this.isFull()) {
      const ticket = new Ticket(S_LOCKER_SIZE);
      this.storeInLocker(ticket.getTicketNo(), bag);

      return ticket;
    }

    return PROMPT_MESSAGE_LOCKER_IS_FULL;
  }
}
