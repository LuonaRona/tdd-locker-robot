import { LockerSize } from './Locker';

export class Bag {
  private size: LockerSize;
  private content: any;

  constructor(size: LockerSize, content: any) {
    this.size = size;
    this.content = content;
  }

  public getSize() {
    return this.size;
  }

  public getContent() {
    return this.content;
  }
}
