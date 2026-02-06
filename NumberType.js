function ConditionalStatements(number){
    if (number>0)
    {
        console.log("Positive")
    }else if (number<0)
    {
        console.log("Negative")
    }else
    {
        console.log("Neutral")
    }
}
let number=-5
 
let result=ConditionalStatements(number)
console.log(result)