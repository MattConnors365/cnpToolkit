// Imports
/// For CNP generation
import combineSexAndCentury from "./cnpGenFuncs/combineSexCentury.js";
import generateDateOfBirthSequence from "./cnpGenFuncs/genDOBseq.js";
import getCountyCode from "./cnpGenFuncs/getCountyCode.js";
import generateUniqueCode from "./cnpGenFuncs/genUniqueCode.js";
import generateChecksum from "./cnpGenFuncs/checksum.js";

// Main functions

export function generateCNP(sex, yearOfBirth, monthOfBirth, dayOfBirth, countyName, isForeigner) {
    yearOfBirth = yearOfBirth.toString();
    //Initiate cnp variable
    let cnp = '';
    //Add sex and century digit (1)
    cnp += (combineSexAndCentury(sex, yearOfBirth, isForeigner)).toString();
    //Add date of birth digits (2-7)
    cnp += (generateDateOfBirthSequence(yearOfBirth, monthOfBirth.toString(), dayOfBirth)).toString();
    //Add county code digits (8-9)
    cnp += (getCountyCode(countyName)).toString();
    //Add random sequence digits (10-12)
    cnp += (generateUniqueCode()).toString();
    //Add checksum digit (13)
    const checksum = generateChecksum(cnp);
    cnp += checksum;
    //Return the complete CNP
    return cnp;
};

export function analyzeCNP(cnp) {

};



