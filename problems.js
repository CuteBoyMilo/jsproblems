function divideByThree(num) {
    /* Returns the passed in number argument divided by three. */
    // Your code here
    const i=num/3;
    console.log(i);
    return i;
}
divideByThree(5);
function averageOfTwo(num1, num2) {
    /* Returns the average of two numbers, num1 and num2. */
    // Your code here
    const i=(num1+num2)/2;
    console.log(i);
    return i;

};
averageOfTwo(9,5);
function averageOfFour(num1, num2, num3, num4) {
    return (num1+num2+num3+num4)/4;
    /* Takes in four numbers. The function should return the average of all of
    the numbers. */
    // Your code here
};
console.log(averageOfFour(3,4,5,6));
function doubler(nums) {
    let doubledNums=[];

    for (let i=0;i<nums.length;i++) {
        let oldNum=nums[i];
        let newNum=oldNum*2;
        doubledNums=doubledNums.concat(newNum);
    }
    return doubledNums;
    /* Takes an array of numbers and returns a new array where every element of
    the original array is multiplied by 2. */
    // Your code here
};
console.log(doubler([2,3,4,5]));

function combineArrays(arr1, arr2) {

    let newArr=arr1.concat(arr2);
    return newArr;

    /* Takes in two arrays of numbers and returns the two arrays combined into
    a single array. **Hint**: Use the `Array.concat` method but be aware that
    calling this method won't permanently change, also known as **mutate**,
    either array. */
    // Your code here
};
console.log(combineArrays([2,3],[4,5]));

function wordWithinArray(word, arr) {
    if (arr.indexOf(word) !== -1) {
        return true;
    }
    return false;
    /* Takes in both a word and an array of words as arguments and returns a
    boolean that returns true if that string is located inside of the array, or
    false if it does not. Use `Array.indexOf`. */
    // Your code here
};
console.log (wordWithinArray("tugbamilo",["tugbamilo","ulasmilo","sevdamilo"]));
function echo(string) {
    let echoized=string.toUpperCase() + " ... " + string+ " ... "+string.toLowerCase();
    console.log(echoized);
    return echoized
    /* Takes in a string and returns that string "echo-ized". E.g.
    echo("Mom!"); // => returns "MOM! ... Mom! ... mom!"
    echo("hey"); // => returns "HEY ... hey ... hey"
    echo("JUMp"); // => returns "JUMP ... JUMp ... jump" */
    // Your code here
};
console.log(echo("Mom!"))

function fizzBuzz(max) {
    let arr=[];

    for (let i=0;i<max;i++) {
        if (i %3 === 0 && i %5 !== 0 ){
            arr.push(i);
        }
        else if (i %5 === 0 && i %3 !== 0) {
            arr.push(i);
        }

    }
 return arr
 }
console.log(fizzBuzz(20))

function hello(name) {
    return "Hello, " + name
    /* Takes in a string name and returns a string saying "Hello, " to that name. */
    // Your code here
};
console.log(hello("Ulas"))

function goodbye(name) {
    return "Bye, " + name
    /* Takes in a string name and returns a string saying "Bye, " to that name. */
    // Your code here
};
console.log(goodbye("Mehmet"))
function isFive(num) {
    if (num===5) {
        return true;
    }
    {
        return false;
    }

    /* arrnum=[]
    arrnum1=[];
    for (let i=0;i<num;i++) {
    if (i === 5) {
        arrnum.push(i);
        console.log(arrnum);
    }
    else {
        arrnum1.push(i);
    }
    }
    return arrnum1;
    /* Takes in a number, num, and returns `true` if a number is equal to 5 and
    `false` if it is not. */
    // Your code here*/
};
console.log(isFive(8));

function isOdd(num) {
    if (num %2 !== 0) {
        return true;
    }
    else {
        return false;
    }

        /* Takes in a number and returns `true` if the number is odd and returns
    `false` otherwise. Try writing this with and without `if` statements */
    // Your code here
};
console.log(isOdd(7));

function isSubString(searchString, subString) {
    if (subString.toUpperCase().toLowerCase().indexOf(searchString) !== -1) {
        return true;
    }
    {
        return false;
    }
    /* Takes in two strings, `searchString` and `subString`. Should return
    `true` if `subString` is a part of the`searchString`, regardless of upper
    or lower case, and `false` if otherwise. */
    // Your code here
};
console.log(isSubString("uLas","ulas MiLoyu cok seviyor"))

function aCounter(word) {
    /* Takes in a word and returns the number of a's within that word. Counts
    both lowercase (a) and uppercase (A). Your job is to translate the following
    function to use a `for` loop instead of the `while` loop it is currently
    using. */

    /*
    let index = 0;
    let count = 0;
    while (index < word.length) {
        let char = word[index];
        if (char === "a" || char === "A") {
        count += 1;
        }
        index++;
    }
    return count;
    */
    // Your code here
    let count=0;
    for(let index=0;index<word.length;index++) {
        let char=word[index];
        if ( char === "a" || char === "A") {
            count += 1;
        }
    }
return count;
};
console.log(aCounter("Hayattaki sahip oldugumuz en onemli varlıklar en sevdiklerimizden ibarettir."))

module.exports = {
    divideByThree,
    averageOfTwo,
    averageOfFour,
    doubler,
    combineArrays,
    wordWithinArray,
    echo,
    fizzBuzz,
    hello,
    goodbye,
    isFive,
    isOdd,
    isSubString,
    aCounter
}
