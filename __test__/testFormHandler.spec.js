/**
 * @jest-environment jsdom
 */

import { handleSubmit } from "../src/client/js/formHandler";

// The describe() function
describe("Evaluate Functionality", () => {
  // The actual test as a callback function
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
