import { Bag } from '../src/Bag';
import {
  DEFAULT_NUMBER_OF_S_LOCKER,
  S_LOCKER_SIZE,
  S_LOCKER_CAPACITY,
  PROMPT_MESSAGE_LOCKER_IS_FULL,
} from '../src/constant/locker';
import { LockerRobot } from '../src/LockerRobot';
import { Ticket } from '../src/Ticket';

const sCustomerBag = new Bag(S_LOCKER_SIZE, '待存的包裹');
let lockerRobot = new LockerRobot(DEFAULT_NUMBER_OF_S_LOCKER);

afterEach(() => {
  lockerRobot = new LockerRobot(DEFAULT_NUMBER_OF_S_LOCKER);
});

test('should_get_S_ticket_WHEN_store_bag_GIVEN_Non-VIP_store_S_bag_have_space', () => {
  const result = lockerRobot.storeBag(sCustomerBag) as Ticket;

  expect(result.getLockerSize()).toEqual(S_LOCKER_SIZE);
  expect(result.getTicketNo()).toBeTruthy();
});

test('should_prompt_failure_WHEN_store_bag_GIVEN_Non-VIP_store_S_bag_no_space', () => {
  const TotalCapacity = DEFAULT_NUMBER_OF_S_LOCKER * S_LOCKER_CAPACITY;

  for (let i = 0; i < TotalCapacity; i += 1) {
    lockerRobot.storeBag(new Bag(S_LOCKER_SIZE, `顾客的包裹_${i}`));
  }
  const result = lockerRobot.storeBag(sCustomerBag) as string;

  expect(result).toEqual(PROMPT_MESSAGE_LOCKER_IS_FULL);
});
