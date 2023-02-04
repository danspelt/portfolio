import router from "./routes/index";
const express = require("express");
const session = require("express-session");
const expressHbs = require("express-handlebars");

const app = express();

// Middleware
app.engine("hbs", expressHbs({ extname: ".hbs" }));
app.set("view engine", "hbs");

app.use(express.static(__dirname + "/public"));
app.use(
  session({
    secret: "verygoodsecret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', router)
app.listen(3000, () => {
  console.log('listening on port 3000!');
});
    