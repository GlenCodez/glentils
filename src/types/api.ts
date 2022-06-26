import {ObjectId} from "mongodb";

export enum Month {
  JANUARY = '01-JANUARY',
  FEBRUARY = '02-FEBRUARY',
  MARCH = '03-MARCH',
  APRIL = '04-APRIL',
  MAY = '05-MAY',
  JUNE = '06-JUNE',
  JULY = '07-JULY',
  AUGUST = '08-AUGUST',
  SEPTEMBER = '09-SEPTEMBER',
  OCTOBER = '10-OCTOBER',
  NOVEMBER = '11-NOVEMBER',
  DECEMBER = '12-DECEMBER'
}

export enum FrequencyEnum  {
  ONCE = 'ONCE',
  MONTHLY = 'MONTHLY',
  WEEKLY = 'WEEKLY',
  BI_WEEKLY = 'BI_WEEKLY',
  SEMI_ANNUAL = 'SEMI_ANNUAL',
  ANNUAL = 'ANNUAL'
}

export enum TransactionTypeEnum {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
  LIABILITY = 'LIABILITY'
}

export enum TransactionStatusEnum {
  NOT_PROCESSED = 'NOT_PROCESSED',
  IN_PROCESS = 'IN_PROCESS',
  PROCESSED = 'PROCESSED'
}

type TransactionBase = {
  month: Month,
  date: string,
  amount: string
}

export type ActualTransaction = TransactionBase & {
  type: TransactionTypeEnum,
  name: string
}

export type ProjectedTransaction = {
  status: TransactionStatusEnum
} & ActualTransaction

export type PeriodicTransactionConfig = {
  name: string,
  amount: string,
  type: TransactionTypeEnum,
  sourceUrl: string,
  frequency: FrequencyEnum,
  firstDate: string,
  totalTransactions: number,
  estimated: boolean,
  matchKeys: string []
}

export type PeriodicProjectedTransaction = TransactionBase & {
  configId: ObjectId,
  status: TransactionStatusEnum
}

export type DailyBalances = {
  [key:string]: {
    actual: {
      transactions: ActualTransaction[],
      balance: string
    },
    projected: {
      transactions: (ProjectedTransaction | PeriodicProjectedTransaction)[],
      balance: string
    }
  }
}

export type BalancesResponse = DailyBalances