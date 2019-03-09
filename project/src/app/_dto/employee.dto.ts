import { BusinessTripDTO } from './business-trip.dto';

export interface EmployeeDTO {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  role: string;
  businessTrips: BusinessTripDTO[];
}
