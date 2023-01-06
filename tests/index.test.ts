import { describe, expect, test } from "@jest/globals";
import {
  diffDatesByDay,
  capitalize,
  diffArrays,
  diffArraysWithId,
  generateRandomNumber,
  capitalizeFirstLetter,
  capitalizeAllStartingWords,
  isBlankString,
} from "../lib/lulin";

// capitalizeFirstLetter
test("should capitalize FIRST letter of the given text", () => {
  const capitalized = capitalizeFirstLetter("hello world!");
  expect(capitalized).toEqual("Hello world!");
});

// capitalizeAllStartingWords
test("should capitalize ALL starting first letters of the given text", () => {
  const capitalized = capitalizeAllStartingWords(
    "hello world! everything should be capitalized",
  );
  expect(capitalized).toEqual("Hello World! Everything Should Be Capitalized");
});

// capitalize
test("should capitalize ALL letters of the given text", () => {
  const capitalized = capitalize(
    "hello world! everything should be capitalized",
  );
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
  const diffArray = diffArraysWithId(
    [{ id: 1 }, { id: 2 }, { id: 3 }],
    [{ id: 2 }, { id: 3 }],
  );
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
