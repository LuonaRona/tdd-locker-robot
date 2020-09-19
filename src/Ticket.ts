import { LockerSize } from './Locker';
import { genID } from './utils';

export class Ticket {
  ticketNo: string;
  lockerSize: LockerSize;

  constructor(lockerSize: LockerSize) {
    this.ticketNo = genID();
    this.lockerSize = lockerSize;
  }

  getLockerSize() {
    return this.lockerSize;
  }

  getTicketNo() {
    return this.ticketNo;
  }
}
