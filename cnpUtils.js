function getLength(number) {
    return number.toString().length;
}
function generateUniqueCode() {
    let uniqueCode = Math.floor((Math.random() * 999) + 1);
    let codeLength = getLength(uniqueCode);
    if (codeLength === 1) {uniqueCode = "00" + uniqueCode;}
    else if (codeLength === 2) {uniqueCode = "0" + uniqueCode}
    return uniqueCode;
}

function GenerateCNP(sex, yearOfBirth, monthOfBirth, dayOfBirth, countyCode) {
    
}
