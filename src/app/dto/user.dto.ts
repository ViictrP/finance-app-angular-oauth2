import TransactionDTO from './transaction.dto';
import CreditCardDTO from './credit-card.dto';
import { SalaryDTO } from './salaryDTO';

export default interface UserDTO {
  id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  active: boolean;
  createdAt: Date;
  salary?: SalaryDTO;
  creditCards: CreditCardDTO[];
  transactions: TransactionDTO[];
  recurringExpenses: TransactionDTO[]
}
