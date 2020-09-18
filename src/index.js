module.exports = function check(str, bracketsConfig) {
    let sample = [];
    bracketsConfig.forEach(el => sample.push(el[0].concat(el[1])));;
    let temp = str;
    let a;
    for (let i = 0; i < sample.length; i++) {
        let b = sample[i];
        a = temp.replace(b, '');
        temp = a;
    }

    if (temp === str) {
        console.log('непара');
        console.log(temp);
        return false;
    } else if (temp === '') {
        console.log('пара');
        console.log(temp);
        return true;
    } else return check(temp, bracketsConfig); 
}
