const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const logger = require("morgan");
const mongoose = require("mongoose");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const url = `${process.env.GATSBY_MONGO_ATLAS}`;
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// listen for server connection to DB
// handle initial connection errors
connect.then(() => console.log(`Connected correctly to: ${url}`),
  err => console.log(err)
);

// launch express app
const app = express();

app.use(logger("dev"));
// parse json and store key prop values
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// mount express-graphQL as a route handler
app.use(
  `/graphql`,
  graphqlHTTP({
    schema: require(`./models/schema`),
    graphiql: true,
  })
);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // only providing error in local development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;