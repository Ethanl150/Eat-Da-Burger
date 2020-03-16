const express = require("express");
const app = express();
const express_handlebars = require("express-handlebars");

app.use(express.static("public"));

const routes = require("./controllers/burgers_controller.js")

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", express_handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});