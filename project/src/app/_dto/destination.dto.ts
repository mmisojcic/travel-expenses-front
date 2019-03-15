import { WageInfoDTO } from './wage-info.dto';

export interface DestinationDTO {
  id?: number;
  city?: string;
  zipCode?: number;
  wage?: number;
  wages?: WageInfoDTO[];
}
