/**
 * A function that generates a unique sequence between "001" and "999"
 * 
 * @returns {string} - A 3-digit string representation of numbers between "001" and "999" (zero-padded if needed)
 */
export default function generateUniqueCode() {
    let uniqueCode = Math.floor(Math.random() * 999) + 1; // Generates a number between 0 and 999
    return uniqueCode.toString().padStart(3, '0');  // Ensures it's 3 digits, adding leading zeros
}