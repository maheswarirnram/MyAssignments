function isOddOrEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let num = 4;
let result = isOddOrEven(num);
console.log(result);
