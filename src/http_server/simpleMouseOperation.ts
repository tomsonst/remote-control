import robot from 'robotjs';
import { WebSocket } from 'ws';

export const getMousePosition = (ws: WebSocket) => {
  const mousePosition = robot.getMousePos();
  ws.send(`mouse_position ${mousePosition.x},${mousePosition.y}`)
}

export const moveMouseUp = (ws: WebSocket, arrReq: string[]) => {
  const offset: number = Number(arrReq[1]);
  const {x, y} = robot.getMousePos();
  const moveYPx: number = Number(y) - offset;
  robot.moveMouse(x, moveYPx);
  ws.send(`mouse_up ${moveYPx}`);
}

export const moveMouseDown = (ws: WebSocket, arrReq: string[]) => {
  const offset: number = Number(arrReq[1]);
  const {x, y} = robot.getMousePos();
  const moveYPx: number = Number(y) + offset;
  robot.moveMouse(x, moveYPx);
  ws.send(`mouse_up ${moveYPx}`);
}

export const moveMouseLeft = (ws: WebSocket, arrReq: string[]) => {
  const offset: number = Number(arrReq[1]);
  const {x, y} = robot.getMousePos();
  const moveXPx: number = Number(x) - offset;
  robot.moveMouse(moveXPx, y);
  ws.send(`mouse_up ${moveXPx}`);
}

export const moveMouseRight = (ws: WebSocket, arrReq: string[]) => {
  const offset: number = Number(arrReq[1]);
  const {x, y} = robot.getMousePos();
  const moveXPx: number = Number(x) + offset;
  robot.moveMouse(moveXPx, y);
  ws.send(`mouse_up ${moveXPx}`);
}