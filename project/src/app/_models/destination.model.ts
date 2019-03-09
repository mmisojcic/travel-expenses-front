import { WageInfoDTO } from '../_dto/wage-info.dto';
export class Destination {
  constructor(
    public id: number,
    public city: string,
    public zipCode: number,
    public wage: WageInfoDTO
  ) {}
}
