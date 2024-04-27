namespace Einkaufsliste {
    // Laden des Fensters
    window.addEventListener("load", handleLoad);

    // Funktion, die aufgerufen wird, wenn das Fenster geladen wird
    function handleLoad(_event: Event): void {
        console.log("Start");

        // Änderungen abhören
        const form = document.querySelector("form");
        if (form) {
            form.addEventListener("change", handleChange);
        }

        // Generiere Item Divs Funktion aufrufen
        generateContent(data);
    }

    // Funktion zum Generieren von Inhalten
    function generateContent(_data: einkauf[]): void {
        // Füge für jedes Produkt einen Eintrag hinzu
        for (let entry of _data) {
            addEntry(entry);
        }
    }
    // Exportierte Funktion zum Hinzufügen eines Eintrags
    export function addEntry(_product: einkauf): void {
    //Auf shoppingList zugreifen
    const einkaufslisteDiv: HTMLDivElement = document.getElementById("Einkaufsliste") as HTMLDivElement;

    //Dsa erstellte Element soll ein div werden mkt der Klasse entry
    const entryDiv: HTMLDivElement = document.createElement("div");
    entryDiv.classList.add("entry");

    //HTML Schnipsel für das zu erstellende Div. Die Daten aus data.ts werden abgerufen und an die richtige Stelle gesetzt.
    entryDiv.innerHTML = `
        <div id="wasBought">
            Bought?
            <input type="checkbox" name="NextPurchase" ${_product.wasBought ? "checked" : ""}/> 
        </div>
        <div id="quantity"> 
            Quantity
            <input type="number" name="Stepper" step="1" min="1" max="100" value="${_product.quantity}" required />
        </div>
        <div id="comment"> 
            Comment
            <textarea name="comment" rows="2" placeholder="details...">${_product.comment}</textarea>
        </div>
        <div id="date"> 
            Last bought: 
            <input type="lastBought" name="today" value="${_product.lastBought}">
        </div>
        <div class="deleteButton">
            <button> X </button>
        </div>
    `;

    //Das neue Div wird dem SHippinglist Div als Kind untergeordnet
    einkaufslisteDiv.appendChild(entryDiv);

    //Button zum Löschen des Eintrags
    const deleteButton: HTMLButtonElement = entryDiv.querySelector('.deleteButton > button') as HTMLButtonElement;
    if (deleteButton) {
        deleteButton.addEventListener('click', deleteEntry);
    }
}
    // Funktion zum Verarbeiten von Formularänderungen
    function handleChange(event: Event): void {
        const input: HTMLInputElement = event.target as HTMLInputElement;
        console.log(input.value);
    }

    // Funktion zum Löschen eines Eintrags
    function deleteEntry(event: MouseEvent): void {
        const deleteButton: HTMLButtonElement = event.target as HTMLButtonElement;
        const entryDiv: HTMLDivElement | null = deleteButton.closest('.entry') as HTMLDivElement | null;
        if (entryDiv) {
            entryDiv.remove();
            console.log("deleteEntry wurde aufgerufen.")
        }
    }
    
}