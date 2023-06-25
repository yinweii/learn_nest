import { Paging } from './paging';

export class ResponseData {
  code?: number;
  success: boolean;
  message: string;
  data: any;
  pagination?: Paging;

  constructor(
    code?: number,
    success?: boolean,
    message?: string,
    data?: any,
    pagination?: Paging,
  ) {
    this.code = code;
    this.success = success;
    this.message = message;
    this.data = data;
    this.pagination = pagination;
  }
}
