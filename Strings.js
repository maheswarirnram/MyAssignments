function lengthOfLastWord(s) {
    let count = 0

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            count++
        } else if (count > 0) {
            break
        }
    }

    return count
}

// Example
//let s = "Hello World"
let s = " fly me to the moon "
console.log(lengthOfLastWord(s)) // Output: 5

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    let count = {}

    for (let i = 0; i < str1.length; i++) {
        let char = str1[i]
        count[char] = (count[char] || 0) + 1
    }

    for (let i = 0; i < str2.length; i++) {
        let char = str2[i]
        if (!count[char]) {
            return false
        }
        count[char]--
    }

    return true
}

// Test cases
console.log(isAnagram("listen", "silent")) // true
console.log(isAnagram("hello", "world"))   // false
