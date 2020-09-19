import { Bag } from './Bag';
import { LockerSize } from './Locker';

export class StoredBag extends Bag {
  private ticketNo: string;

  constructor(ticketNo: string, bag: Bag) {
    super(bag.getSize(), bag.getContent());
    this.ticketNo = ticketNo;
  }

  public getTicketNo() {
    return this.ticketNo;
  }
}
