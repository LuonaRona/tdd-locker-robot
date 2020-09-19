import { LockerSize } from './Locker';

export class Bag {
  size: LockerSize;
  content: any;

  constructor(size: LockerSize, content: any) {
    this.size = size;
    this.content = content;
  }

  getSize() {
    return this.size;
  }

  getContent() {
    return this.content;
  }
}
