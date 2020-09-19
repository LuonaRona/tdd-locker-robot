import { Bag } from '../src/Bag';
import {
  DEFAULT_NUMBER_OF_S_LOCKER,
  S_LOCKER_SIZE,
  S_LOCKER_CAPACITY,
  PROMPT_MESSAGE_LOCKER_IS_FULL,
} from '../src/constant/locker';
import { LockerRobot } from '../src/LockerRobot';
import { Ticket } from '../src/Ticket';

const DEFAULT_CUSTOMER_BAG = '待存的包裹';
const sCustomerBag = new Bag(S_LOCKER_SIZE, DEFAULT_CUSTOMER_BAG);
let lockerRobot = new LockerRobot(DEFAULT_NUMBER_OF_S_LOCKER);

afterEach(() => {
  lockerRobot = new LockerRobot(DEFAULT_NUMBER_OF_S_LOCKER);
});

test('should_get_S_ticket_WHEN_store_bag_GIVEN_Non-VIP_store_S_bag_have_space', () => {
  const ticket = lockerRobot.storeBag(sCustomerBag) as Ticket;

  expect(ticket.getLockerSize()).toEqual(S_LOCKER_SIZE);
  expect(ticket.getTicketNo()).toBeTruthy();
});

test('should_prompt_failure_WHEN_store_bag_GIVEN_Non-VIP_store_S_bag_no_space', () => {
  const TotalCapacity = DEFAULT_NUMBER_OF_S_LOCKER * S_LOCKER_CAPACITY;

  for (let i = 0; i < TotalCapacity; i += 1) {
    lockerRobot.storeBag(new Bag(S_LOCKER_SIZE, `顾客的包裹_${i}`));
  }
  const promptMessage = lockerRobot.storeBag(sCustomerBag) as string;

  expect(promptMessage).toEqual(PROMPT_MESSAGE_LOCKER_IS_FULL);
});

test('should_get_S_bag_WHEN_take_bag_GIVEN_Non-VIP_take_S_bag_valid_ticket', () => {
  const ticket = lockerRobot.storeBag(sCustomerBag) as Ticket;
  const bag = lockerRobot.takeBag(ticket) as Bag;

  expect(bag.getSize()).toEqual(S_LOCKER_SIZE);
  expect(bag.getContent()).toEqual(DEFAULT_CUSTOMER_BAG);
});
