namespace Einkaufsliste {
    export interface einkauf {
        name: string;
        quantity: number;
        lastBought: string;
        wasBought: boolean;
        comment: string;
    }

    export interface  Data {
        [category: string]: einkauf[];
    }
    export let data: einkauf[]= [
        
            {name: "Banane", quantity: 1, lastBought: "14.02.2024", wasBought: true, comment: "noch leicht grün"}
        ,
        
            {name: "Joghurt", quantity: 2, lastBought: "15.03.2024", wasBought: true, comment: "Vanillegeschmack"}
        ,
        
            {name: "Schokoladenkuchen", quantity: 1, lastBought: "16.04.2024", wasBought: false, comment: "Dr Oetker"}
        ,

            {name: "Peanutbutter", quantity: 2, lastBought: "17.03.2024", wasBought: true, comment: "kleine Packung"}
        ,
        
            {name: "Forelle", quantity: 3, lastBought: "05.10.2023", wasBought: false, comment: "frisch"}
        ,
        
            {name: "Schokobons", quantity: 1, lastBought: "25.04.2024", wasBought: true, comment: "Maxipackung"}
        ,
        
            {name: "Mineralwasser", quantity: 2, lastBought: "07.04.2024", wasBought: false, comment: "Kisten"}
        ,
        
            {name: "Waschmittel", quantity: 1, lastBought: "17.04.2024", wasBought: false, comment: "color"}
        ,
        
            {name: "Mascara", quantity: 1, lastBought: "30.12.2023", wasBought: true, comment: "wasserfest"}
        ]  
};