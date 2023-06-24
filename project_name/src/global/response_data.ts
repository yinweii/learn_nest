export class ResponseData<D> {
  code: number;
  success: boolean;
  message: string;
  data: D | D[];

  constructor(data: D | D[], code: number, success: boolean, message: string) {
    this.code = code;
    this.success = success;
    this.message = message;
    this.data = data;
  }
}
