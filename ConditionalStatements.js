const { stringify } = require("node:querystring")

function launchBrowser(browserName){

if(browserName=="Chrome")
{
    console.log("The browser name is Chrome")
}else
{
    console.log("Nothing")
}
}
//let browserName="edge"
let browserName="Chrome"
let result=launchBrowser(browserName)

function runTest(testType){
    switch (testType) {
        case "Smoke":
            return "Smoke Test"
            
            break;
        case "sanity":
            return "Sanity Test"
            
            break;
        case "regression":
            return "Regression Test"
            
            break;
    
        default:
            console.log("Smoke Test")
            break;
    }

}
let testType="Smoke"
let sample=runTest(testType)
console.log(sample)
