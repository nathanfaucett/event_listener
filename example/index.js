global.eventListener = require("../src/index");


eventListener.on(window, "mousemove", function handler(e) {
    console.log(e);
    eventListener.off(window, "mousemove", handler);
});

eventListener.emit(window, "mousemove", {
    which: 2,
    x: 10,
    y: 213
});
