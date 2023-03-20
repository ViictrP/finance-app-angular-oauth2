import UserDTO from './user.dto';
import InvoiceDTO from './invoice.dto';

export default interface CreditCardDTO {
  id: string;
  title: string;
  description: string;
  number: string;
  user?: UserDTO;
  invoices: InvoiceDTO[];
  invoiceClosingDay: number;
  createAt?: Date;
  backgroundColor: string;
  totalInvoiceAmount?: number;
}
