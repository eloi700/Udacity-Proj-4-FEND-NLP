async function checkLanguage(inputText) {
  return fetch(
    "http://localhost:8081/test?" +
      new URLSearchParams({
        words: inputText,
      })
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return res.text().then((text) => {
        throw new Error(text);
      });
    })
    .then(function (res) {
      document.getElementById("lang_results").textContent = res.name;

      res.name === "Undetermined"
        ? alert(
            "Sorry, that word/s doesn't exist in my vocabulary. Try again :)"
          )
        : alert(
            "That word/s exist. Click OK to see the name of language below."
          );
    })
    .catch((error) => {
      alert(error.message);
      document.getElementById("lang_results").textContent = "Undetermined";
    });
}

export { checkLanguage };
