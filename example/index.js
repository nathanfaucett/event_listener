global.eventListener = require("../src/index");


eventListener.on(window, "load", function(e) {
    console.log(e);
});
