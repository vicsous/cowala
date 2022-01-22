import fibonacci from './fibonacci.js';
import faxina from './faxina.js';
import validade from './validade.js';
import classificador from './classificador.js';

console.log('1 - fibonacci.js:\n',fibonacci(6),'\n');
console.log('2 - classificador.js:\n', classificador([
    {nome: 'b', responsavel: true,  souEu:true},
    {nome: 'a', responsavel: false, souEu:false},
    {nome: 'z', responsavel: false, souEu:false},
    {nome: 't', responsavel: false, souEu:false },
    {nome: 'd', responsavel: false, souEu: false},
    {nome: 'c', responsavel: true,  souEu:false}
]), '\n');
console.log('3 - faxina.js:\n ', JSON.stringify(faxina({"fizz": "buzz", "foo": null, "bar": 42})),'\n');
console.log('4 - validade.js:\n',validade("2021-11-17T20:40:09.503Z", "10d"),'\n');
