const { Storage } = require('@google-cloud/storage');

const storage = new Storage({ keyFilename: './credentials.json' });

const bucketName = 'signsay-store-1';
const filename = 'credentials.json';
(async function () {
  const res = await storage.bucket(bucketName).upload('./' + filename);
  const url = res[0].metadata.mediaLink;
  await storage.bucket(bucketName).file(filename).makePublic();
  const axios = require('axios');
  const pkg = await axios.get(url).then((res) => res.data);
  console.log(pkg.name);
})();
