import { Bill } from '../_models/bill.model';
import { DestinationDTO } from './destination.dto';
import { EmployeeDTO } from './employee.dto';

export interface BusinessTripDTO {
  id: number;
  destination: DestinationDTO;
  startDate: string;
  endDate: string;
  bills: Bill[];
  status: string;
}
