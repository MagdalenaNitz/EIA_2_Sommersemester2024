"use strict";
var L03_CocktailBar;
(function (L03_CocktailBar) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        let form = document.querySelector("div#form");
        let slider = document.querySelector("input#amount");
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
    }
    function handleChange(_event) {
        // console.log(_event);
        // let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        // console.log(drink.value);
        // let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        // console.log(inputs);
        let order = document.querySelector("div#order"); //sucht nach einem div, der die id "order" trägt (in HTML)
        order.innerHTML = ""; // bei jeder Änderung wird das Reingeschriebene gelöscht
        let formData = new FormData(document.forms[0]); // nimmt aus dem Dokument forms das 0. Formular. Neues Dokument wird angelegt und sofort ausgelegt
        for (let entry of formData) {
            let item = document.querySelector("[value='" + entry[1] + "']"); // alle entries werden durchgegangen; bei den Einträgen wird gesucht 
            let price = Number(item.getAttribute("price")); // aus den Einträgen wird Preis geholt/ermittelt
            order.innerHTML += item.name + "  € " + price; //Name: z.B. Mojito, dahinter steht der zugeordnete Preis
        }
    }
    function displayAmount(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(L03_CocktailBar || (L03_CocktailBar = {}));
//# sourceMappingURL=CocktailBar.js.map