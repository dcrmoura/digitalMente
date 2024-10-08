// script.js
document.querySelector("button").addEventListener("click", function () {
  let searchValue = document.querySelector('input[type="text"]').value;
  if (searchValue.trim() !== "") {
    alert("Você pesquisou por: " + searchValue);
  } else {
    alert("Digite algo para pesquisar.");
  }
});
