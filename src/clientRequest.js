import robot from 'robotjs';
import {
  getMousePosition,
  moveMouseUp,
  moveMouseDown,
  moveMouseLeft,
  moveMouseRight
} from './http_server/simpleMouseOperation.js';
import { drawSquare, drawRectangle, drawCircle } from './http_server/drawingMouse.js';
import { getScreenShot } from './http_server/buildingScreenShot.js';

export const handleClientRequest = (ws, req) => {
  const arrReq = req.toString().split(' ');
  const command = arrReq[0];
  switch(command){
    case 'mouse_position':
      getMousePosition(ws);
      break;
    case 'mouse_up':
      moveMouseUp(ws, arrReq);
      break;
    case 'mouse_down':
      moveMouseDown(ws, arrReq);
      break;
    case 'mouse_left':
      moveMouseLeft(ws, arrReq);
      break;
    case 'mouse_right':
      moveMouseRight(ws, arrReq);
      break;
    case 'draw_circle':
      drawCircle(ws, arrReq);
      break;
    case 'draw_rectangle':
      drawRectangle(ws, arrReq);
      break;
    case 'draw_square':
      drawSquare(ws, arrReq);
      break;
    case 'prnt_scrn':
      getScreenShot(ws, arrReq);
      break;
  }
}