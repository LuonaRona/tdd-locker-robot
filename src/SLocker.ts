import { Bag } from './Bag';
import { Locker } from './Locker';
import { Ticket } from './Ticket';
import { S_LOCKER_TOTAL_CAPACITY, S_LOCKER_SIZE } from './constant/locker';

export class SLocker extends Locker {
  list: Bag[] = [];

  constructor() {
    super(S_LOCKER_TOTAL_CAPACITY, S_LOCKER_SIZE);
  }

  storeBag(bag: Bag) {
    if (this.list.length < this.totalCapacity) {
      this.list.push(bag);
      return new Ticket(S_LOCKER_SIZE);
    }
  }

  getCurrentRemainingCapacity(): number {
    return this.totalCapacity - this.list.length;
  }
}
