const {mean, median, mode} = require("./app");
const ExpressError = require("./expressError");

describe("mean", function(){
    test("return the average of array of nums", function(){
        let nums = "1,3,5,7";
        let average = mean(nums);
        expect(average).toEqual(4);
    })
    test("return a float as the average of an array of nums", function(){
        let nums = "1,2,3,5,7";
        let average = mean(nums);
        expect(average).toEqual(3.6)
    })
})

describe("median", function(){
    test("return the middle number", function(){
        let nums = "1,2,3,4,5";
        let medianNum = median(nums);
        expect(medianNum).toEqual(3);
    })
    test("return the middle number out of a larger array", function(){
        let nums = "1,2,3,4,5,6,7,8,9";
        let medianNum = median(nums);
        expect(medianNum).toEqual(5);
    })
})

describe("mode", function(){
    test("return most frequent number", function(){
        let nums = "1,2,3,3,4";
        let modeNum = mode(nums);
        expect(modeNum).toEqual(3);
    })
    test("sort and return the most frequent number", function(){
        let nums = "4,8,2,6,0,2,7,4,3, 2";
        let modeNum = mode(nums);
        expect(modeNum).toEqual(2);
    })
})