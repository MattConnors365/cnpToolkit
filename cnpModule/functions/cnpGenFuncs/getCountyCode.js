
import { countyCodes } from "../../constants";

export default function getCountyCode(countyName) {
    if (countyCodes[countyName]) {
        return countyCodes[countyName];
    } else {
        throw new Error(`Invalid county name: """${countyName}"""`);
    }
};
