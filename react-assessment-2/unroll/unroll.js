function unroll(squareArray) {
let unrolledArr = []
squareArray.map(arr => arr.map(item => unrolledArr.push(item)));
return unrolledArr;
};

module.exports = unroll;
