
 // Create a function that processes the user's choice.

function menuAction(choice) {

    // Checks the choice and selects a matching case.
    switch (choice) {

        case "1":
            return "Add a new student record";

        case "2":
            return "Display all student records";

        case "3":
            return "Edit a student record";

        case "4":
            return "Remove a student record";

        case "0":
            return "Exit the program";

        // Runs when the choice does not match any case.
        default:
            return "Invalid option - please choose 0 to 4";
    }
}

// Displays the result for each test choice.
console.log(menuAction("1"));
console.log(menuAction("2"));
console.log(menuAction("3"));
console.log(menuAction("4"));
console.log(menuAction("0"));
console.log(menuAction("9"));
