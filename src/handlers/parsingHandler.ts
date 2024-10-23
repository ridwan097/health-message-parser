import ParseMessage from '../lib/ParserEvents';

async function handler(event: any) {
  try {
    let parsingHandler = new ParseMessage();
    switch (event.httpMethod) {
      case 'POST':
        return await parsingHandler.processMessage(event);
      // case 'GET':
      //   return await parsingHandler.get(event);
      //   case 'PATCH':
      //     return await parsingHandler.parseMessage(event);
      //   case 'DELETE':
      //     return await parsingHandler.parseMessage(event);
      default:
        return {
          statusCode: 404,
          headers: { 'Content-Type': 'application/json' },
          body: 'Not Found',
        };
    }
  } catch (e) {
    console.error(e, 'handler errors');
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: e,
    };
  }
}
export default handler;
