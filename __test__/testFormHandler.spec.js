/**
 * @jest-environment jsdom
 */

import { handleSubmit } from "../src/client/js/formHandler";

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
describe("Evaluate Functionality", () => {
  // The test() function has two arguments - a string description, and an actual test as a callback function.
  test("Handle Submit", () => {
    expect(handleSubmit);
  });
  test("call checkLanguage", () => {
    // preparation
    let formText = undefined;
    global.Client = {
      checkLanguage: (text) => {
        formText = text;
      },
    };
    const event = {
      preventDefault: () => {},
    };
    document.body.innerHTML = `<input id="word" value="hello">`;

    // call the function
    handleSubmit(event);

    // check the result
    expect(formText).toBe("hello");
  });
});
