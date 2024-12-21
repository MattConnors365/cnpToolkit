// Import generateCNP and analyzeCNP functions
import { generateCNP, analyzeCNP } from "./cnpModule/functions/cnpUtils.js";

// Event listener for the encoder button click
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
    if (Number(seqDigits) >= 1000 || Number(seqDigits) <= 0) {
        alert(`The sequence ${seqDigits} must be between 001 and 999`);
        throw new Error(`The sequence ${seqDigits} must be between 001 and 999`);
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

// Event listener for the decoder button click
document.getElementById('decodeCnpButton').addEventListener('click', function() {
    const inputCnp = String(document.getElementById('cnpDecoderInput').value);
    if (isNaN(inputCnp)) {
        alert(`The CNP provided (${inputCnp}) may not contain characters other than digits 0-9`);
        return;
    } else if (inputCnp.length !== 13) {
        alert(`The CNP provided (${inputCnp}) must be 13 characters long`);
        return;
    }

    try {
        const { sex, isForeigner, yearOfBirth, monthOfBirth, dayOfBirth, countyName, sequence, checksumReturn } = analyzeCNP(inputCnp);

        // Update DOM elements directly
        document.getElementById('decodedSexDisplay').value = sex;
        document.getElementById('decodedForeignStatusDisplay').value = isForeigner ? "Yes" : "No";
        document.getElementById('decodedYobDisplay').value = yearOfBirth;
        document.getElementById('decodedMobDisplay').value = monthOfBirth;
        document.getElementById('decodedDobDisplay').value = dayOfBirth;
        document.getElementById('decodedCountyDisplay').value = countyName;
        document.getElementById('transcribedSequenceDisplay').value = sequence;
        document.getElementById('decodedChecksumIsValidDisplay').value = checksumReturn.isChecksumValid ? "Valid" : "Invalid";
        document.getElementById('decodedCalculatedChecksumDisplay').value = checksumReturn.calculatedChecksum;
    } catch (error) {
        alert(`Error decoding CNP: ${error.message}`);
    }
});



//
// UI work
//

// Get navigation buttons and pages
const encoderTab = document.getElementById('encoderTab');
const decoderTab = document.getElementById('decoderTab');
const encoderPage = document.getElementById('encoderPage');
const decoderPage = document.getElementById('decoderPage');

// Show encoder and hide decoder
function showEncoderPage() {
    encoderPage.style.display = 'block';
    decoderPage.style.display = 'none';
    encoderTab.classList.add('active');
    decoderTab.classList.remove('active');
}

// Show decoder and hide encoder
function showDecoderPage() {
    encoderPage.style.display = 'none';
    decoderPage.style.display = 'block';
    decoderTab.classList.add('active');
    encoderTab.classList.remove('active');
}

// Attach event listeners to navigation buttons
encoderTab.addEventListener('click', showEncoderPage);
decoderTab.addEventListener('click', showDecoderPage);

// Set default view
showEncoderPage();