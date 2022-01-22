export default function (a){
    var souEu = []
    var responsavel = []
    var lista = []
    var b = ''
    for (var i in a) {
        for (var j in a) {
            if (a[i].nome < a[j].nome) {
                b = a[j]
                a[j] = a[i]
                a[i] = b
            }
        }
    }
    for (var i in a) {
        if (a[i].souEu) {
            souEu.push(a[i])
        }
    }
    for (var i in a) {
        if (a[i].responsavel) {
            responsavel.push(a[i])
        }
    }
    for (var i in a) {
        if (!a[i].responsavel && !a[i].souEu) {
            lista.push(a[i])
        }
    }
    return a
}