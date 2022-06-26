import { httpServer } from './src/http_server/index.js';
import { WebSocketServer, WebSocket, Server } from 'ws';
import { handleClientRequest } from './src/clientRequest';

const HTTP_PORT: number = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss: Server<WebSocket> = new WebSocketServer({port: 8080});

wss.on('connection', function connection(ws: WebSocket) {
  ws.on('message', function message(data:string) {
    console.log('received ' + data)
    handleClientRequest(ws, data);
  });
});

wss.on('close', () => console.log('close ws connection'))