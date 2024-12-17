// Import the generateCNP function
import { generateCNP } from "./cnpModule/functions/cnpUtils.js";

// Event listener for the button click
document.getElementById('generateCnpButton').addEventListener('click', function() {
    const isForeigner = document.getElementById('isForeigner').checked;
    const sex = document.getElementById('sex').value; // Using 'sex' ID for sex assigned at birth
    const yearOfBirth = document.getElementById('yearOfBirth').value; // Keep as string
    const monthOfBirth = document.getElementById('monthOfBirth').value; // Keep as string
    const dayOfBirth = document.getElementById('dayOfBirth').value; // Keep as string
    const countyName = document.getElementById('countyName').value; // Changed to 'countyName'
    
    // Handle 3-digit sequence
    let seqDigits = document.getElementById('seqDigits').value;
    if (seqDigits !== "") {
        seqDigits = seqDigits.toString().padStart(3, '0'); // Pad to 3 digits
    }

    // Convert yearOfBirth to number for validation and function call
    const yearNum = parseInt(yearOfBirth, 10);

    // Validate Year of Birth
    if (isNaN(yearNum) || yearNum < 1800 || yearNum > 2099) {
        alert("Year of Birth must be a valid 4-digit number between 1800 and 2099.");
        return;
    }

    // Validate Month of Birth
    const monthNum = parseInt(monthOfBirth, 10);
    if (monthNum < 1 || monthNum > 12) {
        alert("Month of Birth must be between 1 and 12.");
        return;
    }

    // Validate Day of Birth
    const dayNum = parseInt(dayOfBirth, 10);
    if (dayNum < 1 || dayNum > 31) {
        alert("Day of Birth must be between 1 and 31.");
        return;
    }

    // If all validations pass, proceed to generate the CNP

    try {
        const cnp = generateCNP(sex, yearNum, monthOfBirth, dayOfBirth, countyName, isForeigner, seqDigits);
        document.getElementById('cnpOutput').innerText = `Generated CNP: ${cnp}`;
    } catch (error) {
        document.getElementById('cnpOutput').innerText = `Error: ${error.message}`;
    }
    
});
