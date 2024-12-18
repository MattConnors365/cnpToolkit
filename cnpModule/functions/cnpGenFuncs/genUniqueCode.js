
export default function generateUniqueCode() {
    let uniqueCode = Math.floor(Math.random() * 999) + 1; // Generates a number between 0 and 999
    return uniqueCode.toString().padStart(3, '0');  // Ensures it's 3 digits, adding leading zeros
}