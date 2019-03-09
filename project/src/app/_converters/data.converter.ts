import { EmployeeDTO } from './../_dto/employee.dto';
import { Employee } from '../_models/employee.model';

export class DataConverter {
  // converts json to Employee and returns Employee object
  static jsonToEmployee(json: EmployeeDTO): Employee {
    return new Employee(
      json.id,
      json.firstName,
      json.lastName,
      json.email,
      json.username,
      json.role,
      json.businessTrips
    );
  }

  // convert Employee object to json data and returns it
  static employeeToJson(model: Employee): EmployeeDTO {
    return {
      id: model.id,
      firstName: model.firstName,
      lastName: model.lastName,
      email: model.email,
      username: model.username,
      role: model.role,
      businessTrips: model.businessTrips
    };
  }
}