const inputUser = document.getElementById("pilihanUser");
const tombolMulai = document.getElementById("tombolMulai");
const hasil = document.getElementById("hasil");
const outputMenang = document.getElementById("menang");
const outputKalah = document.getElementById("kalah");
const outputSeri = document.getElementById("seri");

let comp = ["batu", "kertas", "gunting"];
let menang = 0;
let kalah = 0;
let seri = 0;

// function untuk pilihan comp
function pilihanComp() {
  let random = Math.floor(Math.random() * comp.length);
  return comp[random];
}

// function untuk pilihan user
function pilihanUser(input) {
  let inputUser = input.value.trim().toLowerCase();
  if (!["batu", "kertas", "gunting"].includes(inputUser)) {
    alert("Masukkan sesuai pilihan yang ada.");
    input.value = "";
    return;
  }
  return inputUser;
}

function cekKondisi(comp, user) {
  if (comp === user) {
    seri += 1;
    return `Computer memilih ${comp} dan Kamu memilih ${user} maka hasilnya SERI`;
  } else if (comp === "batu" && user === "gunting") {
    kalah += 1;
    return `Computer memilih ${comp} dan Kamu memilih ${user} maka hasilnya Computer MENANG`;
  } else if (comp === "kertas" && user === "gunting") {
    menang += 1;
    return `Computer memilih ${comp} dan Kamu memilih ${user} maka hasilnya Kamu MENANG`;
  } else if (comp === "kertas" && user === "batu") {
    kalah += 1;
    return `Computer memilih ${comp} dan Kamu memilih ${user} maka hasilnya Computer MENANG`;
  } else if (comp === "gunting" && user === "batu") {
    menang += 1;
    return `Computer memilih ${comp} dan Kamu memilih ${user} maka hasilnya Kamu MENANG`;
  } else if (comp === "gunting" && user === "kertas") {
    kalah += 1;
    return `Computer memilih ${comp} dan Kamu memilih ${user} maka hasilnya Computer MENANG`;
  } else if (comp === "batu" && user === "kertas") {
    menang += 1;
    return `Computer memilih ${comp} dan Kamu memilih ${user} maka hasilnya Kamu MENANG`;
  }
}

function startGame() {
  let computer = pilihanComp();
  let user = pilihanUser(inputUser);

  let hasilGame = cekKondisi(computer, user);
  hasil.textContent = hasilGame;
  outputMenang.textContent = `${menang}`;
  outputKalah.textContent = `${kalah}`;
  outputSeri.textContent = `${seri}`;
}

tombolMulai.addEventListener("click", () => {
  startGame();
});
