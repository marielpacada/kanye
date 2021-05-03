const express = require("express");
global.fetch = require("node-fetch");
const app = express();
app.set("view engine", "pug");

async function APIControl(response) { 
    // getting kanye quote
    const kanye_url = "https://api.kanye.rest/";
    const kanye_data = await (await fetch(kanye_url)).json();

    // getting background image
    const image_url = "https://api.unsplash.com//photos/random?client_id=7Ufxy23MqWfJC6thniMUB5LpqxIMFS3Ly1zhdGdRrkI&orientation=landscape";
    const image_data = await (await fetch(image_url)).json();
    const image_src = image_data.urls.full;

    response.render("index", {
        quote: kanye_data.quote,
        src: image_src
    });
}

app.get("/", function (req, res) {
    APIControl(res).catch(error => {
        console.error(error);
    });
});

app.listen(3000, function () {
    console.log("listening on port 3000...")
});








// fetch(URL)
//   .then(res=>{return res.blob()})
//   .then(blob=>{
//     var img = URL.createObjectURL(blob);
//     // Do whatever with the img
//     document.getElementById('img').setAttribute('src', img);
//   })