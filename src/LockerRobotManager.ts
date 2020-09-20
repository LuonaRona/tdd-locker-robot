import { Bag } from './Bag';
import {
  LOCKER_ROBOT_MANAGER_DEFAULT_LOCKER_COUNT,
  LOCKER_ROBOT_MANAGER_DEFAULT_LOCKER_NO,
  M_LOCKER_SIZE,
  S_LOCKER_SIZE,
} from './constant/locker';
import { PrimaryLockerRobot } from './PrimaryLockerRobot';
import { SLocker } from './SLocker';
import { Ticket } from './Ticket';

export class LockerRobotManager {
  private sLocker: SLocker;
  private primaryLockerRobot: PrimaryLockerRobot;

  constructor() {
    this.sLocker = new SLocker(LOCKER_ROBOT_MANAGER_DEFAULT_LOCKER_NO);
    this.primaryLockerRobot = new PrimaryLockerRobot(LOCKER_ROBOT_MANAGER_DEFAULT_LOCKER_COUNT);
  }

  public storeBag(bag: Bag) {
    switch (bag.getSize()) {
      case S_LOCKER_SIZE:
        return this.sLocker.storeBag(bag);
      case M_LOCKER_SIZE:
        return this.primaryLockerRobot.storeBag(bag);
    }
  }

  public takeSBag(ticket: Ticket) {
    return this.sLocker.takeBag(ticket);
  }

  public takeMBag(ticket: Ticket) {
    return this.primaryLockerRobot.takeBag(ticket);
  }
}
