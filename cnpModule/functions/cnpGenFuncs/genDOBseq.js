
import { validMonths } from "../../constants";

export default function generateDateOfBirthSequence(year, month, day) {
    //Validate inputs
    if (year < 1800 || year > 2099 || typeof year !== "number") {
        throw new Error(`Invalid year: ${year} doesn't exist`);
    }
    const lowerCaseMonth = month.toLowerCase();
    if (!validMonths.includes(lowerCaseMonth)) {
        throw new Error(`Invalid month: ${month} doesn't exist`);
    }
    if (day < 1 || day > 31 || typeof day !== "number") {
        throw new Error(`Invalid day: ${day} doesn't exist`)
    }

    //Generate sequence
    let yearDigits = year.toString().slice(-2);
    let monthDigits = (validMonths.indexOf(lowerCaseMonth) + 1).toString().padStart(2, '0');
    let dayDigits = day.toString().padStart(2, '0');
    let sequence = `${yearDigits}${monthDigits}${dayDigits}`;

    return sequence;
}
