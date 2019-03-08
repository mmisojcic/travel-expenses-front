export class BusinessTrip {
  constructor(
    public id: number,
    public destination: string,
    public startDate: string,
    public endDate: string,
    public status: string
  ) {}
}
