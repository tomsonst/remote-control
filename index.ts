import { httpServer } from './src/http_server/index';
import { WebSocketServer, WebSocket, Server } from 'ws';
import { handleClientRequest } from './src/clientRequest';

const HTTP_PORT: number = 3000;
const WSS_PORT: number = 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss: Server<WebSocket> = new WebSocketServer({port: WSS_PORT});
console.log(`Start web socket server on the ${WSS_PORT} port!`);
wss.on('connection', function connection(ws: WebSocket) {
  ws.on('message', function message(data:string) {
    console.log('Received: ' + data)
    handleClientRequest(ws, data);
  });
});

process.on('SIGINT', () => {
  wss.close();
  process.stdout.write('Web socket server is closed!\n');
  process.exit(0);
});