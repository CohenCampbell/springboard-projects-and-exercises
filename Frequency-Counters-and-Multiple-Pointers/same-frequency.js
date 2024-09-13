// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  num1 = num1.toString().split("").sort();
  num2 = num2.toString().split("").sort();
  if (num1.length !== num2.length) return false;
  for (let i = 0; i < num1.length; i++) {
    if (num1[i] !== num2[i]) return false;
  }
  return true;
}
