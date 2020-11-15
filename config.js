require('dotenv').config();
const dbName = 'recipes';
module.exports= {
   PORT: process.env.PORT || 5555,
   dbName,
   APPNAME: 'recipes',
   DBURI: `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@cluster0-mznto.mongodb.net/${dbName}?retryWrites=true&w=majority`,  
}