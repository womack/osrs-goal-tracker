// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Express config
const port = process.env.PORT || 3002;
const app = express();
const router = express.Router();

// Controllers

const moneyController = require("./controllers/money");

app.use(cors({origin: "*"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/", express.static("./frontend/build"));

router
    .route("/money")
    .post(moneyController.addMoney)
    .get(moneyController.getMoney);

app.use("/api", router);

app.listen(port, (err) => {
    if (err) 
        return console.log(err);
    console.log("Listening on port", port)
})