const express = require("express");
global.fetch = require("node-fetch");
const app = express();
app.set("view engine", "pug");

async function getQuote(response) {
    const url = "https://api.kanye.rest/";
    const data = await (await fetch(url)).json();
    response.render("index", { quote: data.quote });
}

app.get("/", function (req, res) {
    getQuote(res).catch(error => {
        console.error(error);
    });
});


app.listen(3000, function () {
    console.log("listening on port 3000...")
});