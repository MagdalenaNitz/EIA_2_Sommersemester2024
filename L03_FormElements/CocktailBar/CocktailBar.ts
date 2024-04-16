namespace L03_CocktailBar {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Start");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
    }

    function handleChange(_event: Event): void {
        // console.log(_event);
        // let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        // console.log(drink.value);

        // let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        // console.log(inputs);

        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order"); //sucht nach einem div, der die id "order" trägt (in HTML)
        order.innerHTML = ""; // bei jeder Änderung wird das Reingeschriebene gelöscht

        let formData: FormData = new FormData(document.forms[0]); // nimmt aus dem Dokument forms das 0. Formular. Neues Dokument wird angelegt und sofort ausgelegt
        for (let entry of formData) {
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']"); // alle entries werden durchgegangen; bei den Einträgen wird gesucht 
            let price: number = Number(item.getAttribute("price")); // aus den Einträgen wird Preis geholt/ermittelt

            order.innerHTML += item.name + "  € " + price; //Name: z.B. Mojito, dahinter steht der zugeordnete Preis
        }
    }

    function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);
    }
}