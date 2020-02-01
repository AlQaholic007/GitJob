var dbHost = process.env.dbHost || "localhost";
module.exports = {
  name: "GitJob",
  title: "GitJob",
  commands: {
    package:
      "electron-packager electron.js GitJob --electronVersion=2.0.12 --overwrite --icon=/public/images/logo/logo.png --prune=true --out=release",
    build: ""
  },
  http: {
    host: "localhost",
    port: 8080
  },
  author: "Soham Parekh",
  version: "1.0.0",
  db: {
    connectionUri: "mongodb://" + dbHost + ":27017/jobRec",
    params: {},
    collections: ["moment", "user", "feeling", "ask"]
  }
};
