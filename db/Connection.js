const mongoose = require("mongoose");

const URI =
  "mongodb://hamza:123@cluster0-shard-00-00.l9mud.mongodb.net:27017,cluster0-shard-00-01.l9mud.mongodb.net:27017,cluster0-shard-00-02.l9mud.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-dqywx4-shard-0&authSource=admin&retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("db connected");
};

module.exports = connectDB;
