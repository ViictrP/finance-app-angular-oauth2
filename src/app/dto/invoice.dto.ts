import CreditCardDTO from './credit-card.dto';
import TransactionDTO from './transaction.dto';

export default interface InvoiceDTO {
  id: string;
  month: string;
  year: number;
  isClosed: boolean;
  creditCard: CreditCardDTO;
  transactions: TransactionDTO[];
  createdAt: Date;
}
