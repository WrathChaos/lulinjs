/**
 * Capitalize the first letter only on the given string
 * @param str
 * @returns
 */
export const capitalizeFirstLetter = (str) => str && str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str;
/**
 * Capitalize all starting words on the given string
 * @param str
 * @param lower
 * @returns
 */
export const capitalizeAllStartingWords = (str, lower = false) => (lower ? str.toLowerCase() : str).replace(/(?:^|\s|[''({])+\S/g, (match) => match.toUpperCase());
/**
 * capitalize the ALL letters on the given string
 * @param str
 * @returns
 */
export const capitalize = (str) => str.toUpperCase();
/**
 * Filter to differentiate of the given two arrays
 * @param arr1
 * @param arr2
 * @returns
 */
export const diffArrays = (array1, array2) => array1.filter((v) => !array2.includes(v));
/**
 * Filter to differentiate of the given two arrays of ids
 * @param arr1
 * @param arr2
 * @returns
 */
export const diffArraysWithId = (arr1, arr2) => arr1 &&
    arr2 &&
    arr1.filter((obj1) => !arr2.find((obj2) => obj1.id === obj2.id && obj2.id));
/**
 * Differentiates of the given of two dates by day
 * @param date
 * @param date2
 * @returns
 */
export const diffDatesByDay = (date, date2) => Math.floor(Math.abs(date - date2) / 86400000);
/**
 * Check if the given string is blank or not
 * @param str
 * @returns
 */
export const isBlankString = (str) => !str || str.length === 0 || /^\s*$/.test(str);
/**
 * Generate random number between given minimum and maximum number values
 * @param min
 * @param max
 * @returns
 */
export const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
/**
 * Generate random string
 */
export const generateRandomString = () => Math.random().toString(36).slice(2);
/**
 * Generate random hex color
 */
export const generateRandomHexColor = () => `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`;
/**
 * Generate a random boolean
 * @returns boolean
 */
export const generateRandomBoolean = () => Math.random() >= 0.5;
/**
 * Coin flip randomly
 * @returns
 */
export const coinflip = () => Math.random() >= 0.5;
/**
 * Check if the given number is even or not
 * @param val
 */
export const isEven = (val) => val % 2 === 0;
/**
 * Remove all the duplicate values in the given array
 * @param arr
 */
export const removeAllDuplicates = (arr) => [...new Set(arr)];
/**
 * Check if the value is array or not
 * @param arr
 */
export const isArray = (arr) => Array.isArray(arr);
/**
 * Merge two given arrays
 * @param a
 * @param b
 */
export const mergeArrays = (a, b) => [...a, ...b];
/**
 * Check if the given array is NOT empty
 * @param arr
 */
export const isNotEmptyArray = (arr) => Array.isArray(arr) && arr.length > 0;
/**
 * parse the json safely
 * Yes, still you need to handle if the json string is not valid
 * @param string
 */
export const safelyParseJson = (string) => {
    try {
        return JSON.parse(string);
    }
    catch {
        return string;
    }
};
/**
 * Check if the given object is empty or not
 * @param obj
 */
export const isEmptyObj = (obj) => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
/**
 * Shuffle values of the given array
 * @param arr
 */
export const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
/**
 * Convert snake case to came case
 * @param str
 */
export const convertSnakeToCamelCase = (str) => {
    return str.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace("-", "").replace("_", ""));
};
/**
 * Convert the given RGB to hex color
 * @param r
 * @param g
 * @param b
 */
export const convertRGBToHexColor = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
/**
 * Get the min-max of the given array
 * @param arr
 */
export const getMinMaxOfArray = (arr) => [
    Math.min(...arr),
    Math.max(...arr),
];
/**
 * wait/sleep the given delay time as milliseconds
 * @param delay
 */
export const sleep = (delay) => {
    return new Promise((resolve) => setTimeout(resolve, delay));
};
/**
 * Create an object from the pairs of key and value
 * @param arr
 * @returns
 */
export const toObj = (arr) => Object.fromEntries(arr);
/**
 * Get union of arrays
 * @param arr
 * @returns
 */
export const getUnion = (...arr) => [...new Set(arr.flat())];
/**
 * Partition an array based on the criteria/condition
 * @param arr
 * @param criteria
 * @returns
 */
export const partition = (arr, criteria) => arr.reduce((acc, i) => (acc[criteria(i) ? 0 : 1].push(i), acc), [[], []]);
/**
 * Replace the given object's undefined values with null
 * @param obj
 */
export const replaceUndefinedWithNull = (obj) => {
    if (typeof obj === "object" && obj !== null) {
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                obj[key] = replaceUndefinedWithNull(obj[key]);
            }
        }
    }
    else if (typeof obj === "undefined") {
        obj = null;
    }
    return obj;
};
//# sourceMappingURL=lulin.js.map