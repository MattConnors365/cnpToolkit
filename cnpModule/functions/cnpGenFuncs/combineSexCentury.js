/**
 * Combines the sex, year of birth, and foreigner status to generate a 1-digit code 
 * that encodes these three pieces of information for CNP generation.
 * 
 * The function generates a 1-digit number using the following logic:
 * - Male: 1, Female: 2
 * - If the person is a foreigner, add 6 to the base digit.
 * - If not a foreigner, the second digit of the year determines the value to add:
 *      - If the second digit of the year is '8', add 2
 *      - If the second digit of the year is '0', add 4
 *      - If the second digit of the year is '9', add 0
 * 
 * @param {string} sexAtBirth - The sex assigned at birth. Must be either "Male" or "Female".
 * @param {number} yearOfBirth - The year of birth, in number format. Must be a 4-digit number between 1800 and 2099.
 * @param {boolean} isForeigner - Whether the person is a foreigner, i.e., born outside Romania.
 * @returns {number} - A 1-digit number encoding the sex, century, and foreigner status.
 * @throws {Error} - Throws an error if any of the following apply:
 *      - `sexAtBirth` isn't a string or isn't "Male" or "Female".
 *      - `yearOfBirth` isn't a number or isn't a 4-digit number between 1800-2099.
 *      - `isForeigner` isn't a boolean.
 */
export default function combineSexAndCentury(sexAtBirth, yearOfBirth, isForeigner) {
    // Parameter types expected, in order: string ('Male'/'Female'), number (4 digits), boolean
    if (typeof sexAtBirth !== 'string') 
        {throw new Error(`The sexAtBirth parameter must be assigned either the string value 'Male' or 'Female`)}
    if (typeof yearOfBirth !== 'number' && yearOfBirth.toString().length !== 4)
        {throw new Error(`The yearOfBirth parameter must be a number of 4 digits`)}
    if (typeof isForeigner !== 'boolean') 
        {throw new Error(`The isForeigner parameter must be a boolean`)}

    // Validity checks
    if (yearOfBirth < 1800 || yearOfBirth > 2099) {
        alert(`${yearOfBirth} is not a year of birth currently supported by the CNP system. It only supports years between 1800 and 2099.`);
        throw new Error("Invalid year of birth: Supported timeframe between 1800-2099");
    }
    if (sexAtBirth !== "Male" && sexAtBirth !== "Female") {
        throw new Error("Invalid sex: CNPs only support the Male and Female sexes, assigned at birth.");
    }

    // Logic
    const year = yearOfBirth.toString();
    const isMale = sexAtBirth === "Male";
    let digit = 0;
    if (isMale) {digit += 1} else {digit += 2};
    if (isForeigner) {digit += 6}
    else if (year[1] === '8') {digit += 2} 
    else if (year[1] === '0') {digit += 4} 
    else if (year[1] === '9') {digit += 0}

    return digit;
}