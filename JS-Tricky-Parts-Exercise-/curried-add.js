function curriedAdd(total) {
  if (!total) return 0;
  return function addNext(num) {
    if (!num) return total;
    total += num;
    return addNext;
  };
}
console.log(curriedAdd(2));
module.exports = { curriedAdd };
