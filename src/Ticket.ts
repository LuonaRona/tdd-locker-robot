import { LockerSize } from './Locker';
import { genID } from './utils';

export class Ticket {
  private ticketNo: string;
  private lockerSize: LockerSize;

  constructor(lockerSize: LockerSize) {
    this.ticketNo = genID();
    this.lockerSize = lockerSize;
  }

  public getLockerSize() {
    return this.lockerSize;
  }

  public getTicketNo() {
    return this.ticketNo.toUpperCase();
  }
}
