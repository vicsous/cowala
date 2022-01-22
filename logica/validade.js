// validade.js
export default function (x,y){
    function parseDia (z){
        z = z.replace('d','');
        return parseInt(z, 10)
    }
    const dias = parseDia(y) * 86400000
    const vencimento = (new Date(x).getTime()) + dias
    if (new Date().getTime() < vencimento) return true
    return false
}