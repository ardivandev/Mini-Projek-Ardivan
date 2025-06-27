const inputBeratBadan = document.getElementById("beratBadan");
const inputTinggiBadan = document.getElementById("tinggiBadan");
const tombolHitungBmi = document.getElementById("hitung");
const hasilAngkaBMI = document.getElementById("angkaBMI");
const kategori = document.getElementById("kategori");
const tombolReset = document.getElementById("reset");

// Fungsi bantu untuk set hasil dan gaya kategori
function setHasil(bmi, label, color) {
  hasilAngkaBMI.textContent = bmi;
  kategori.textContent = label;
  kategori.style.backgroundColor = color;
  kategori.style.padding = "5px";
}

// Fungsi utama hitung BMI
function hitungBMI(beratBadan, tinggiBadan) {
  const bb = parseFloat(beratBadan);
  const tb = parseFloat(tinggiBadan);

  if (isNaN(bb) || isNaN(tb) || bb <= 0 || tb <= 0) {
    alert("Masukkan angka yang valid dan lebih dari 0!!");
    return;
  }

  const tbm = (tb / 100) ** 2;
  const bmi = (bb / tbm).toFixed(1);

  if (bmi < 18.5) setHasil(bmi, "Kurus", "orange");
  else if (bmi < 25) setHasil(bmi, "Normal", "lightgreen");
  else if (bmi < 30) setHasil(bmi, "Gemuk", "pink");
  else setHasil(bmi, "Obesitas", "red");
}

// Event listeners
tombolHitungBmi.addEventListener("click", () => {
  hitungBMI(inputBeratBadan.value, inputTinggiBadan.value);
});

tombolReset.addEventListener("click", () => {
  inputBeratBadan.value = "";
  inputTinggiBadan.value = "";
  hasilAngkaBMI.textContent = "";
  kategori.textContent = "";
  kategori.style.backgroundColor = "";
  kategori.style.padding = "";
});

window.addEventListener("load", () => {
  tombolReset.click();
});
