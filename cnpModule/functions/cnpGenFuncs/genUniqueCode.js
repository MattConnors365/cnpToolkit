
export default function generateUniqueCode() {
    let uniqueCode = Math.floor((Math.random() * 999) + 1);
    return uniqueCode.toString().padStart(3, '0');
}