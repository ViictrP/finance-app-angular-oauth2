import InvoiceDTO from './invoice.dto';
import UserDTO from './user.dto';

export default interface TransactionDTO {
  id?: string;
  amount: number;
  description: string;
  isInstallment: boolean;
  installmentAmount: number;
  installmentNumber?: number;
  createdAt?: Date;
  date: Date;
  invoice?: InvoiceDTO;
  user?: UserDTO;
  category: 'food' | 'home' | 'credit-card' | 'shop' | 'other';
  recurring?: boolean;
}
