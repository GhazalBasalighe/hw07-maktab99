function validateFile(input) {
  const allowedExtensions = ["jpg", "jpeg", "png"];
  const file = input.files[0];
  const fileExtension = file.name.split(".").pop().toLowerCase();

  const fileError = document.getElementById("fileError");

  if (!allowedExtensions.includes(fileExtension)) {
    fileError.textContent =
      "Please select a valid image file (jpg, jpeg, or png).";
    input.value = ""; // Clear the input
  } else {
    fileError.textContent = "";
  }
}
