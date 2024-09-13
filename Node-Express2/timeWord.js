numKey = {
    minutes: {
        "00": "o'clock",
        "01": "oh one",
        "02": "oh two",
        "03": "oh three",
        "04": "oh four",
        "05": "oh five",
        "06": "oh six",
        "07": "oh seven",
        "08": "oh eight", 
        "09": "oh nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen",
        "20": "twenty",
        "30": "thirty",
        "40": "fourty",
        "50": "fifty",
        "60": "sixty",
    },
    
    hours: {
        "01": "one",
        "02": "two",
        "03": "three",
        "04": "four",
        "05": "five",
        "06": "six",
        "07": "seven",
        "08": "eight",
        "09": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "one",
        "14": "two",
        "15": "three",
        "16": "four",
        "17": "five",
        "18": "six",
        "19": "seven",
        "20": "eight",
        "21": "nine", 
        "22": "ten",
        "23": "eleven",
        "00": "twelve",
    }
}

function timeWord(numTime){
    let hours = numTime[0] + numTime[1];
    let minutes = numTime[3] + numTime[4];
    let dayNight; hours <= 12 ? dayNight = "am" : dayNight = "pm";
   
    if((hours > 23 || hours < 0) || (minutes > 59 || minutes < 0)){
        return "That number is out of range!"
    }

    if(minutes > 20){
        let first = minutes[0] + "0";
        let second = "0" + minutes[1];
        minutes = numKey.minutes[first] + " " + numKey.hours[second];
    } else {
        minutes = numKey.minutes[minutes]
    } 
    if(minutes == "o'clock"){
        if(hours == 12){
            return "noon";
        } else if(hours == "00") {
            return  "midnight";
        }
    } else {
    hours = numKey.hours[hours]
   }

    return hours + " " + minutes + " " + dayNight;
}

console.log(timeWord("11:01"));

module.exports = timeWord