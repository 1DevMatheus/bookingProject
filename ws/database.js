const mongoose = require("mongoose");
const URI =
  "mongodb+srv://bookingUser:iEguHqrH60LiRw6h@cluster0.b353v58.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(URI)
  .then(() => console.log("DB is up"))
  .catch((error) => console.log(error));
