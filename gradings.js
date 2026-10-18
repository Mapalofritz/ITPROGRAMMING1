
/*
 * File Name: grading.js
 * Author: Daniela Fritz Mapalo
 * Date: October 18, 2026
 */

function assessGrade(score) {
    if (typeof score !== "number" || score < 0 || score > 100) {
        return "Invalid score";
    } else if (score >= 95) {
        return "Excellent";
    } else if (score >= 85) {
        return "Very Good";
    } else if (score >= 75) {
        return "Passing";
    } else {
        return "Failing";
    }
}

function computeFinalGrade(midterm, finalTerm) {
    if (midterm < 0 || midterm > 100 ||
        finalTerm < 0 || finalTerm > 100) {
        return "Invalid score";
    }

    return (midterm + finalTerm) / 2;
}

// Test the grade assessor
let scores = [-1, 0, 74, 75, 85, 95, 100, 101];

console.log("GRADE ASSESSOR TESTS");

for (let score of scores) {
    console.log("Score:", score, "Grade:", assessGrade(score));
}

// Test the final grade calculator
console.log("\nFINAL GRADE TESTS");
console.log("82 and 88:", computeFinalGrade(82, 88));
console.log("75 and 85:", computeFinalGrade(75, 85));
console.log("100 and 100:", computeFinalGrade(100, 100));
