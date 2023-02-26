export interface IJobApplication {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export enum EStatus {
  fail = "fail",
  success = "success",
}
