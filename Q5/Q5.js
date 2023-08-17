const form = document.getElementById("myForm");
const fileInput = document.getElementById("file-upload");
const fileError = document.getElementById("fileError");

form.addEventListener("submit", function (event) {
  // Prevent the form from submitting if validation fails
  if (!validateFile(fileInput)) {
    event.preventDefault();
  }
});

fileInput.addEventListener("change", function () {
  validateFile(this);
});

function validateFile(input) {
  const allowedExtensions = ["jpg", "jpeg", "png"];
  const maxFileSize = 10 * 1024 * 1024; // 10MB

  const file = input.files[0];

  if (file) {
    const fileExtension = file.name.split(".").pop().toLowerCase();

    if (!allowedExtensions.includes(fileExtension)) {
      fileError.textContent =
        "Please select a valid image file (jpg, jpeg, or png).";
      input.value = ""; // Clear the input
      return false;
    }

    if (file.size > maxFileSize) {
      fileError.textContent = "File size should not exceed 10MB.";
      input.value = ""; // Clear the input
      return false;
    }

    fileError.textContent = ""; // Clear any previous error messages
    return true;
  }
}
