
import { validMonths } from "../../constants";

export default function getMonthNameFromNumber(monthNumber) {
    if (monthNumber < 1 || monthNumber > 12 || typeof monthNumber !== "number") {
        throw new Error(`Invalid month number: ${monthNumber}`);
    }
    return validMonths[monthNumber - 1];
}