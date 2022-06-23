import robot from 'robotjs';
import Jimp from 'jimp';

export const getScreenShot = async(ws, arrReq) => {
  const { x, y } = robot.getMousePos();
  const screenShot = robot.screen.capture(x, y, 200, 200);

  const image = new Jimp({ data: screenShot.image, width: 200, height: 200 })

  const base64 = await image.getBufferAsync(Jimp.MIME_PNG);
  
  ws.send(`prnt_scrn ${base64.toString("base64")}`);
}