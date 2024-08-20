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
function GenerateCNP(sex, yearOfBirth, monthOfBirth, dayOfBirth, countyCode) {
    
}
