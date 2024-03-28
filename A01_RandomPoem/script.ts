namespace RandomPoem {

    let subject: string [] = ["Hildegard", "Gertrud", "Günther", "Berta", "Frieda", "Ingo"];
    let predicate: string [] = ["liebt", "braucht", "mag", "hasst", "zerstört", "studiert"];
    let object: string [] = ["Tomaten", "Rosen", "Freiburg", "Katzen", "Auberginen", "Unwetter"];

    // console.log(subject);
    // console.log(predicate);
    // console.log(object);

    for (let i: number = 6; i >= 1; i --) {
        //console.log (i);

        console.log(getVerse (subject, predicate, object));
    }

    function getVerse (_subject: string [], _predicate: string[], _object: string[]): string {
        let vers: string = "";

        let resultSubject: number = Math.floor(Math.random()* _subject.length);
        let resultPredicate: number = Math.floor(Math.random()* _predicate.length);
        let resultObject: number = Math.floor(Math.random()* _object.length);

        vers += _subject.splice(resultSubject, 1) + " ";
        vers += _predicate.splice(resultPredicate, 1) + " ";
        vers += _object.splice(resultObject, 1) + " ";

        return vers;
    }

}