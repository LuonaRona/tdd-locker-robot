import { Bag } from '../src/Bag';
import { DEFAULT_NUMBER_OF_S_LOCKER, S_LOCKER_SIZE } from '../src/constant/locker';
import { LockerRobot } from '../src/LockerRobot';

test('should_get_S_ticket_WHEN_store_bag_GIVEN_Non-VIP_store_S_bag_have_space', () => {
  const customerBag = new Bag(S_LOCKER_SIZE, '顾客的包裹');
  const lockerRobot = new LockerRobot(DEFAULT_NUMBER_OF_S_LOCKER);

  const result = lockerRobot.storeBag(customerBag);

  expect(result!.getLockerSize()).toEqual(S_LOCKER_SIZE);
  expect(result!.getTicketNo()).toBeTruthy();
});
