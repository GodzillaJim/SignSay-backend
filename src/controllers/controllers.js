const fs = require('fs');
const path = require('path');
const sentences = require('../data/data.js');
const storeVideo = async (req, res) => {
  try {
    if (!req.files) {
      return res.send(false);
    }
    let recording = req.files.video;
    const date = Date.now();
    const uploadFolder = path.join(
      __dirname,
      '../',
      'videos',
      `${JSON.stringify(date)}-${recording.name}`
    );
    recording.mv(uploadFolder, function (error) {
      if (error) {
        res.send(error);
        return console.log(error);
      }
      return res.send(true);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const retrieveVideos = (req, res) => {
  const files = [];
  const folder = path.join(__dirname, '../', 'videos');
  fs.readdir(folder, (err, files) => {
    if (err) {
      return res.send(false);
    }
    files.forEach((file) => {
      files.push(file);
    });
    return res.json(files);
  });
};
const sendSentences = (req, res) => {
  console.log(sentences)
  res.json(sentences);
};
module.exports = { storeVideo, retrieveVideos, sendSentences };
