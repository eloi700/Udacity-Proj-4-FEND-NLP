function handleSubmit(event) {
  event.preventDefault();

  // check the text / word was put into the form field
  const formText = document.getElementById("word").value;
  if (!formText) {
    alert("Fill in the form.");
    document.getElementById("lang_results").textContent = "Undetermined";
  } else {
    Client.checkLanguage(formText);
  }

  console.log("::: Form Submitted :::");
}

export { handleSubmit };
