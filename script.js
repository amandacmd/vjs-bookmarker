// date in the footer
let today = new Date();
let date = today.getFullYear();
document.querySelector("#currentYear").textContent = date;

// listen for form submit
document.querySelector("#myForm").addEventListener("submit", saveBookmark);

function saveBookmark(event) {
  event.preventDefault();
  console.log("submit");
}
