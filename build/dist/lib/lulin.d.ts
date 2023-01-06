/**
 * Capitalize the first letter only on the given string
 * @param str
 * @returns
 */
export declare const capitalizeFirstLetter: (str: string) => string;
/**
 * Capitalize all starting words on the given string
 * @param str
 * @param lower
 * @returns
 */
export declare const capitalizeAllStartingWords: (str: string, lower?: boolean) => string;
/**
 * capitalize the ALL letters on the given string
 * @param str
 * @returns
 */
export declare const capitalize: (str: string) => string;
/**
 * Filter to differentiate of the given two arrays
 * @param arr1
 * @param arr2
 * @returns
 */
export declare const diffArrays: <T>(array1: T[], array2: T[]) => T[];
/**
 * Filter to differentiate of the given two arrays of ids
 * @param arr1
 * @param arr2
 * @returns
 */
export declare const diffArraysWithId: (arr1: any[], arr2: any[]) => any[];
/**
 * Differentiates of the given of two dates by day
 * @param date
 * @param date2
 * @returns
 */
export declare const diffDatesByDay: (date: number, date2: number) => number;
/**
 * Check if the given string is blank or not
 * @param str
 * @returns
 */
export declare const isBlankString: (str: string) => boolean;
/**
 * Generate random number between given minimum and maximum number values
 * @param min
 * @param max
 * @returns
 */
export declare const generateRandomNumber: (min: number, max: number) => number;
/**
 * Generate random string
 */
export declare const generateRandomString: () => string;
/**
 * Generate random hex color
 */
export declare const generateRandomHexColor: () => string;
/**
 * Generate a random boolean
 * @returns boolean
 */
export declare const generateRandomBoolean: () => boolean;
/**
 * Coin flip randomly
 * @returns
 */
export declare const coinflip: () => boolean;
/**
 * Check if the given number is even or not
 * @param val
 */
export declare const isEven: (val: number) => boolean;
/**
 * Remove all the duplicate values in the given array
 * @param arr
 */
export declare const removeAllDuplicates: (arr: any[]) => any[];
/**
 * Check if the value is array or not
 * @param arr
 */
export declare const isArray: (arr: any) => boolean;
/**
 * Merge two given arrays
 * @param a
 * @param b
 */
export declare const mergeArrays: (a: any[], b: any[]) => any[];
/**
 * Check if the given array is NOT empty
 * @param arr
 */
export declare const isNotEmptyArray: (arr: any[]) => boolean;
/**
 * parse the json safely
 * Yes, still you need to handle if the json string is not valid
 * @param string
 */
export declare const safelyParseJson: (string?: string | null) => any;
/**
 * Check if the given object is empty or not
 * @param obj
 */
export declare const isEmptyObj: (obj: any) => boolean;
/**
 * Shuffle values of the given array
 * @param arr
 */
export declare const shuffleArray: (arr: any[]) => any[];
/**
 * Convert snake case to came case
 * @param str
 */
export declare const convertSnakeToCamelCase: (str: string) => string;
/**
 * Convert the given RGB to hex color
 * @param r
 * @param g
 * @param b
 */
export declare const convertRGBToHexColor: (r: number, g: number, b: number) => string;
/**
 * Get the min-max of the given array
 * @param arr
 */
export declare const getMinMaxOfArray: (arr: any[]) => number[];
/**
 * wait/sleep the given delay time as milliseconds
 * @param delay
 */
export declare const sleep: (delay: number) => Promise<void>;
/**
 * Create an object from the pairs of key and value
 * @param arr
 * @returns
 */
export declare const toObj: (arr: any[]) => {
    [k: string]: any;
};
/**
 * Get union of arrays
 * @param arr
 * @returns
 */
export declare const getUnion: (...arr: any[]) => any[];
/**
 * Partition an array based on the criteria/condition
 * @param arr
 * @param criteria
 * @returns
 */
export declare const partition: (arr: any[], criteria: any) => any;
