var express = require("express");
var app = express();

app.set("view engine", "ejs");
var path = require("path");
app.use(express.static(path.join(__dirname, "public")));
// Home Route
app.get("/", function(req, res) {
    res.render("home", {
        title: "Product list",
        products: ["desktop", "laptop", "tablet"]
    });
});
//help Route
app.get("/help", function(req, res) {
    res.render("help.ejs");

});
//contact Route
app.get("/contact", function(req, res) {
    res.render("contact.ejs");
});

app.get("/product/:product_number?", function(req, res) {
    var product_number = req.params.product_number;
    res.send("Welcome to product page" + product_number);

});


app.listen("8000", function() {
    console.log("The server is alive on port 8000");
});