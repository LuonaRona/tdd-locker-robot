import { Bag } from '../src/Bag';
import { PROMPT_MESSAGE_LOCKER_IS_FULL, S_LOCKER_CAPACITY, S_LOCKER_SIZE } from '../src/constant/locker';
import { LockerRobotManager } from '../src/LockerRobotManager';
import { Ticket } from '../src/Ticket';

const DEFAULT_CUSTOMER_BAG = '待存的包裹';
const sCustomerBag = new Bag(S_LOCKER_SIZE, DEFAULT_CUSTOMER_BAG);
let lockerRobotManager = new LockerRobotManager();

afterEach(() => {
  lockerRobotManager = new LockerRobotManager();
});

test('should_get_S_ticket_WHEN_LockerRobotManager_store_bag_GIVEN_S_bag_and_have_space', () => {
  const ticket = lockerRobotManager.storeBag(sCustomerBag) as Ticket;

  expect(ticket.getLockerSize()).toEqual(S_LOCKER_SIZE);
  expect(ticket.getTicketNo()).toBeTruthy();
});

test('should_get_S_ticket_WHEN_LockerRobotManager_store_bag_GIVEN_S_bag_and_have_no_space', () => {
  for (let i = 0; i < S_LOCKER_CAPACITY; i++) {
    lockerRobotManager.storeBag(new Bag(S_LOCKER_SIZE, `顾客的包裹_${i}`));
  }

  const promptMessage = lockerRobotManager.storeBag(sCustomerBag) as string;

  expect(promptMessage).toEqual(PROMPT_MESSAGE_LOCKER_IS_FULL);
});
