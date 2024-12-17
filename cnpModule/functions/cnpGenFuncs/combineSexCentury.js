
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