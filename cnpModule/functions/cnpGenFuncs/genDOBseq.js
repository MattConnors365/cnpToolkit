import { validMonths } from "../../constants.js";

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
