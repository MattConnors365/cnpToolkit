const validMonths = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"
];
function getMonthNameFromNumber(monthNumber) {
    if (monthNumber < 1 || monthNumber > 12 || typeof monthNumber !== "number") {
        throw new Error(`Invalid month number: ${monthNumber}`);
    }
    return validMonths[monthNumber - 1];
}
function generateUniqueCode() {
    let uniqueCode = Math.floor((Math.random() * 999) + 1);
    return uniqueCode.toString().padStart(3, '0');
}
function combineSexAndCentury(sexAtBirth, yearOfBirth, isForeigner) {
    if (typeof isForeigner !== "boolean") {
        throw new Error("Invalid type: isForeigner must be a boolean.");
    }
    if (yearOfBirth < 1800 || yearOfBirth > 2099) {
        alert(`${yearOfBirth} is not a year of birth currently supported by the CNP system. It only supports years between 1800 and 2099.`);
        throw new Error("Invalid year of birth: Supported timeframe between 1800-2099");
    }
    if (sexAtBirth !== "Male" && sexAtBirth !== "Female") {
        throw new Error("Invalid sex: CNPs only support the Male and Female sexes, assigned at birth.");
    }
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
function generateDateOfBirthSequence(year, month, day) {
    //Validate inputs
    if (year < 1800 || year > 2099 || typeof year !== "number") {
        throw new Error(`Invalid year: ${year} doesn't exist`);
    }
    const lowerCaseMonth = month.toLowerCase();
    if (!validMonths.includes(lowerCaseMonth) || typeof month !== "string") {
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
function GenerateCNP(sex, yearOfBirth, monthOfBirth, dayOfBirth, countyCode) {
    
}
