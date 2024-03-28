"use strict";
var RandomPoem;
(function (RandomPoem) {
    let subject = ["Hildegard", "Gertrud", "Günther", "Berta", "Frieda", "Ingo"];
    let predicate = ["liebt", "braucht", "mag", "hasst", "zerstört", "studiert"];
    let object = ["Tomaten", "Rosen", "Freiburg", "Katzen", "Auberginen", "Unwetter"];
    // console.log(subject);
    // console.log(predicate);
    // console.log(object);
    for (let i = 6; i >= 1; i--) {
        //console.log (i);
        console.log(getVerse(subject, predicate, object));
    }
    function getVerse(_subject, _predicate, _object) {
        let vers = "";
        let resultSubject = Math.floor(Math.random() * _subject.length);
        let resultPredicate = Math.floor(Math.random() * _predicate.length);
        let resultObject = Math.floor(Math.random() * _object.length);
        vers += _subject.splice(resultSubject, 1) + " ";
        vers += _predicate.splice(resultPredicate, 1) + " ";
        vers += _object.splice(resultObject, 1) + " ";
        return vers;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=script.js.map