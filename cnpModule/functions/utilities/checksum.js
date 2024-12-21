/**
 * A function to generate a given CNP's checksum
 * 
 * @param {number|string} unfinishedCNP - The unfinished CNP (only the first 12 of 13 characters)
 * @returns {number} - 1-digit checksum
 * @throws {Error} - If the parameter is neither a number nor a string, or if it is not 12 characters long, the function will throw an error.
 */

// Expected result: 1-digit number
export default function generateChecksum(unfinishedCNP) {
    //Validation
    if (typeof unfinishedCNP !== 'number' && typeof unfinishedCNP !== 'string') {
        throw new Error(`TypeError: The unfinished CNP (${unfinishedCNP}) inputted into the generateChecksum function must be a number or a numeric string`);
    }

    const unfinishedCNPString = unfinishedCNP.toString();

    if (unfinishedCNPString.length !== 12) {
        throw new Error(`${unfinishedCNP} needs to be 12 characters long`);
    }

    //Set constants
    const splitCNP = unfinishedCNPString.split('').map(Number);
    const constant = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];

    //Checksum algorithm
    /*
        1. Each digit of the first 12 is multiplied with it's corresponding digit from the constant;
        2. The resulting numbers (all 12) are summed up and the total is divided by 11;
        3. a) If the remainder (% / modulo) is less than 10, return the result;
           b) If the remainder (% / modulo) is 10, return 1;
    */
   /// Step 1
   let sum = 0;
   for (let i = 0; i < splitCNP.length; i++) {
        sum += splitCNP[i] * constant[i];
   };

   /// Step 2
   const remainder = sum % 11;

   /// Step 3
   return remainder === 10 ? 1 : remainder;
}