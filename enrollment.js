/*
 * File name: enrollment.js
 * Purpose: To calculate a student's enrollment fee, including
 *          miscellaneous fees and VAT, and display enrollment status.
 * Author: Daniela fritz mapalo
 * Date: October 18, 2026
 */

/* CONSTANT DECLARATIONS
 * These constants store values that remain the same throughout
 * the script, such as tuition rate, units, VAT, and miscellaneous fee.
 */

const tuitionRate = 400;
const units = 4;
const vatRate = 0.12;
const miscellaneousFee = 150;


/* STUDENT INFORMATION
 * These variables store the student's personal and academic information,
 * including their name, course, year level, and current enrollment status.
 */

let studentName = "Juan Dela Cruz";
let course = "BS Computer Science";
let yearLevel = 3;
let isEnrolled = true;


/* CALCULATE THE BASIC TUITION FEE
 * Multiplying the tuition rate by the number of units
 * to get the student's basic tuition fee.
 */

let totalFee = tuitionRate * units;


/* ADD THE MISCELLANEOUS FEE
 * Adds the miscellaneous fee to the basic tuition fee
 * to calculate the total fee before VAT.
 */

totalFee = totalFee + miscellaneousFee;


/* CALCULATE THE TOTAL FEE WITH VAT
 * Calculates the VAT based on the total fee, then adds
 * it to get the final enrollment fee.
 */

const feeWithVat = totalFee + (totalFee * vatRate);


/* COUNT ENROLLMENT RECORDS
 * Declare count as zero and increase it by one
 * to represent the enrollment record being processed.
 */

let count = 0;
count = count + 1;


/* DETERMINE ENROLLMENT STATUS
 * Using if...else statement to check whether the student
 * is enrolled and assign the appropriate status.
 */

let enrollmentStatus;

if (isEnrolled === true) {
    enrollmentStatus = "ENROLLED";
} else {
    enrollmentStatus = "NOT ENROLLED";
}


/* DISPLAY THE RESULTS
 * Using console.log() to display the student's information,
 * enrollment status, calculated fees, and record count
 * in the browser's console.
 */

console.log("Student Name:", studentName);
console.log("Course:", course);
console.log("Year Level:", yearLevel);
console.log("Enrollment Status:", enrollmentStatus);
console.log("Total Fee before VAT:", totalFee);
console.log("Total Fee with VAT:", feeWithVat);
console.log("Processed Enrollment Records:", count);