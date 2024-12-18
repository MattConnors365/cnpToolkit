// Imports
/// For CNP generation
import combineSexAndCentury from "./cnpGenFuncs/combineSexCentury.js";
import generateDateOfBirthSequence from "./cnpGenFuncs/genDOBseq.js";
import getCountyCode from "./cnpGenFuncs/getCountyCode.js";
import generateUniqueCode from "./cnpGenFuncs/genUniqueCode.js";
import generateChecksum from "./cnpGenFuncs/checksum.js";
/// For CNP deconstruction
import extractSexAndCentury from "./cnpAnalysisFuncs/extractSexAndCentury.js";
import extractDateOfBirth from "./cnpAnalysisFuncs/extractDateOfBirth.js";
// Main functions

export function generateCNP(sex, yearOfBirth, monthOfBirth, dayOfBirth, countyName, isForeigner, sequenceDigits) {
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
    if (sequenceDigits !== "") { // If sequence input by user
        cnp += sequenceDigits; // Add input
    } else {
        cnp += (generateUniqueCode()).toString(); // If not, generate the sequence
    }
    //Add checksum digit (13)
    const checksum = generateChecksum(cnp);
    cnp += checksum;
    //Return the complete CNP
    return cnp;
};

export function analyzeCNP(cnp) {
    const {sex, yearStart, isForeigner} = extractSexAndCentury(cnp.charAt(0));
    const {yearOfBirth, monthOfBirth, dayOfBirth} = extractDateOfBirth(yearStart, cnp);

    return {
        sex,
        isForeigner,

        yearOfBirth,
        monthOfBirth,
        dayOfBirth,
    }
};



