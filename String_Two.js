// Function to reverse a string
function reverseString(str) {
    let reversed = ""

    // Loop characters in reverse direction
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i]
    }

    console.log("Reversed String:", reversed)
    return reversed
}

// Function to check palindrome
function isPalindrome(str) {
    let reversed = reverseString(str)

    if (str === reversed) {
        return true
    } else {
        return false
    }
}

// Test cases
let input = "madam"
console.log("Is Palindrome:", isPalindrome(input))

let input2 = "hello"
console.log("Is Palindrome:", isPalindrome(input2))
