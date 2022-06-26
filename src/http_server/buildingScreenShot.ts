import robot from 'robotjs';
import Jimp from 'jimp';
import { WebSocket } from 'ws';

export const getScreenShot = async(ws: WebSocket) => {
  const { x, y } = robot.getMousePos();
  const screenShot: robot.Bitmap = robot.screen.capture(x, y, 200, 200);

  const image: Jimp = new Jimp({ data: screenShot.image, width: 200, height: 200 })

  const base64: Buffer = await image.getBufferAsync(Jimp.MIME_PNG);
  
  ws.send(`prnt_scrn ${base64.toString("base64")}`);
}