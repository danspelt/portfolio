"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./routes/index");
const express = require("express");
const session = require("express-session");
const expressHbs = require("express-handlebars");
const app = express();
// Middleware
app.engine("hbs", expressHbs({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));
app.use(session({
    secret: "verygoodsecret",
    resave: false,
    saveUninitialized: true,
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', index_1.default);
app.listen(3000, () => {
    console.log('listening on port 3000!');
});
//# sourceMappingURL=app.js.map