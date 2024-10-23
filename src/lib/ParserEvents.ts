import {
  IEvent,
  IGetMessageEvent,
  IRegisterEvent,
  IParseMessage,
} from '../interfaces/eventInterfaces';
export const corsHeaders = {
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': '*',
};
export default class ParseMessage implements IParseMessage {
  event: IEvent | undefined;
  constructor(event?: any) {
    this.event = event;
  }
  async register(event: IRegisterEvent) {
    try {
      return {
        body: JSON.stringify({ success: true }),
        statusCode: 201,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      };
    } catch (e) {
      console.error(e, 'error registering');
      return { body: JSON.stringify(e), statusCode: 500 };
    }
  }
  async get(event: IGetMessageEvent) {
    try {
      return {
        body: JSON.stringify({ success: true }),
        statusCode: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      };
    } catch (e) {
      console.error(e, 'error getting  details');
      return { body: JSON.stringify(e), statusCode: 500 };
    }
  }
  async update(event: IGetMessageEvent) {
    try {
      return {
        body: JSON.stringify({ success: true }),
        statusCode: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      };
    } catch (e) {
      console.error(e, 'error updating details');
      return { body: JSON.stringify(e), statusCode: 500 };
    }
  }
}
