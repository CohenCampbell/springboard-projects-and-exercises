// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  if (str2.length < str1.length) return false;
  let count1 = 0;
  let count2 = 0;

  while (count2 < str2.length) {
    if (str1[count1] == str2[count2]) count1++;
    if (count1 === str1.length) return true;
    count2++;
  }
  return false;
}
