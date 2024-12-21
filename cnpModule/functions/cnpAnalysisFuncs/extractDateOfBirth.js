import getMonthNameFromNumber from "../utilities/getMonthNaFromNu.js";
import capitalizeString from "../utilities/capitalize.js";

/**
 * A function to extract the date of birth from a given CNP, encoded in the digits 2-7
 * @param {number|string} centuryNumber - Either the numbers 18, 19, 20, or the string "XX"
 * @param {number|string} cnp - The CNP being analyzed 
 * @returns {Object} - An object containing the following:
 *      - yearOfBirth: string (between 1800-2099)
 *      - monthOfBirth: string (spelled out in English)
 *      - dayOfBirth: string (between 1-31)
 * @throws {Error} - Throws an error if:
 *      - centuryNumber is neither a 2-digit number nor the string "XX"
 *      - cnp isn't a 13-digit long number or numeric string
 */
export default function extractDateOfBirth(centuryNumber, cnp) {
    // Validation
    if ((typeof centuryNumber !== "number" || centuryNumber.toString().length !== 2) && centuryNumber !== "XX") {
        throw new Error(`The century number ${centuryNumber} needs to be either a 2-digit number or the string "XX"`);
    }
    if (typeof cnp === "string" || typeof cnp === "number") {
        cnp = cnp.toString();
    } else {
        throw new Error(`The CNP ${cnp} needs to be a 13-digit long number or numeric string`);
    }

    // Calculating values
    const dateOfBirthSequence = cnp.slice(1, 7);

    const yearEnding = dateOfBirthSequence.slice(0, 2); // Digits 2-3
    const yearOfBirth = `${centuryNumber}${yearEnding}`;

    const monthNumber = Number(dateOfBirthSequence.slice(2, 4)); // Digits 4-5
    const monthOfBirth = capitalizeString(getMonthNameFromNumber(monthNumber));

    const dayOfBirth = String((dateOfBirthSequence.slice(4, 6))); // Digits 6-7

    // Return values
    return {
        yearOfBirth,
        monthOfBirth,
        dayOfBirth
    }
}