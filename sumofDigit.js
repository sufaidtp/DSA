function sumOfDigits(n) {
    // Base case: if n is 0, return 0
    if (n === 0) {
        return 0;
    }
    
    // Recursive case: return last digit + sum of digits of remaining number
    return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

// Test cases
console.log(sumOfDigits(1234)); 

