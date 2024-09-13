

document.getElementById('generateCnpButton').addEventListener('click', function() {
    const isForeigner = document.getElementById('isForeigner').checked;
    const gender = document.getElementById('gender').value;
    const yearOfBirth = parseInt(document.getElementById('yearOfBirth').value, 10);
    const monthOfBirth = parseInt(document.getElementById('monthOfBirth').value, 10);
    const dayOfBirth = parseInt(document.getElementById('dayOfBirth').value, 10);
    const countyCode = parseInt(document.getElementById('countyCode').value, 10);

    // Validate Year of Birth
    if (yearOfBirth < 1800 || yearOfBirth > 2099) {
        alert("Year of Birth must be between 1800 and 2099.");
        return;
    }

    // Validate Month of Birth
    if (monthOfBirth < 1 || monthOfBirth > 12) {
        alert("Month of Birth must be between 1 and 12.");
        return;
    }

    // Validate Day of Birth
    if (dayOfBirth < 1 || dayOfBirth > 31) {
        alert("Day of Birth must be between 1 and 31.");
        return;
    }

    // Validate County Code
    if (countyCode < 1 || countyCode > 52) {
        alert("County Code must be between 1 and 52.");
        return;
    }

    // If all validations pass, proceed to generate the CNP
    const cnp = generateCNP(gender, yearOfBirth, monthOfBirth, dayOfBirth, countyCode, isForeigner);
    document.getElementById('cnpOutput').innerText = `Generated CNP: ${cnp}`;
});

// Placeholder for the generateCNP function
function generateCNP(gender, yearOfBirth, monthOfBirth, dayOfBirth, countyCode, isForeigner) {
    // Implement the logic for generating the CNP based on the inputs
    return "1234567890123"; // Replace with actual logic
}