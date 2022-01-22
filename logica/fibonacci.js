// fibonacci.js
export default function (num) {
    const result = [0, 1];
    for (var i = 2; i < num; i++) {
      result.push(result[i-2] + result[i-1]);
    }
    return result; 
}