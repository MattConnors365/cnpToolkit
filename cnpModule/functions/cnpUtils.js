// Imports
import generateChecksum from "./utilities/checksum.js";
/// For CNP generation
import combineSexAndCentury from "./cnpGenFuncs/combineSexCentury.js";
import generateDateOfBirthSequence from "./cnpGenFuncs/genDOBseq.js";
import getCountyCode from "./cnpGenFuncs/getCountyCode.js";
import generateUniqueCode from "./cnpGenFuncs/genUniqueCode.js";
/// For CNP deconstruction
import extractSexAndCentury from "./cnpAnalysisFuncs/extractSexAndCentury.js";
import extractDateOfBirth from "./cnpAnalysisFuncs/extractDateOfBirth.js";
import extractCountyName from "./cnpAnalysisFuncs/extractCountyName.js";
// Main functions

/**
 * A function to generate a CNP
 * 
 * @param {string} sex - The person's assigned-at-birth sex (either "Male" or "Female") 
 * @param {string} yearOfBirth - Year of birth, must be between 1800-2099 
 * @param {string} monthOfBirth - Month of birth, spelled out in English
 * @param {string} dayOfBirth - Day of birth, between 1-31
 * @param {string} countyName - Name of county which issued the CNP, spelled out exactly as in constants.js
 * @param {boolean} isForeigner - Whether or not the person is a foreigner, i.e. wasn't born in Romania 
 * @param {string} [sequenceDigits] - Between 001-999, if not provided one will be generated (optional)
 * @returns {string} - Returns CNP, 13 characters long
 */
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

/**
 * A function that analyzes a given CNP
 * 
 * @param {string} cnp - The provided CNP, must be 13 characters long
 * @returns {Object} - Returns an object containing the following
 *     - `sex`: The sex assigned at birth ("Male" or "Female").
 *     - `isForeigner`: A boolean indicating if the person is a foreigner.
 *     - `yearOfBirth`: The year of birth (4-digit number, between 1800-2099).
 *     - `monthOfBirth`: The month of birth (spelled out in English).
 *     - `dayOfBirth`: The day of birth (1-31).
 *     - `countyName`: The name of the issuing county.
 *     - `sequence`: The 3-digit sequence.
 *     - `checksumReturn`: An object containing `isChecksumValid` (boolean) and `calculatedChecksum` (string).
 */
export function analyzeCNP(cnp) {
    const {sex, yearStart, isForeigner} = extractSexAndCentury(cnp.charAt(0));

    const {yearOfBirth, monthOfBirth, dayOfBirth} = extractDateOfBirth(yearStart, cnp);

    const countyName = extractCountyName(cnp.slice(7, 9));

    const sequence = cnp.slice(9, 12);

    const checksum = String(generateChecksum(cnp.slice(0, 12)));
    const checksumReturn = {
        "isChecksumValid": checksum === cnp.charAt(12),
        "calculatedChecksum": checksum
    };

    return {
        sex,
        isForeigner,

        yearOfBirth,
        monthOfBirth,
        dayOfBirth,

        countyName,

        sequence,

        checksumReturn
    }
};



