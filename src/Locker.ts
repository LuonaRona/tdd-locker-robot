export type LockerSize = 'S' | 'M' | 'L';

export class Locker {
  private size: LockerSize;
  private totalCapacity: number;

  constructor(capacity: number, size: LockerSize) {
    this.size = size;
    this.totalCapacity = capacity;
  }

  public getSize() {
    return this.size;
  }

  public getTotalCapacity() {
    return this.totalCapacity;
  }
}
