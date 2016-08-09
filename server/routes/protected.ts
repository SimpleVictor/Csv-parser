import { Router, Response, Request, NextFunction } from "express";
var multer = require('multer');
var DIR = './uploads/';
var upload = multer({dest: DIR});
const protectedRouter = Router();

console.log(multer);

protectedRouter.use(multer({
    dest: DIR,
    rename: function (fieldname, filename) {
        return filename + Date.now();
    },
    onFileUploadStart: function (file) {
        console.log(file.originalname + ' is starting ...');
    },
    onFileUploadComplete: function (file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path);
    }
}));


protectedRouter.get("/", (request: Request, res: Response) => {
    res.end('file catcher example');

});

protectedRouter.post("/", (request: Request, response: Response) => {
    upload(request, response, function (err) {
        if (err) {
            return response.end(err.toString());
        }

        response.end('File is uploaded');
    });
});

export { protectedRouter }





