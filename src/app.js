const express = require("express");

const app = express();



app.get("/", (request, response) => {
  response.send("<div>Hello from express</div>");
});
