
import { validMonths } from "../../constants.js";

export default function getMonthNameFromNumber(monthNumber) {
    if (monthNumber < 1 || monthNumber > 12 || isNaN(monthNumber)) {
        throw new Error(`Invalid month number: ${monthNumber}`);
    }
    return validMonths[Number(monthNumber) - 1];
}