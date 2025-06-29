const transaksi = [];
const daftarTransaksi = document.getElementById("daftarTransaksi");
const totalPemasukan = document.getElementById("totalPemasukan");
const totalPengeluaran = document.getElementById("totalPengeluaran");
const totalSaldo = document.getElementById("totalSaldo");
const namaTransaksi = document.getElementById("nama-transaksi");
const nominalTransaksi = document.getElementById("nominal");
const jenisTransaksi = document.getElementById("jenis");
const formTransaksi = document.getElementById("formTransaksi");

function tambahTransaksi(nama, nominal, jenis) {
  // Validasi Input
  if (nama == "" || isNaN(nominal) || nominal < 0 || jenis == "") {
    alert("Masukkan nama, angka nominal, dan jenis yang valid!!");
    return;
  }

  // Simpan di object
  let objTransaksi = {
    nama: nama,
    nominal: nominal,
    jenis: jenis,
  };

  // Tambah object ke array transaksi
  transaksi.push(objTransaksi);

  // Set LocalStorage
  localStorage.setItem("transaksi", JSON.stringify(transaksi));

  tampilDaftarTransaksi();
  tampilTotalUang();
}

function tampilDaftarTransaksi() {
  let dtransaksi = getTransaksi();
  daftarTransaksi.innerHTML = "";

  let i = 1;
  dtransaksi.forEach((item, index) => {
    console.log(`Item ${item["nama"]} and index ${index}`);
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");

    // Button Hapus
    let buttonHapus = document.createElement("button");
    buttonHapus.textContent = "Hapus";
    buttonHapus.classList.add("hapus");
    buttonHapus.addEventListener("click", () => {
      let confirms = confirm("Apakah yang ingin menghapus ?");
      if (confirms) {
        hapusTransaksi(index);
      }
      return;
    });

    td1.textContent = `${i}`;
    td2.textContent = `${item["nama"]}`;
    td3.textContent = `${item["nominal"].toString()}`;
    td4.textContent = `${item["jenis"]}`;
    td5.appendChild(buttonHapus);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    i++;

    daftarTransaksi.appendChild(tr);
  });
}

function hapusTransaksi(index) {
  let dtransaksi = getTransaksi();

  dtransaksi.splice(index, 1);

  localStorage.setItem("transaksi", JSON.stringify(dtransaksi));

  tampilDaftarTransaksi();
  tampilTotalUang();
}

function tampilTotalUang() {
  let dtransaksi = getTransaksi();

  let uangMasuk = 0;
  let uangKeluar = 0;
  let total = 0;

  dtransaksi.forEach((item) => {
    if (item["jenis"] === "pemasukan") {
      uangMasuk += parseFloat(item["nominal"]);
    } else {
      uangKeluar += parseFloat(item["nominal"]);
    }
  });

  total = uangMasuk - uangKeluar;
  totalPemasukan.textContent = `Rp.${uangMasuk}`;
  totalPengeluaran.textContent = `Rp.${uangKeluar}`;
  totalSaldo.textContent = `Rp.${total}`;
}

function getTransaksi() {
  let data = localStorage.getItem("transaksi") || [];
  return JSON.parse(data);
}

// Ketika form DiSubmit
formTransaksi.addEventListener("submit", (e) => {
  e.preventDefault();

  let nama = namaTransaksi.value.trim();
  let nominal = parseFloat(nominalTransaksi.value);
  let jenis = jenisTransaksi.value;

  tambahTransaksi(nama, nominal, jenis);

  namaTransaksi.value = "";
  nominalTransaksi.value = "";
  jenisTransaksi.value = "";
});

(function () {
  tampilDaftarTransaksi();
  tampilTotalUang();
})();
