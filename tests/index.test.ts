import { describe, expect, test } from "@jest/globals";
import {
  capitalize,
  generateRandomNumber,
  capitalizeFirstLetter,
  capitalizeAllStartingWords,
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
