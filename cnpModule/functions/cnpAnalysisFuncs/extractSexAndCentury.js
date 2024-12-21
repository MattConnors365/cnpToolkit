/**
 * A function to extract the sex, century, and foreigner status from a CNP.
 * 
 * The provided 1-digit number encodes the following:
 * - Odd number (1, 3, 5) corresponds to "Male", even number (2, 4, 6) corresponds to "Female".
 * - Numbers 7-8 correspond to foreigners (people born outside of Romania).
 * - The first digit also encodes the century of birth, mapping to the first two digits of the year:
 *      - 1, 2: 19th century (e.g., 1800-1899)
 *      - 3, 4: 18th century (e.g., 1700-1799)
 *      - 5, 6: 20th century (e.g., 1900-1999)
 *      - 7, 8: Foreigner (the century cannot be determined and is set to `"XX"`).
 * 
 * @param {number} number - 1-digit number that encodes sex, century, and foreigner status.
 * @returns {Object} - An object containing the extracted information:
 *      - `sex`: "Male" or "Female" based on the provided number.
 *      - `yearStart`: A 2-digit number representing the century (e.g., 19 for 1900s, 20 for 2000s), or `"XX"` if the person is a foreigner and the century cannot be determined.
 *      - `isForeigner`: A boolean indicating whether the person was born outside Romania (`true` for foreigners, `false` for Romanian-born individuals).
 * @throws {Error} - Throws an error if:
 *      - The input `number` is not a valid single digit or if it is 0 or 9 (invalid values for CNP).
 */
export default function extractSexAndCentury(number) {
    // Validation
    if (isNaN(number)) {throw new Error(`Input CNP ${number} must be a number or a numeric string`)}
    if (number.toString().length !== 1) {
        number = Number(number.toString().charAt(0));
    } // If more than the first digit is supplied, extract first digit
    if ([0, 9].includes(number)) {
        throw new Error(`The first digit cannot be 0 or 9`)
    }

    // Calculating values
    const isMale = number % 2 === 1;
    const isForeigner = number >= 7;

    const yearMapping = {
        1: 19, 2: 19, // Digits 1 & 2 correspond to the start of the year "19" (20th century)
        3: 18, 4: 18, // Digits 3 & 4 correspond to the start of the year "18" (19th century)
        5: 20, 6: 20  // Digits 5 & 6 correspond to the start of the year "20" (21st century)
    }
    const yearStart = yearMapping[number] || "XX"; // Default to "XX" if no match (For foreigner CNPs)

    // Return values
    return {
        sex: isMale ? "Male" : "Female",
        yearStart,
        isForeigner
    }
}