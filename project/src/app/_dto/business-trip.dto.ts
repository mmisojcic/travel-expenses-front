import { Bill } from '../_models/bill.model';
import { DestinationDTO } from './destination.dto';
import { EmployeeDTO } from './employee.dto';
import { StatusDTO } from './status.dto';

export interface BusinessTripDTO {
  id?: number;
  destination?: DestinationDTO;
  startDate?: string;
  endDate?: string;
  billsTotal?: number;
  bills?: Bill[];
  status?: string;
}
