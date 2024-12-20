import { codesToCounties } from "../../constants.js";

/**
 * Resolves the county name for a given code.
 * @param {string} input - The county code or name to resolve.
 * @returns {string} - The resolved county name.
 * @throws Will throw an error if the input is invalid.
 */
export default function extractCountyName(input) {
    // Check if input is a valid county code
    if (codesToCounties[input]) {
        return codesToCounties[input]; // Valid code, return name
    }

    // Check if input is a valid county name
    const countyCode = Object.keys(codesToCounties).find(
        code => codesToCounties[code] === input
    );
    if (countyCode) {
        return input; // Valid name, return as-is
    }

    // Invalid input
    throw new Error(`Invalid county input: "${input}"`);
}
