const mega = require('mega');

const storage = mega(
  { email: 'catherineburnham68@gmail.com', password: 'sherlockH@lmes05' },
  (res, err) => {
    if (err) return console.log(err);
    console.log(res);
  }
);
console.log(storage.files);
