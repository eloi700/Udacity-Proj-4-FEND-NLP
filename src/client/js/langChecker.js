function checkLanguage(inputText) {
    fetch(
        "http://localhost:8081/test?" +
          new URLSearchParams({
            words: inputText,
          })
      )
        .then((res) => res.json())
        .then(function (res) {
          document.getElementById("lang_results").innerHTML = res.name;

          res.name === "Undetermined"
            ? alert("Sorry, that word/s doesn't exist in my vocabulary. Try again :)")
            : alert(
                "That word/s exist. Click OK to see the name of language below."
              );
        });
}

export { checkLanguage }
