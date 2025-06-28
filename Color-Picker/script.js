const colorInput = document.getElementById("colorInput");
const outputBox = document.getElementById("outputBoxColor");
const outputText = document.getElementById("outputTextColor");

colorInput.addEventListener("input", (event) => {
  let color = event.target.value;
  outputBox.style.backgroundColor = color;
  outputText.textContent = color;
});
