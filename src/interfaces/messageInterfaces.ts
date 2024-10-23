export interface IFullName {
  lastName: string;
  firstName: string;
  middleName: string;
}

export interface IParsedData {
  fullName: IFullName;
  dateOfBirth: string;
  primaryCondition: string;
}

export interface MockDatabase {
  [key: string]: IParsedData[];
}
