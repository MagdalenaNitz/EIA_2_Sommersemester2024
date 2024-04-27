function myFunction() {
    let x = <HTMLInputElement>document.getElementById("warensuche");     //Element mit der ID "warensuche" ird ausgewählt//
    let y = <HTMLInputElement>document.getElementById("kategorie");     //Element mit der ID "kategorie" ird ausgewählt//
    let z = <HTMLInputElement>document.getElementById("notiz");         //Element mit der ID "notiz" ird ausgewählt//
    console.log(x.value);       //Wert von "warensuche" wird in der Konsole ausgegeben//
    console.log(y.value);       //Wert von "kategorie" wird in der Konsole ausgegeben//
    console.log(z.value);       //Wert von "notiz" wird in der Konsole ausgegeben//
}
function handleLoad (_event: Event): void {
    console.log ("Start");
    generateContent (data);
}

function generateContent (_data:Product []) {
    for (let entry of _data) {
        addEntry (entry)
    }
}
//Änderung der Hintergrundfarbe und Angabe von Datum und Uhrzeit//
function myCheck() { 
    let myElement = <HTMLElement>document.getElementById("feld01");     //Feld 1 wird ausgewählt//
    myElement.style.background = "lightgreen";     //bei Clicken des Buttons, wird das Feld grün//
    console.log(new Date().toLocaleString());      //aktuelles Datum und Uhrzeit werden in Konsole augegeben//
}

function myCheck02(){
    let myElement = <HTMLElement>document.getElementById("feld02");     //Feld 2 wird ausgewählt//
    myElement.style.background = "lightgreen";     //bei Clicken des Buttons, wird das Feld grün//
    console.log(new Date().toLocaleString());
}

function myCheck03(){
    let myElement = <HTMLElement>document.getElementById("feld03");   //Feld 3 wird ausgewählt//  
    myElement.style.background = "lightgreen";      //bei Clicken des Buttons, wird das Feld grün//
    console.log(new Date().toLocaleString());
}

function myCheck04(){
    let myElement = <HTMLElement>document.getElementById("feld04");     //Feld 4 wird ausgewählt//
    myElement.style.background = "lightgreen";      //bei Clicken des Buttons, wird das Feld grün//
    console.log(new Date().toLocaleString());
}

function myCheck05(){
    let myElement = <HTMLElement>document.getElementById("feld05");     //Feld 5 wird ausgewählt//
    myElement.style.background = "lightgreen";      //bei Clicken des Buttons, wird das Feld grün//
    console.log(new Date().toLocaleString());
}

function myCheck06(){
    let myElement = <HTMLElement>document.getElementById("feld06");     //Feld 6 wird ausgewählt//
    myElement.style.background = "lightgreen";      //bei Clicken des Buttons, wird das Feld grün//
    console.log(new Date().toLocaleString());
}

function myCheck07(){
    let myElement = <HTMLElement>document.getElementById("feld07");     //Feld 7 wird ausgewählt//
    myElement.style.background = "lightgreen";      //bei Clicken des Buttons, wird das Feld grün//
    console.log(new Date().toLocaleString());
}

function myCheck08(){
    let myElement = <HTMLElement>document.getElementById("feld08");     //Feld 8 wird ausgewählt//
    myElement.style.background = "lightgreen";      //bei Clicken des Buttons, wird das Feld grün//
    console.log(new Date().toLocaleString());
}

    function myCheck09(){
    let myElement = <HTMLElement>document.getElementById("feld09");     //Feld 9 wird ausgewählt//
    myElement.style.background = "lightgreen";      //bei Clicken des Buttons, wird das Feld grün//
    console.log(new Date().toLocaleString());
}