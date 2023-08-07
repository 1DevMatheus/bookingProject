const mongoose = require("mongoose");
const URI = "";

mongoose.set("useNewUrlParser");
mongoose.set("useFindAndModify");
mongoose.set("useCreateIndex");
mongoose.set("useUnifiedTopology");

mongoose
  .connect(URI)
  .then(() => console.log("DB is up"))
  .catch(() => console.log(err));
