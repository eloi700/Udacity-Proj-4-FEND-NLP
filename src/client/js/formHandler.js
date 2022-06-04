function handleSubmit(event) {
  event.preventDefault();

  // check the text / word was put into the form field
  const formText = document.getElementById("word").value;
  if (!formText) {
    // URL validation was requested in the review but the rubric says it is a bonus task.
    alert("Fill in word/s in the form.");
    document.getElementById("lang_results").textContent = "Undetermined";
  } else {
    Client.checkLanguage(formText);
  }

  console.log("::: Form Submitted :::");
}

export { handleSubmit };
