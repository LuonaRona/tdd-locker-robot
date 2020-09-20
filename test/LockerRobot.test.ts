import { Bag } from '../src/Bag';
import {
  S_LOCKER_SIZE,
  M_LOCKER_SIZE,
  L_LOCKER_SIZE,
  S_LOCKER_COUNT,
  M_LOCKER_COUNT,
  L_LOCKER_COUNT,
  S_LOCKER_CAPACITY,
  M_LOCKER_CAPACITY,
  PROMPT_MESSAGE_LOCKER_IS_FULL,
  PROMPT_MESSAGE_INVALID_TICKET,
  PROMPT_MESSAGE_MISMATCH_TICKET,
  L_LOCKER_CAPACITY,
} from '../src/constant/locker';
import { LockerRobot } from '../src/LockerRobot';
import { Ticket } from '../src/Ticket';

const DEFAULT_CUSTOMER_BAG = '待存的包裹';
const NUMBER_OF_FIRST_LOCKER = 1;
const NUMBER_OF_SECOND_LOCKER = 2;
const sCustomerBag = new Bag(S_LOCKER_SIZE, DEFAULT_CUSTOMER_BAG);
const mCustomerBag = new Bag(M_LOCKER_SIZE, DEFAULT_CUSTOMER_BAG);
const lCustomerBag = new Bag(L_LOCKER_SIZE, DEFAULT_CUSTOMER_BAG);
let lockerRobot = new LockerRobot(S_LOCKER_COUNT, M_LOCKER_COUNT, L_LOCKER_COUNT);

afterEach(() => {
  lockerRobot = new LockerRobot(S_LOCKER_COUNT, M_LOCKER_COUNT, L_LOCKER_COUNT);
});

test('should_get_S_ticket_WHEN_store_bag_GIVEN_store_S_bag_have_space', () => {
  const ticket = lockerRobot.storeBag(sCustomerBag) as Ticket;

  expect(ticket.getLockerSize()).toEqual(S_LOCKER_SIZE);
  expect(ticket.getTicketNo()).toBeTruthy();
});

test('should_prompt_failure_WHEN_store_bag_GIVEN_store_S_bag_no_space', () => {
  const TotalCapacity = S_LOCKER_COUNT * S_LOCKER_CAPACITY;

  for (let i = 0; i < TotalCapacity; i += 1) {
    lockerRobot.storeBag(new Bag(S_LOCKER_SIZE, `顾客的包裹_${i}`));
  }
  const promptMessage = lockerRobot.storeBag(sCustomerBag) as string;

  expect(promptMessage).toEqual(PROMPT_MESSAGE_LOCKER_IS_FULL);
});

test('should_get_S_bag_WHEN_take_bag_GIVEN_take_S_bag_valid_ticket', () => {
  const ticket = lockerRobot.storeBag(sCustomerBag) as Ticket;
  const bag = lockerRobot.takeSBag(ticket) as Bag;

  expect(bag.getSize()).toEqual(S_LOCKER_SIZE);
  expect(bag.getContent()).toEqual(DEFAULT_CUSTOMER_BAG);
});

test('should_prompt_failure_WHEN_take_bag_GIVEN_take_S_bag_invalid_ticket', () => {
  lockerRobot.storeBag(sCustomerBag);
  const invalidTicket = new Ticket(S_LOCKER_SIZE, 1);
  const promptMessage = lockerRobot.takeSBag(invalidTicket) as string;

  expect(promptMessage).toEqual(PROMPT_MESSAGE_INVALID_TICKET);
});

test('should_prompt_failure_WHEN_take_bag_GIVEN_take_S_bag_ticket_locker_size_mismatch', () => {
  lockerRobot.storeBag(sCustomerBag);
  const sizeMismatchTicket = new Ticket(M_LOCKER_SIZE, 1);
  const promptMessage = lockerRobot.takeSBag(sizeMismatchTicket) as string;

  expect(promptMessage).toEqual(PROMPT_MESSAGE_MISMATCH_TICKET);
});

test('should_get_M_ticket_WHEN_store_bag_GIVEN_store_M_bag_have_space', () => {
  const ticket = lockerRobot.storeBag(mCustomerBag) as Ticket;

  expect(ticket.getLockerSize()).toEqual(M_LOCKER_SIZE);
  expect(ticket.getTicketNo()).toBeTruthy();
});

test('should_get_M_ticket_WHEN_store_bag_GIVEN_store_M_bag_locker1_no_space', () => {
  for (let i = 0; i < M_LOCKER_CAPACITY * 1; i += 1) {
    lockerRobot.storeBag(new Bag(M_LOCKER_SIZE, `顾客的包裹_${i}`));
  }
  const ticket = lockerRobot.storeBag(mCustomerBag) as Ticket;

  expect(ticket.getLockerNo()).toEqual(NUMBER_OF_SECOND_LOCKER);
  expect(ticket.getLockerSize()).toEqual(M_LOCKER_SIZE);
  expect(ticket.getTicketNo()).toBeTruthy();
});

test('should_prompt_failure_WHEN_store_bag_GIVEN_store_M_bag_no_space', () => {
  for (let i = 0; i < M_LOCKER_CAPACITY * M_LOCKER_COUNT; i += 1) {
    lockerRobot.storeBag(new Bag(M_LOCKER_SIZE, `顾客的包裹_${i}`));
  }
  const promptMessage = lockerRobot.storeBag(mCustomerBag) as string;

  expect(promptMessage).toEqual(PROMPT_MESSAGE_LOCKER_IS_FULL);
});

test('should_get_M_bag_WHEN_take_bag_GIVEN_take_M_bag_valid_ticket', () => {
  const ticket = lockerRobot.storeBag(mCustomerBag) as Ticket;
  const bag = lockerRobot.takeMBag(ticket) as Bag;

  expect(bag.getSize()).toEqual(M_LOCKER_SIZE);
  expect(bag.getContent()).toEqual(DEFAULT_CUSTOMER_BAG);
});

test('should_prompt_failure_WHEN_take_bag_GIVEN_take_M_bag_invalid_ticket', () => {
  lockerRobot.storeBag(mCustomerBag);
  const invalidTicket = new Ticket(M_LOCKER_SIZE, 1);

  const promptMessage = lockerRobot.takeMBag(invalidTicket) as string;

  expect(promptMessage).toEqual(PROMPT_MESSAGE_INVALID_TICKET);
});

test('should_prompt_failure_WHEN_take_bag_GIVEN_take_M_bag_mismatch_ticket', () => {
  lockerRobot.storeBag(mCustomerBag);
  const mismatchTicket = new Ticket(S_LOCKER_SIZE, 1);

  const promptMessage = lockerRobot.takeMBag(mismatchTicket) as string;

  expect(promptMessage).toEqual(PROMPT_MESSAGE_MISMATCH_TICKET);
});

test('should_get_L_ticket_WHEN_store_bag_GIVEN_store_L_bag_only_1_locker_have_space', () => {
  lockerRobot = new LockerRobot(S_LOCKER_COUNT, M_LOCKER_COUNT, 1);

  const ticket = lockerRobot.storeBag(lCustomerBag) as Ticket;

  expect(ticket.getLockerNo()).toEqual(NUMBER_OF_FIRST_LOCKER);
  expect(ticket.getLockerSize()).toEqual(L_LOCKER_SIZE);
  expect(ticket.getTicketNo()).toBeTruthy();
});

test('should_get_L_ticket_WHEN_store_bag_GIVEN_store_L_bag_locker_2_high_vacancy_rate', () => {
  lockerRobot.storeBag(lCustomerBag);

  const ticket = lockerRobot.storeBag(lCustomerBag) as Ticket;

  expect(ticket.getLockerNo()).toEqual(NUMBER_OF_SECOND_LOCKER);
  expect(ticket.getLockerSize()).toEqual(L_LOCKER_SIZE);
  expect(ticket.getTicketNo()).toBeTruthy();
});

test('should_prompt_failure_WHEN_store_bag_GIVEN_store_L_bag_locker_hava_no_space', () => {
  for (let i = 0; i < L_LOCKER_COUNT * L_LOCKER_CAPACITY; i++) {
    lockerRobot.storeBag(lCustomerBag);
  }

  const promptMessage = lockerRobot.storeBag(lCustomerBag) as string;

  expect(promptMessage).toEqual(PROMPT_MESSAGE_LOCKER_IS_FULL);
});
