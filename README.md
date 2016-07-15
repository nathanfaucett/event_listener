event listener
=======

event listener for the browser and node.js

```javascript
var eventListener = require("@nathanfaucett/event_listener");


eventListener.on(window, "mousemove", function handler(e) {
    console.log(e);
    eventListener.off(window, "mousemove", handler);
});
```
