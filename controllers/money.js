const fs = require("fs");

const money = {
    value: -1
}

const getMoney = (req, res) => {
    res
        .status(200)
        .json({money})
}

const addMoney = (req, res) => {
    console.log(req.body);
    const newSum = money.value + req.body.value;
    money.value = newSum;
    res
        .status(200)
        .json({money})
    writeValue(newSum);
}

const writeValue = (value) => {

    fs.writeFile("./money.json", JSON.stringify({value}), (err) => {
        if (err) 
            return console.log(err);
        console.log("updated with ", value)
    })
}

const readValue = () => {
    fs.readFile("./money.json", "utf-8", (err, data) => {
        money.value = JSON
            .parse(data)
            .value;
    })
}

readValue();

module.exports = {
    getMoney,
    addMoney
}