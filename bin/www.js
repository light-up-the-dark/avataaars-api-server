#!/usr/bin/env node
require("babel-register")({
    presets: ["react"]
});

// var debug = require("debug")("react-server-render-demo");
var app = require("../app");

app.set("port", process.env.PORT || 3000);

var server = app.listen(app.get("port"), function() {
    console.log("Express server listening on port " + server.address().port);
});
