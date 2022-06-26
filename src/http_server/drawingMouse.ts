import robot from 'robotjs';
import { WebSocket } from 'ws';

export const drawSquare = (ws: WebSocket, arrReq: string[]) => {
  const width: number = Number(arrReq[1]);
  let {x, y} = robot.getMousePos();
  robot.setMouseDelay(2);
  robot.mouseToggle('down');

  for(let j = 0; j < 4; j++){

    for(let i = 0; i < width; i++){
      if(j === 0) x += 1;
      if(j === 1) y -= 1;
      if(j === 2) x -= 1;
      if(j === 3) y += 1;
      robot.moveMouse(x, y);
    }
  }

  robot.mouseToggle('up');
  ws.send(`draw_square ${width}`);
}

export const drawRectangle = (ws: WebSocket, arrReq: string[]) => {
  const width: number = Number(arrReq[1]);
  const length: number = Number(arrReq[2]);
  let {x, y} = robot.getMousePos();
  robot.setMouseDelay(2);
  robot.mouseToggle('down');

  for(let j = 0; j < 4; j++){
    const coordinate: number = j % 2 === 0 ? width : length;

    for(let i = 0; i < coordinate; i++){
      if(j === 0) x += 1;
      if(j === 1) y -= 1;
      if(j === 2) x -= 1;
      if(j === 3) y += 1;
      robot.moveMouse(x, y);
    }
  }

  robot.mouseToggle('up');
  ws.send(`draw_rectangle ${width}`);
}

export const drawCircle = (ws: WebSocket, arrReq: string[]) => {
  const radius: number = Number(arrReq[1]);

  let {x, y} = robot.getMousePos();
  robot.setMouseDelay(2);
  robot.mouseToggle('down');
  const centerX: number = x + radius;
  const centerY: number = y;

  for(let j = 0; j < 4; j++){

    for(let i = 0; i < radius; i++){
      if(j === 0 || j === 1) {
        x += 1;
        y = Math.sqrt((radius + x - centerX)*(radius - x + centerX)) + centerY;
      } else {
        x -= 1;
        y = -Math.sqrt((radius + x - centerX)*(radius - x + centerX)) + centerY;
      }
      robot.moveMouse(x, y);
    }
  }

  robot.mouseToggle('up');
  ws.send(`draw_rectangle ${radius}`);
}