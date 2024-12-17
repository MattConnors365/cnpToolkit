import { countyCodes } from "../../constants.js";

/**
 * Resolves the county code for a given input (name or code).
 * @param {string} input - The county name or code to resolve.
 * @returns {string} - The resolved county code.
 * @throws Will throw an error if the input is invalid.
 */
export default function getCountyCode(input) {
    // Check if input is a valid county name
    if (countyCodes[input]) {
        return countyCodes[input];
    }

    // Check if input is a valid county code
    const countyName = Object.keys(countyCodes).find(
        name => countyCodes[name] === input
    );
    if (countyName) {
        return input; // Valid code, return as-is
    }

    // Invalid input
    throw new Error(`Invalid county input: "${input}"`);
}
