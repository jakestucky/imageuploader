// const express = require('express');
// const app = express();
// const port = 3000;
// app.get('/', (req, res) => {
//   res.send('hello people');
// });
// app.listen(port, () => {
//   console.log('listening to the port: ' + port);
// });
// var multer = require('multer');
// var upload = multer({ storage: storage });
// app.post('/single', upload.single('profile'), (req, res) => {
//   try {
//     res.send(req.file);
//   } catch (err) {
//     res.send(400);
//   }
// });
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './upload');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
