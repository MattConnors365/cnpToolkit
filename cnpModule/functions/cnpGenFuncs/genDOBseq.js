
import { validMonths } from "../../constants";

export default function generateDateOfBirthSequence(year, month, day) { // Parameters expect strings
    //Check if parameters are strings
    if (typeof year !== 'string') {throw new Error(`The 'year' parameter needs to be a string!`)}
    if (typeof month !== 'string') {throw new Error(`The 'month' parameter needs to be a string!`)}
    if (typeof day !== 'string') {throw new Error(`The 'day' parameter needs to be a string!`)}
    
    //Validate inputs
    if (Number(year) < 1800 || Number(year) > 2099 || typeof year !== "number") {
        throw new Error(`Invalid year: ${year} doesn't exist`);
    }
    const lowerCaseMonth = month.toLowerCase();
    if (!validMonths.includes(lowerCaseMonth)) {
        throw new Error(`Invalid month: ${month} doesn't exist`);
    }
    if (Number(day) < 1 || Number(day) > 31 || typeof day !== "number") {
        throw new Error(`Invalid day: ${day} doesn't exist`)
    }

    //Generate sequence
    let yearDigits = year.slice(-2);
    let monthDigits = (validMonths.indexOf(lowerCaseMonth) + 1).toString().padStart(2, '0');
    let dayDigits = day.padStart(2, '0');

    let sequence = `${yearDigits}${monthDigits}${dayDigits}`;

    return sequence;
}
