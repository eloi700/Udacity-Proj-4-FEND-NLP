/**
 * @jest-environment jsdom
 */

import { checkLanguage } from "../src/client/js/langChecker";

// Test for Server Results
describe("Language Checker", () => {
  it("should work ok for good server results", async () => {
    expect.assertions(1);

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            name: "English",
            language: "en",
            relevance: 100,
          }),
      })
    );
    global.alert = () => {};
    document.body.innerHTML = `<div id="lang_results"></div>`;

    // call the function
    await checkLanguage("hello").then(() => {
      // check the result
      expect(document.getElementById("lang_results").textContent).toBe(
        `Langunage Code: en
Language Name: English
Relevance: 100`
      );
    });
  });
  it("should display error message in alert", async () => {
    expect.assertions(3);

    global.fetch = jest.fn(() =>
      //mock function
      Promise.resolve({
        ok: false,
        text: () => Promise.resolve("Error"),
      })
    );
    global.alert = jest.fn();
    document.body.innerHTML = `<div id="lang_results"></div>`;

    // call the function
    await checkLanguage("").then(() => {
      // check the result
      expect(document.getElementById("lang_results").textContent).toBe(
        "Undetermined"
      );
      expect(global.alert.mock.calls.length).toBe(1);
      expect(global.alert.mock.calls[0][0]).toBe("Error");
    });
  });
});
