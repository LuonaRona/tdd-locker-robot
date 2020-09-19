import { Bag } from './Bag';
import { Locker } from './Locker';
import { Ticket } from './Ticket';
import { PROMPT_MESSAGE_LOCKER_IS_FULL, S_LOCKER_CAPACITY, S_LOCKER_SIZE } from './constant/locker';

export class SLocker extends Locker {
  private list: Bag[] = [];

  constructor() {
    super(S_LOCKER_CAPACITY, S_LOCKER_SIZE);
  }

  private getUsedCapacity() {
    return this.list.length;
  }

  private storeInLocker(bag: Bag) {
    this.list.push(bag);
  }

  public isFull(): boolean {
    return this.getTotalCapacity() === this.getUsedCapacity();
  }

  public storeBag(bag: Bag): Ticket | string {
    if (!this.isFull()) {
      this.storeInLocker(bag);
      return new Ticket(S_LOCKER_SIZE);
    }

    return PROMPT_MESSAGE_LOCKER_IS_FULL;
  }
}
