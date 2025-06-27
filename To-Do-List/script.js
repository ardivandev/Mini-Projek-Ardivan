const inputTugas = document.getElementById("tugas");
const tombolTambah = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const arrDaftarTugas = [];

tombolTambah.addEventListener("click", () => {
  let tugas = String(inputTugas.value.trim());

  if (tugas === "") {
    alert("Catatan Kamu Kosong");
    return;
  }

  arrDaftarTugas.push(tugas);
  renderTugas();
});

function hapusTugas(index) {
  arrDaftarTugas.splice(index, 1);
  renderTugas();
}

function renderTugas() {
  // Menampilkan daftar tugas
  daftarTugas.innerHTML = "";
  arrDaftarTugas.forEach((tugas, index) => {
    let li = document.createElement("li");
    li.textContent = `No ${index + 1}. ${tugas}`;

    let tombol = document.createElement("button");
    tombol.textContent = "Hapus";
    tombol.addEventListener("click", () => {
      hapusTugas(index);
    });

    li.appendChild(tombol);
    daftarTugas.appendChild(li);
  });
  inputTugas.value = "";
}
