import {
  IEvent,
  IGetMessageEvent,
  IParseMessageEvent,
  IParseMessage,
} from '../interfaces/eventInterfaces';
import { parseMessage } from '../utils/helpers';

const corsHeaders = (origin: string) => {
  const allowedOriginPattern =
    /^(https?:\/\/.*cdk-health-message-parser.*|http:\/\/localhost:3000)$/i;

  return {
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Origin': allowedOriginPattern.test(origin)
      ? origin
      : 'null', // Deny access for invalid origins
  };
};
export default class ParseMessage implements IParseMessage {
  event: IEvent | undefined;
  constructor(event?: any) {
    this.event = event;
  }
  async processMessage(event: IParseMessageEvent) {
    try {
      this.event = event;
      const eventBody = this.parseBody(event.body);

      const result = parseMessage(eventBody);
      const origin = event.headers?.origin || ''; // Default to empty string if undefined
      return this.createResponse(result, 201, origin);
    } catch (e) {
      console.error(e, 'error registering');
      return this.createErrorResponse(e, 500, event.headers?.origin);
    }
  }
  async get(event: IGetMessageEvent) {
    try {
      const result = {};
      return this.createResponse(result, 201, origin);
    } catch (e) {
      console.error(e, 'error getting  details');
      return this.createErrorResponse(e, 500, event.headers?.origin);
    }
  }
  async update(event: IGetMessageEvent) {
    try {
      const result = {};
      return this.createResponse(result, 201, origin);
    } catch (e) {
      console.error(e, 'error updating details');
      return this.createErrorResponse(e, 500, event.headers?.origin);
    }
  }

  private parseBody(body: any): any {
    if (typeof body === 'string' && body.trim().startsWith('MSG')) {
      // Assuming the message always starts with "MSG"
      return body; // Return the plain text body directly
    }
    try {
      return typeof body === 'string' ? JSON.parse(body) : body;
    } catch (e) {
      throw new Error('Invalid JSON body');
    }
  }

  private parseParams(params: any): any {
    try {
      return typeof params === 'string' ? JSON.parse(params) : params;
    } catch (e) {
      throw new Error('Invalid path parameters');
    }
  }

  private createResponse(body: any, statusCode: number, origin: string = '') {
    return {
      body: JSON.stringify(body),
      statusCode: statusCode,
      headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
    };
  }

  private createErrorResponse(
    error: any,
    statusCode: number,
    origin: string = '',
  ) {
    return {
      body: JSON.stringify({ error: error.message || error }),
      statusCode: statusCode,
      headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
    };
  }
}
