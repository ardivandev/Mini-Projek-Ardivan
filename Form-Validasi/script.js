const myForm = document.getElementById("myForm");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const umur = document.getElementById("umur");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let namaUser = String(nama.value.trim());
  let emailUser = String(email.value.trim());
  let umurUser = Number(umur.value);

  if (!namaUser) {
    alert("Masukkan nama, tidak boleh kosong");
    return;
  }

  if (!emailUser.includes("@")) {
    alert("Email harus ada tanda @");
    return;
  }

  if (!umurUser || umurUser < 0) {
    alert("Umur harus lebih dari 0");
    return;
  }

  alert("Submit berhasil");
  console.log(namaUser, emailUser, umurUser);
  nama.value = "";
  email.value = "";
  umur.value = "";
});
