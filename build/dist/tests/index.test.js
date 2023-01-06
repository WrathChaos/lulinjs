import { expect, test } from "@jest/globals";
import { diffDatesByDay, capitalize, diffArrays, diffArraysWithId, generateRandomNumber, capitalizeFirstLetter, capitalizeAllStartingWords, isBlankString, generateRandomString, generateRandomHexColor, generateRandomBoolean, coinflip, isEven, removeAllDuplicates, isArray, mergeArrays, isNotEmptyArray, safelyParseJson, isEmptyObj, shuffleArray, convertSnakeToCamelCase, convertRGBToHexColor, getMinMaxOfArray, toObj, getUnion, partition, } from "../lib/lulin";
// capitalizeFirstLetter
test("should capitalize FIRST letter of the given text", () => {
    const capitalized = capitalizeFirstLetter("hello world!");
    expect(capitalized).toEqual("Hello world!");
});
// capitalizeAllStartingWords
test("should capitalize ALL starting first letters of the given text", () => {
    const capitalized = capitalizeAllStartingWords("hello world! everything should be capitalized");
    expect(capitalized).toEqual("Hello World! Everything Should Be Capitalized");
});
// capitalize
test("should capitalize ALL letters of the given text", () => {
    const capitalized = capitalize("hello world! everything should be capitalized");
    expect(capitalized).toEqual("HELLO WORLD! EVERYTHING SHOULD BE CAPITALIZED");
});
// generateRandomNumber
test("should generate random number between the given minimum and maximum numbers", () => {
    const randomNumber = generateRandomNumber(0, 100);
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(100);
});
// diffArrays
test("should differentiate of the given two arrays", () => {
    const diffArray = diffArrays([1, 2, 3], [2, 3]);
    expect(diffArray).toEqual([1]);
});
// diffArraysWithId
test("should differentiate of the given two arrays depend on the ids", () => {
    const diffArray = diffArraysWithId([{ id: 1 }, { id: 2 }, { id: 3 }], [{ id: 2 }, { id: 3 }]);
    expect(diffArray).toEqual([{ id: 1 }]);
});
// diffDatesByDay
test("should differentiate of the given two dates by day", () => {
    const diff = diffDatesByDay(1673493926000, 1673017526000);
    expect(diff).toEqual(5);
});
// isBlankString
test("should check if the given string is blank or not", () => {
    const isBlank = isBlankString(" ");
    expect(isBlank).toEqual(true);
});
// generateRandomNumber
test("should generate a random number between given min and max parameters", () => {
    const generatedNumber = generateRandomNumber(0, 100);
    expect(generatedNumber).toBeGreaterThanOrEqual(0);
    expect(generatedNumber).toBeLessThanOrEqual(100);
});
// generateRandomString
test("should generate a random string", () => {
    const generatedString = generateRandomString();
    expect(typeof generatedString).toBe("string");
});
// generateRandomHexColor
test("should generate a random hex color", () => {
    const generatedColor = generateRandomHexColor();
    expect(generatedColor).toHaveLength(7);
});
// generateRandomBoolean
test("should generate a random boolean", () => {
    const randomBoolean = generateRandomBoolean();
    expect(typeof randomBoolean).toBe("boolean");
});
// coinflip
test("should generate a random boolean like a coin flip", () => {
    const coin = coinflip();
    expect(typeof coin).toBe("boolean");
});
// isEven
test("should return if the given number is even or not", () => {
    const even = isEven(315);
    const even2 = isEven(35010);
    expect(even).toEqual(false);
    expect(even2).toEqual(true);
});
// removeAllDuplicates
test("should return the given array without its duplications", () => {
    const arr = removeAllDuplicates([1, 5, 3, 1, 2, 4, 5, 6, 7, 1, 3, 9, 2, 9]);
    expect(arr).toEqual([1, 5, 3, 2, 4, 6, 7, 9]);
});
// isArray
test("should return the given parameter is array or not", () => {
    const arr = isArray([1, 5, 3, 1, 2, 4, 5, 6, 7, 1, 3, 9, 2, 9]);
    const arr2 = isArray({ name: "hey" });
    expect(arr).toEqual(true);
    expect(arr2).toEqual(false);
});
// mergeArrays
test("should return the merged array", () => {
    const arr = mergeArrays(["Hey", 13, 99], [1, 3, 5, 6, "boom"]);
    expect(arr).toEqual(["Hey", 13, 99, 1, 3, 5, 6, "boom"]);
});
// isNotEmptyArray
test("should return if the given array is empty or not", () => {
    const emptyArray = isNotEmptyArray([]);
    const notEmptyArray = isNotEmptyArray([1, 3, 5, 6, 1, 3]);
    expect(emptyArray).toEqual(false);
    expect(notEmptyArray).toEqual(true);
});
// safelyParseJson
test("should return the parsed json", () => {
    const parsedObj = safelyParseJson(JSON.stringify({ name: "Hey", age: 19 }));
    expect(parsedObj).toEqual({ name: "Hey", age: 19 });
});
// isEmptyObj
test("should return if the given object is empty or not", () => {
    const emptyObj = isEmptyObj({});
    const notEmptyObj = isEmptyObj({ name: "Hey" });
    expect(emptyObj).toEqual(true);
    expect(notEmptyObj).toEqual(false);
});
// shuffleArray
test("should return the shuffled array", () => {
    const shuffledArray = shuffleArray([1, 2, 3, 4, 5, 6]);
    expect(shuffledArray).not.toEqual([1, 2, 3, 4, 5, 6]);
});
// convertSnakeToCamelCase
test("should return given snake case string to camel case", () => {
    const camelCase = convertSnakeToCamelCase("hello-world");
    expect(camelCase).toEqual("helloWorld");
});
// convertRGBToHexColor
test("should return given rgb to hex color", () => {
    const hexColor = convertRGBToHexColor(235, 64, 52);
    expect(hexColor).toEqual("#eb4034");
});
// getMinMaxOfArray
test("should return minimum and maximum values of the given array", () => {
    const minMax = getMinMaxOfArray([1, 5, 9, 99, 13, 10, 24, 0]);
    expect(minMax).toEqual([0, 99]);
});
// toObj
test("should return given array to paired key and values", () => {
    const obj = toObj([
        ["name", "Hey"],
        ["age", 42],
    ]);
    expect(obj).toEqual({ name: "Hey", age: 42 });
});
// getUnion
test("should return given arrays as union", () => {
    const obj = getUnion([99, 13, 20, 1, 4], [13, 14, 1]);
    expect(obj).toEqual([99, 13, 20, 1, 4, 14]);
});
// partition
test("should return given array to with the given criteria", () => {
    const obj = partition([99, 13, 20, 1, 4], (num) => num > 13);
    expect(obj).toEqual([
        [99, 20],
        [13, 1, 4],
    ]);
});
//# sourceMappingURL=index.test.js.map