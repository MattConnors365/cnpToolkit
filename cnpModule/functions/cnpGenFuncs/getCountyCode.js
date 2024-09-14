
import { countyCodes } from "../../constants";

export default function getCountyCode(countyName) {
    if (countyCodes[countyName]) {
        return countyCodes[countyName];
    } else {
        throw new Error(`Invalid county name: """${countyName}"""`);
    }
};

// Example usage:
console.log(getCountyCode("Cluj")); // Output: "12"
console.log(getCountyCode("Ilfov")); // Output: "23"
console.log(getCountyCode("Invalid County")); // Output: "Invalid county name"
