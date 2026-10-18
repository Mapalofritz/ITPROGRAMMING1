
/*
 * Name: Daniela Fritz Mapalo
 * Created Date: 2026-10-18
 * Subject: IT Programming 1
 */

// Account object stores the user's account information
var account = {
    username: "DanielaMapalo",
    password: "Mapalo123",
    age: 20,
    status: "active",
    occupation: "Student"
};

let nickname = "";
const score = 78;

// Function to validate the user's input
function validate(data) {
    const validOccupations = [
        "Student", "Teacher", "Registrar", "Dean",
        "Counselor", "Staff", "Admin", "Alumni"
    ];

    const errors = [];

    if (!data.username || data.username.length < 5) {
        errors.push("Username is required and must have at least 5 characters.");
    }

    if (!data.password || data.password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }

    if (!data.age || data.age < 18 || data.age > 80) {
        errors.push("Age must be between 18 and 80.");
    }

    // Account must be active to be eligible
    if (data.status !== "active") {
        errors.push("Account must be active.");
    }

    if (!data.occupation || !validOccupations.includes(data.occupation)) {
        errors.push("Please enter a valid occupation.");
    }

    return errors;
}

// Test accounts
const validAccount = {
    username: "DanielaMapalo",
    password: "Mapalo123",
    age: 20,
    status: "active",
    occupation: "Student"
};

const invalidAccount = {
    username: "Dani",
    password: "123",
    age: 17,
    status: "pending",
    occupation: "Unknown"
};

const emptyAccount = {
    username: "",
    password: "",
    age: "",
    status: "",
    occupation: ""
};

// Display validation results
console.log("Valid Account Errors:", validate(validAccount));       // []
console.log("Invalid Account Errors:", validate(invalidAccount));   // 4 errors
console.log("Empty Account Errors:", validate(emptyAccount));       // 5 errors

// Additional JavaScript tests
console.log(5 == "5");                  // true - types converted
console.log(5 === "5");                 // false - types differ
console.log(null == undefined);         // true
console.log(null === undefined);        // false
console.log(NaN === NaN);               // false - always

console.log(Boolean(""));               // false
console.log(Boolean("0"));              // true  <-- surprising
console.log(Boolean([]));               // true  <-- surprising

console.log(nickname || "Danielamapalo"); // 'Danielamapalo' - any falsy triggers ||
console.log(nickname ?? "Danielamapalo"); // '' - only null/undefined
