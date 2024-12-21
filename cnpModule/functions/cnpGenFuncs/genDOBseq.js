import { validMonths } from "../../constants.js";

/**
 * Generates a 6-digit sequence based on a given birth date (year, month, day).
 * The sequence consists of:
 *      - 2 digits representing the last 2 digits of the year (e.g. for 1971 the last two digits are "71").
 *      - 2 digits for the month (1 through 12). If the month is a single digit, it is zero-padded (e.g. "01" for January).
 *      - 2 digits for the day of the month (1 through 31). If the day is a single digit, it is zero-padded (e.g. "05" for the 5th).
 *
 * @param {string} year - The year of birth, must be a string representation of a year between 1800 and 2099.
 * @param {string} month - The month of birth, spelled out in English (e.g., "January", "February", etc.).
 * @param {string} day - The day of birth, must be a string representation of a day between 1 and 31.
 * @returns {string} - A 6-digit string representing the date of birth in the format: 'YYMMDD'.
 *      - `YY` = last two digits of the year.
 *      - `MM` = month (zero-padded if needed).
 *      - `DD` = day (zero-padded if needed).
 * @throws {Error} - Throws an error if any of the parameters are invalid:
 *      - `year` must be a number between 1800 and 2099.
 *      - `month` must be a valid month name from `validMonths`.
 *      - `day` must be a number between 1 and 31.
 */
export default function generateDateOfBirthSequence(year, month, day) { 
    // Ensure inputs are non-empty strings and trim spaces
    if (typeof year !== 'string' || year.trim() === '') {
        throw new Error(`The 'year' parameter needs to be a non-empty string!`);
    }
    if (typeof month !== 'string' || month.trim() === '') {
        throw new Error(`The 'month' parameter needs to be a non-empty string!`);
    }
    if (typeof day !== 'string' || day.trim() === '') {
        throw new Error(`The 'day' parameter needs to be a non-empty string!`);
    }
    
    // Validate year (between 1800 and 2099)
    const yearNumber = parseInt(year, 10);
    if (Number.isNaN(yearNumber) || yearNumber < 1800 || yearNumber > 2099) {
        throw new Error(`Invalid year: ${year}. It must be a number between 1800 and 2099.`);
    }

    // Validate month
    const lowerCaseMonth = month.toLowerCase().trim();
    if (!validMonths.includes(lowerCaseMonth)) {
        throw new Error(`Invalid month: ${month}. It doesn't exist.`);
    }

    // Validate day (between 1 and 31)
    const dayNumber = parseInt(day, 10);
    if (Number.isNaN(dayNumber) || dayNumber < 1 || dayNumber > 31) {
        throw new Error(`Invalid day: ${day}. It must be a number between 1 and 31.`);
    }

    // Generate sequence
    const yearDigits = year.slice(-2);
    const monthDigits = (validMonths.indexOf(lowerCaseMonth) + 1).toString().padStart(2, '0');
    const dayDigits = day.padStart(2, '0');

    return `${yearDigits}${monthDigits}${dayDigits}`;
}
