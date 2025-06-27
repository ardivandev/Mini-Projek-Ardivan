const tanggalLahir = document.getElementById("date");
const tombolCekUmur = document.getElementById("tombolCekUmur");
const hasil = document.getElementById("hasil");
let kategori = "";

function validasiUmur(dateSekarang, dateUser) {
  let umur = dateSekarang.getFullYear() - dateUser.getFullYear();
  const bulanSekarang = dateSekarang.getMonth();
  const bulanLahir = dateUser.getMonth();

  if (
    bulanSekarang < bulanLahir ||
    (bulanSekarang === bulanLahir && dateSekarang.getDate() < dateUser.getDate())
  ) {
    umur--;
  }

  return umur;
}

function cekKategori(umur) {
  if (umur < 13) return "Anak-Anak";
  if (umur <= 19) return "Remaja";
  if (umur <= 59) return "Dewasa";
  return "Lansia";
}

tombolCekUmur.addEventListener("click", () => {
  if (!tanggalLahir.value) {
    hasil.textContent = `Masukkan tanggal yang benar!`;
    return;
  }

  let tanggalSekarang = new Date();
  let tanggalUser = new Date(tanggalLahir.value);

  if (tanggalUser > tanggalSekarang) {
    hasil.textContent = `Tanggal lahir tidak valid (masa depan)!`;
    return;
  }

  let umur = validasiUmur(tanggalSekarang, tanggalUser);
  let kategori = cekKategori(umur);
  hasil.textContent = `Umur : ${umur} Kategori : ${kategori}`;
  tanggalLahir.value = "";
});
