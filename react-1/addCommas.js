function addCommas(number) {
   number = String(number);
   if(number.length < 3) return number;
   
   let remainder = number.length;
   let result = "";
  
   while(remainder > 3){
    result = "," + number.slice(remainder -3, remainder) + result;
    remainder-=3;
   }
   result = number.slice(0, remainder) + result;
   return result;
   
}

module.exports = addCommas;