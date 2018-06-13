$("#link-field").on("click", function () {
  $(this).select();
  document.execCommand("copy");
});

function copyLink() {
  /* Get the text field */
  var copyText = document.getElementById("copy-btn");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}