const validMonths = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"
];
const countyCodes = {
    "Alba": "01",
    "Arad": "02",
    "Argeș": "03",
    "Bacău": "04",
    "Bihor": "05",
    "Bistrița-Năsăud": "06",
    "Botoșani": "07",
    "Brașov": "08",
    "Brăila": "09",
    "Buzău": "10",
    "Caraș-Severin": "11",
    "Cluj": "12",
    "Constanța": "13",
    "Covasna": "14",
    "Dâmbovița": "15",
    "Dolj": "16",
    "Galați": "17",
    "Gorj": "18",
    "Harghita": "19",
    "Hunedoara": "20",
    "Ialomița": "21",
    "Iași": "22",
    "Ilfov": "23",
    "Maramureș": "24",
    "Mehedinți": "25",
    "Mureș": "26",
    "Neamț": "27",
    "Olt": "28",
    "Prahova": "29",
    "Satu Mare": "30",
    "Sălaj": "31",
    "Sibiu": "32",
    "Suceava": "33",
    "Teleorman": "34",
    "Timiș": "35",
    "Tulcea": "36",
    "Vaslui": "37",
    "Vâlcea": "38",
    "Vrancea": "39",
    "București": "40",
    "București - Sector 1": "41",
    "București - Sector 2": "42",
    "București - Sector 3": "43",
    "București - Sector 4": "44",
    "București - Sector 5": "45",
    "București - Sector 6": "46",
    "București - Sector 7 (desființat)": "47",
    "București - Sector 8 (desființat)": "48",
    "Călărași": "51",
    "Giurgiu": "52"
};

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
function generateCNP(sex, yearOfBirth, monthOfBirth, dayOfBirth, countyCode) {
    
}
