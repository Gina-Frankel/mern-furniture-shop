import mongoose from "mongoose";
const connection = {};

async function connectDb() {
  if (connection.isConnected) {
    //Use existing database connection
    console.log("Using existing connection");
    return;
  }
  //use new database connection
  const db = await mongoose.connect(process.env.MONGO_SRV, {
    //handling depreciations from mongoose
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("DB connected");
  //serverless backend

  connection.isConnected = db.connections[0].readyState;
  console.dir(connection.isConnected);
}

export default connectDb;
