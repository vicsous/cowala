// faxina.js
export default function (a) {
    for (var x in a) {
        if ( a[x] === null) delete a[x]
    }
    return a
}