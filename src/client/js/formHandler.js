function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  const formText = document.getElementById("word").value;
  Client.checkForName(formText);

  console.log("::: Form Submitted :::");
  fetch("http://localhost:8081/test?" + new URLSearchParams({
    words: formText
  }))
    .then((res) => res.json())
    .then(function (res) {
      document.getElementById("lang_results").innerHTML = res.name;
    });
}

export { handleSubmit };
