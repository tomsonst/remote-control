import * as fs from 'fs';
import * as path from 'path';
import * as http from 'http';

export const httpServer: http.Server = http.createServer(function (req, res) {
    const __dirname: string = path.resolve(path.dirname(''));
    const file_path: string = __dirname + (req.url === '/' ? '/front/index.html' : '/front' + req.url);
    fs.readFile(file_path, function (err, data) {
        if (err) {
            res.writeHead(404);
            res.end(JSON.stringify(err));
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
});
