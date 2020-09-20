import { LockerSize } from './Locker';
import { genID } from './utils';

export class Ticket {
  private ticketNo: string;
  private lockerNo: number;
  private lockerSize: LockerSize;

  constructor(lockerSize: LockerSize, lockerNo: number) {
    this.ticketNo = genID();
    this.lockerNo = lockerNo;
    this.lockerSize = lockerSize;
  }

  public getTicketNo() {
    return this.ticketNo.toUpperCase();
  }

  public getLockerNo() {
    return this.lockerNo;
  }

  public getLockerSize() {
    return this.lockerSize;
  }
}
