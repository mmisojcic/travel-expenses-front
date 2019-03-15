import { Destinations } from './../_models/destinations.model';
import { DestinationsDTO } from './../_dto/destinations.dto';
import { MsgDTO } from './../_dto/msg.dto';
import { UserCredentialsDTO } from './../_dto/user-credentials.dto';
import { EmployeeDTO } from './../_dto/employee.dto';
import { Employee } from '../_models/employee.model';
import { User } from '../_models/user.model';
import { RegisterUserDataDTO } from '../_dto/register-data.dto';
import { RegisterUserData } from '../_models/register-data.model';
import { Destination } from '../_models/destination.model';
import { DestinationDTO } from '../_dto/destination.dto';

export class DataConverter {
  // converts user login data to JSON
  static userCredentialsToJson(model: User): UserCredentialsDTO {
    return {
      username: model.username,
      password: model.password
    };
  }

  // converts user register data to JSON
  static registerUserDataToJson(model: RegisterUserData): RegisterUserDataDTO {
    return {
      username: model.username,
      password: model.password,
      firstName: model.firstName,
      lastName: model.lastName
    };
  }

  // converts JSON to Employee and returns Employee object
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

  // convert Employee object to JSON data and returns it
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

  // convert JSON data to Destinations
  static jsonToDestinations(json: DestinationDTO[]): Destination[] {
    return json;
  }

  // static jsontotest(json: any): Msg {
  //   return new Msg(json.msg);
  // }
  // static testtojson(model: User): UserCredentialsDTO {
  //   return {
  //     username: model.username,
  //     password: model.password
  //   };
  // }
}
