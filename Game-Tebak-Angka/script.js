const outputKesempatan = document.getElementById("kesempatan");
const outputHasil = document.getElementById("hasil");
const inputNumber = document.getElementById("num");
const buttonTebak = document.getElementById("tombolPlay");

let kesempatan = 10;
let randomNumber = Math.floor(Math.random() * 100 + 1);

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  outputHasil.textContent = "";
  kesempatan = 10;
  outputKesempatan.textContent = `${kesempatan}`;
  inputNumber.value = "";
  return;
}

buttonTebak.addEventListener("click", () => {
  // validasi input
  if (!inputNumber.value) {
    outputHasil.textContent = "Masukkan angka yang benar";
    return;
  }

  let numberUser = parseInt(inputNumber.value);

  // cek jika numberUser kurang dari 0 dan lebih dari 100
  if (numberUser <= 0 || numberUser > 100) {
    outputHasil.textContent = "Masukkan angka dari 1 - 100";
    return;
  }

  if (numberUser === randomNumber) {
    outputHasil.textContent = "Benar";
    kesempatan = 10;
    outputKesempatan.textContent = `${kesempatan}`;
    setTimeout(resetGame, 2000);
  } else if (numberUser < randomNumber) {
    outputHasil.textContent = "Terlalu Kecil";
    kesempatan--;
    outputKesempatan.textContent = `${kesempatan}`;
  } else {
    outputHasil.textContent = "Terlalu Besar";
    kesempatan--;
    outputKesempatan.textContent = `${kesempatan}`;
  }

  if (kesempatan === 0) {
    alert("Kesempatan kamu telah habis");
    setTimeout(resetGame, 2000);
  }

  inputNumber.value = "";
  inputNumber.focus();
});
