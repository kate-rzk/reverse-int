module.exports = 
function reverse(n) {
    let arr = n.toString().split('');
    if (arr[0] == '-') {
        return arr.slice(1, arr.length).reverse().join('')}
    else {
        return arr.reverse().join('')}
}

