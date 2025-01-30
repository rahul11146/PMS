export interface IRole {
  roleid: number;
  role: string;
}

export interface APIResponseModel {
  message: string;
  result: boolean;
  data: any;
}
