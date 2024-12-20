
//For CNP generation
export const validMonths = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"
];
export const countyCodes = {
    "Alba": "01",
    "Arad": "02",
    "Argeș": "03",
    "Bacău": "04",
    "Bihor": "05",
    "Bistrița-Năsăud": "06",
    "Botoșani": "07",
    "Brașov": "08",
    "Brăila": "09",
    "Buzău": "10",
    "Caraș-Severin": "11",
    "Cluj": "12",
    "Constanța": "13",
    "Covasna": "14",
    "Dâmbovița": "15",
    "Dolj": "16",
    "Galați": "17",
    "Gorj": "18",
    "Harghita": "19",
    "Hunedoara": "20",
    "Ialomița": "21",
    "Iași": "22",
    "Ilfov": "23",
    "Maramureș": "24",
    "Mehedinți": "25",
    "Mureș": "26",
    "Neamț": "27",
    "Olt": "28",
    "Prahova": "29",
    "Satu Mare": "30",
    "Sălaj": "31",
    "Sibiu": "32",
    "Suceava": "33",
    "Teleorman": "34",
    "Timiș": "35",
    "Tulcea": "36",
    "Vaslui": "37",
    "Vâlcea": "38",
    "Vrancea": "39",
    "București": "40",
    "București - Sector 1": "41",
    "București - Sector 2": "42",
    "București - Sector 3": "43",
    "București - Sector 4": "44",
    "București - Sector 5": "45",
    "București - Sector 6": "46",
    "București - Sector 7 (desființat)": "47",
    "București - Sector 8 (desființat)": "48",
    "Călărași": "51",
    "Giurgiu": "52"
};

// For CNP analysis
export const codesToCounties = Object.entries(countyCodes).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});
//////
