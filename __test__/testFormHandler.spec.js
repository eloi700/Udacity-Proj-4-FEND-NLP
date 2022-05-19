// Import the js file to test
import { handleSubmit } from "../src/client/js/formHandler";

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the submit functionality", () => {
  // The test() function has two arguments - a string description, and an actual test as a callback function.
  test("Testing the handleSubmit(name)", () => {
    // Define the input for the function, if any, in the form of variables/array
    const input = [{id:1, name: "Picard"}, {id:2, name:"Janeway"}, {id:3, name:"Kirk"}, {id:4, name:"Archer"}, {id:5, name:"Georgiou"}];
    // Define the expected output, if any, in the form of variables/array
    const output = [{id:5, name:"Georgiou"}];
    // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
    // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
    expect(handleSubmit).toBeDefined();
  });

  it('should work with OK response', () => {
    handleSubmit();
  });
});
