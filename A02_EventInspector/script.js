"use strict";
var eventInspector;
(function (eventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        window.addEventListener("mousemove", setInfoBox);
        window.addEventListener("click", logInfo);
        window.addEventListener("keyup", logInfo);
        document.querySelector("#b1").addEventListener("click", customEvent);
    }
    document.addEventListener("mousemove", setInfoBox);
    let body = document.querySelector("body");
    body.addEventListener("keyup", logInfo);
    body.addEventListener("click", logInfo);
    function setInfoBox(_event) {
        let x = _event.pageX + 10;
        let y = _event.pageY + 10;
        let spanForMouseCursor = document.querySelector("span");
        spanForMouseCursor.style.left = x + "px";
        spanForMouseCursor.style.top = y + "px";
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
    function customEvent(_event) {
        console.log("button was pressed");
        let data = "This is my data.";
        let button1 = document.querySelector('b1');
        let event = new CustomEvent("click", { bubbles: true, detail: { key: data } });
        button1.dispatchEvent(event);
        console.log(event + " event wurde erzeugt");
    }
})(eventInspector || (eventInspector = {}));
//# sourceMappingURL=script.js.map