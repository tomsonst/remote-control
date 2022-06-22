import robot from 'robotjs';

export const getMousePosition = (ws) => {
  const mousePosition = robot.getMousePos();
  ws.send(`mouse_position ${mousePosition.x},${mousePosition.y}`)
}

export const moveMouseUp = (ws, arrReq) => {
  const offset = Number(arrReq[1]);
  const {x, y} = robot.getMousePos();
  const moveYPx = Number(y) - offset;
  robot.moveMouse(x, moveYPx);
  ws.send(`mouse_up ${moveYPx}`);
}

export const moveMouseDown = (ws, arrReq) => {
  const offset = Number(arrReq[1]);
  const {x, y} = robot.getMousePos();
  const moveYPx = Number(y) + offset;
  robot.moveMouse(x, moveYPx);
  ws.send(`mouse_up ${moveYPx}`);
}

export const moveMouseLeft = (ws, arrReq) => {
  const offset = Number(arrReq[1]);
  const {x, y} = robot.getMousePos();
  const moveXPx = Number(x) - offset;
  robot.moveMouse(moveXPx, y);
  ws.send(`mouse_up ${moveXPx}`);
}

export const moveMouseRight = (ws, arrReq) => {
  const offset = Number(arrReq[1]);
  const {x, y} = robot.getMousePos();
  const moveXPx = Number(x) + offset;
  robot.moveMouse(moveXPx, y);
  ws.send(`mouse_up ${moveXPx}`);
}