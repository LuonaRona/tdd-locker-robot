export type LockerSize = 'S' | 'M' | 'L';

export class Locker {
  private lockerNo: number;
  private size: LockerSize;
  private totalCapacity: number;

  constructor(lockerNo: number, capacity: number, size: LockerSize) {
    this.lockerNo = lockerNo;
    this.size = size;
    this.totalCapacity = capacity;
  }

  public getLockerNo() {
    return this.lockerNo;
  }

  public getTotalCapacity() {
    return this.totalCapacity;
  }
}
