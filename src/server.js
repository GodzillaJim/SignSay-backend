const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const path = require('path');

const app = express();

const {
  storeVideo,
  retrieveVideos,
  sendSentences,
} = require('./controllers/controllers');

const port = process.env.PORT || 5000;
const Router = express.Router();

Router.get('/video', function (req, res) {
  const retrieved = retrieveVideos(req, res);
});
Router.post('/video', function (req, res) {
  const stored = storeVideo(req, res);
});
Router.get('/sentences', function (req, res) {
  const sentences = sendSentences(req, res);
});
Router.post('/pay', function (req, res) {
  const { username, password } = req.body;
  if (username === 'GodzillaJim') {
    if (password === 'sherlockH@lmes05') {
      return res.send(true);
    }
  }
  return res.json(false);
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(fileUpload({ createParentPath: true }));
// app.use(express.static(path.join(__dirname, 'client/')));
app.use(express.static(path.join(__dirname, 'videos/')));
app.get('/contribute', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});
app.get('/sign', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});
app.use(express.static(path.join(__dirname, 'client/')));
app.use(Router);

app.listen(port, (err) => {
  if (err) {
    return console.log(err.message);
  }
  console.log('Listening on Port: ' + port);
});
