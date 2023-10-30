let arr = [1, 2, 3, 'p', 'f', 6, 9, 'a'];

let numArr = arr.filter(item => !isNaN(item));

let lenght = numArr.length;
let resultSum = numArr.reduce((sum, current) => sum + current, 0);
function average(lenght, resultSum) {
    return resultSum / lenght;
}
let resAverage = average(lenght, resultSum);
console.log('average ' + resAverage);