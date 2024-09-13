// add whatever parameters you deem necessary
function constructNote(msg, letters) {
  if (msg.length > letters.length) return false;
  const msgObj = {};
  const lettObj = {};
  for (lett of msg) {
    msgObj[lett] = (msgObj[lett] += 1) || 1;
  }
  for (lett of letters) {
    lettObj[lett] = (lettObj[lett] += 1) || 1;
  }
  for (let key of Object.keys(msgObj)) {
    if (msgObj[key] > lettObj[key]) return false;
  }
  return true;
}
