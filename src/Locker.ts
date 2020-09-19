export type LockerSize = 'S' | 'M' | 'L';

export class Locker {
  size: LockerSize;
  totalCapacity: number;

  constructor(capacity: number, size: LockerSize) {
    this.size = size;
    this.totalCapacity = capacity;
  }
}
