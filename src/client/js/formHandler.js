function handleSubmit(event) {
  event.preventDefault();

  // check the text / word was put into the form field
  const formText = document.getElementById("word").value;
  Client.checkLanguage(formText);

  console.log("::: Form Submitted :::");
}

export { handleSubmit };
