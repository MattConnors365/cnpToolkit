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