import TransactionDTO from './transaction.dto';
import CreditCardDTO from './credit-card.dto';

export interface BalanceDTO {
  transactions: TransactionDTO[];
  creditCards: CreditCardDTO[];
  recurringExpenses: TransactionDTO[];
}
