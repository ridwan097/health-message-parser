export interface IParseMessage {
  processMessage(event: IParseMessageEvent): Promise<IResolve | IReject>;
  get(event: IGetMessageEvent): Promise<IResolve | IReject>;
  update(event: IGetMessageEvent): Promise<IResolve | IReject>;
}
export interface IEvent {
  httpMethod?: 'POST' | 'GET' | 'PATCH' | 'DELETE';
  body?: any;
  queryStringParameters?: any;
  pathParameters?: any;
  headers?: {
    origin: string;
  };
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
export interface IParseMessageEvent extends IEvent {
  body: string | { message: string };
}
export interface IGetMessageEvent extends IEvent {
  pathParameters: { messageID: string } | string;
}
