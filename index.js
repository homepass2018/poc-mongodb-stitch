const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://prefTest:W51uRQkkkkwLtD2g@cluster0-shard-00-00-1j8k4.mongodb.net:27017,cluster0-shard-00-01-1j8k4.mongodb.net:27017,cluster0-shard-00-02-1j8k4.mongodb.net:27017/prefTest?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
console.time('login');
let db;
MongoClient.connect(url, { useNewUrlParser: true }).then(client => {
  // console.log(db)
  console.timeLog('login', 'connected');
  db = client.db();
  const col =  db.collection('accounts')
  console.time('account');
  return col.find({}).toArray();
})
.then(result => {
  console.timeLog('account', result);
})

// const {
//   StitchClientFactory,
// } = require("mongodb-stitch");

// let client;
// console.log('starting')
// StitchClientFactory.create("homepass2-hyqgh").then((theClient) => {
//   client = theClient;
//   console.time('data');
//   // const APIKey = new UserApiKeyCredential("hOSQYeenMtWBxwmK6tedSPRs7OgKqG7CuRzh8OHWmVor7KTsirR3WKoakCDv8jEg")
//   return client.login();
// })
// .then((user) => {
//   console.timeLog('data', user.id);
//   console.time('data');
//   const db = client.service('mongodb', 'mongodb-atlas2').db('prefTest')
//   const productCol = db.collection('accounts');
//   return productCol.find({}).limit(50).execute()
// })
// .then(result => {
//   console.timeLog('data', result);
// })

// const {
//   Stitch,
//   RemoteMongoClient,
//   UserApiKeyCredential
// } = require("mongodb-stitch-server-sdk");

// const client = Stitch.initializeDefaultAppClient("homepass2-hyqgh")
// const APIKey = new UserApiKeyCredential("JePRhHLt88QsgUIy3FQsBwek2I8KHX63QAkIBR8sXUzn9hLMiiHckriAMp1Nupqt")
// const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas2').db('prefTest');
// console.time('login');
// client.auth.loginWithCredential(APIKey).then(user => {
//   console.timeLog('login', user.id);
//   console.time('accounts1');
//   const productCol = db.collection('accounts');
//   return productCol.find({}).asArray();
// }).then(data => {
//   console.timeLog('accounts1', data);
//   console.time('accounts2');
//   const productCol = db.collection('accounts');
//   return productCol.find({}).asArray();
// }).then(data => {
//   console.timeLog('accounts2', data);
//   client.close();
// })
// .catch(err => {
//   console.log(err);
//   client.close();
// })


// stitch
// login: 1032 ms
// account get: 700ms

// mongoclient
// connect: 447 ms
// account get: 53ms

// https://support.mongodb.com/case/00529662

// db.serverConfig.poolSize

// {
//   // Buffering means mongoose will queue up operations if it gets
//   // disconnected from MongoDB and send them when it reconnects.
//   // With serverless, better to fail fast if not connected.
//   bufferCommands: false, // Disable mongoose buffering
//   bufferMaxEntries: 0 // and MongoDB driver buffering
//   poolSize:1
// }

// https://console.scalegrid.io/application/mongoclusters