const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

// use express
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// connect to mongo db
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost:27017/fitnesstracker",
	{
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
		useCreateIndex: true,
	}
);


app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

// start up the server 
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
