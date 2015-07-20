var eventListener = global.eventListener = require("../..");


eventListener.on(window, "mousemove", function handler(e) {
    console.log(e);
    eventListener.off(window, "mousemove", handler);
});

eventListener.emit(window, "mousemove");
