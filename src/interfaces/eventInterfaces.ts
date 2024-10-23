export interface IParseMessage {
  register(event: IRegisterEvent): Promise<IResolve | IReject>;
  get(event: IGetMessageEvent): Promise<IResolve | IReject>;
  update(event: IGetMessageEvent): Promise<IResolve | IReject>;
}
export interface IEvent {
  httpMethod?: 'POST' | 'GET' | 'PATCH' | 'DELETE';
  body?: any;
  queryStringParameters?: any;
  pathParameters?: any;
}
export interface IResolve {
  statusCode: number;
  headers?: any;
  body?: string;
}
export interface IReject {
  statusCode: number;
  headers?: any;
}
export interface IRegisterEvent extends IEvent {
  body: string;
}
export interface IGetMessageEvent extends IEvent {
  pathParameters: { messageID: string } | string;
}
