export default function capitalizeString(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

// Thank God for StackOverflow
// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript