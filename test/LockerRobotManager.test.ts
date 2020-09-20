import { Bag } from '../src/Bag';
import {
  LOCKER_ROBOT_MANAGER_DEFAULT_LOCKER_COUNT,
  M_LOCKER_CAPACITY,
  M_LOCKER_SIZE,
  PROMPT_MESSAGE_INVALID_TICKET,
  PROMPT_MESSAGE_LOCKER_IS_FULL,
  PROMPT_MESSAGE_MISMATCH_TICKET,
  S_LOCKER_CAPACITY,
  S_LOCKER_SIZE,
} from '../src/constant/locker';
import { LockerRobotManager } from '../src/LockerRobotManager';
import { Ticket } from '../src/Ticket';

const DEFAULT_CUSTOMER_BAG = '待存的包裹';
const sCustomerBag = new Bag(S_LOCKER_SIZE, DEFAULT_CUSTOMER_BAG);
const mCustomerBag = new Bag(M_LOCKER_SIZE, DEFAULT_CUSTOMER_BAG);
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

test('should_get_S_bag_WHEN_LockerRobotManager_take_bag_GIVEN_S_ticket_and_valid_ticket', () => {
  const ticket = lockerRobotManager.storeBag(sCustomerBag) as Ticket;

  const bag = lockerRobotManager.takeSBag(ticket) as Bag;

  expect(bag.getSize()).toEqual(S_LOCKER_SIZE);
  expect(bag.getContent()).toEqual(DEFAULT_CUSTOMER_BAG);
});

test('should_prompt_failure_WHEN_LockerRobotManager_take_bag_GIVEN_S_ticket_and_invalid_ticket', () => {
  lockerRobotManager.storeBag(sCustomerBag);
  const invalidTicket = new Ticket(S_LOCKER_SIZE, 1);

  const promptMessage = lockerRobotManager.takeSBag(invalidTicket) as string;

  expect(promptMessage).toEqual(PROMPT_MESSAGE_INVALID_TICKET);
});

test('should_prompt_failure_WHEN_LockerRobotManager_take_bag_GIVEN_mismatch_locker_ticket', () => {
  lockerRobotManager.storeBag(sCustomerBag);
  const mismatchTicket = new Ticket(M_LOCKER_SIZE, 1);

  const promptMessage = lockerRobotManager.takeSBag(mismatchTicket) as string;

  expect(promptMessage).toEqual(PROMPT_MESSAGE_MISMATCH_TICKET);
});

test('should_get_M_ticket_WHEN_LockerRobotManager_store_bag_GIVEN_M_bag_and_have_space', () => {
  const ticket = lockerRobotManager.storeBag(mCustomerBag) as Ticket;

  expect(ticket.getLockerSize()).toEqual(M_LOCKER_SIZE);
  expect(ticket.getTicketNo()).toBeTruthy();
});

test('should_get_M_ticket_WHEN_LockerRobotManager_store_bag_GIVEN_M_bag_and_have_no_space', () => {
  for (let i = 0; i < M_LOCKER_CAPACITY * LOCKER_ROBOT_MANAGER_DEFAULT_LOCKER_COUNT; i++) {
    lockerRobotManager.storeBag(mCustomerBag);
  }
  const promptMessage = lockerRobotManager.storeBag(mCustomerBag) as Ticket;

  expect(promptMessage).toEqual(PROMPT_MESSAGE_LOCKER_IS_FULL);
});

test('should_get_M_bag_WHEN_LockerRobotManager_take_bag_GIVEN_M_ticket_and_is_valid', () => {
  const ticket = lockerRobotManager.storeBag(mCustomerBag) as Ticket;
  const bag = lockerRobotManager.takeMBag(ticket) as Bag;

  expect(bag.getSize()).toEqual(M_LOCKER_SIZE);
  expect(bag.getContent()).toEqual(DEFAULT_CUSTOMER_BAG);
});
