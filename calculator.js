
/*
 * File name: calculator.js
 * Purpose: Perform basic math operations and calculate a total with VAT.
 */

// FUNCTION FOR ADDITION
// Adds two numbers together.
function add(a, b) {
    return a + b;
}

// FUNCTION FOR SUBTRACTION
// Subtracts the second number from the first.
function subtract(a, b) {
    return a - b;
}

// FUNCTION FOR MULTIPLICATION
// Multiplies two numbers.
function multiply(a, b) {
    return a * b;
}

// FUNCTION FOR DIVISION
// Checks if the divisor is zero before dividing.
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

// FUNCTION FOR MODULUS
// Returns the remainder after division.
function modulus(a, b) {
    if (b === 0) {
        return "Error: Cannot use zero as divisor";
    }
    return a % b;
}

// FUNCTION FOR POWER
// Raises the first number to the power of the second.
function power(a, b) {
    return a ** b;
}

// FUNCTION TO COMPUTE TOTAL WITH VAT
// Calculates the subtotal, adds VAT, and rounds to two decimals.
function computeTotal(price, qty, vatRate) {
    let subtotal = price * qty;

    // Parentheses calculate 1 + vatRate before multiplication.
    // This applies VAT to the subtotal.
    let total = subtotal * (1 + vatRate);

    return Number(total.toFixed(2));
}

// TEST CASES
// Each output shows the expression and its result.

console.log("Addition: 18 + 7 =", add(18, 7));
console.log("Addition with negative: -8 + 3 =", add(-8, 3));
console.log("Addition with zero: 0 + 6 =", add(0, 6));

console.log("Subtraction: 20 - 9 =", subtract(20, 9));
console.log("Subtraction with negative: 5 - 12 =", subtract(5, 12));
console.log("Subtraction with zero: 10 - 0 =", subtract(10, 0));

console.log("Multiplication: 6 * 4 =", multiply(6, 4));
console.log("Multiplication with negative: -3 * 5 =", multiply(-3, 5));
console.log("Multiplication with zero: 9 * 0 =", multiply(9, 0));

console.log("Division: 24 / 6 =", divide(24, 6));
console.log("Division with negative: -15 / 3 =", divide(-15, 3));
console.log("Division by zero: 10 / 0 =", divide(10, 0));

console.log("Modulus: 17 % 5 =", modulus(17, 5));
console.log("Modulus with negative: -10 % 3 =", modulus(-10, 3));
console.log("Modulus by zero: 8 % 0 =", modulus(8, 0));

console.log("Power: 3 ** 3 =", power(3, 3));
console.log("Power with zero: 5 ** 0 =", power(5, 0));
console.log("Power with negative exponent: 2 ** -2 =", power(2, -2));

// TEST COMPUTE TOTAL WITH VAT
console.log(
    "Total: price 120, quantity 2, VAT 12% =",
    computeTotal(120, 2, 0.12)
);

console.log(
    "Total: price 45.75, quantity 3, VAT 12% =",
    computeTotal(45.75, 3, 0.12)
);

console.log(
    "Total: price 100, quantity 0, VAT 12% =",
    computeTotal(100, 0, 0.12)
);

// ORDER OF OPERATIONS
// Multiplication happens before addition unless parentheses change the order.
console.log("Order of operations: 2 + 4 * 3 =", 2 + 4 * 3);
console.log("With parentheses: (2 + 4) * 3 =", (2 + 4) * 3);
