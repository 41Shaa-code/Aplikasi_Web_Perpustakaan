const kolom = [
  ["nama", "Nama", "namaPengguna"],
  ["nim", "NIM", "nimPengguna"],
  ["kelas", "Kelas", "kelasPengguna"],
  ["hp", "No HP", "hpPengguna"]
];

const dataDiri = document.getElementById("data-diri");
const btnUbah = document.getElementById("btn-ubah");
const pesanData = document.getElementById("pesan-data");
let modeUbah = false;

function tampilLihat() {
  dataDiri.innerHTML = kolom.map(function (k) {
    const isi = localStorage.getItem(k[2]) || "-";
    return '<dt class="col-4">' + k[1] + ':</dt><dd class="col-8">' + isi + '</dd>';
  }).join("");
  btnUbah.textContent = "Ubah data diri";
  modeUbah = false;
}

function tampilUbah() {
  dataDiri.innerHTML = kolom.map(function (k) {
    return '<dt class="col-4 pt-1">' + k[1] + ':</dt>' +
           '<dd class="col-8"><input type="text" class="form-control form-control-sm" id="in-' + k[0] + '"></dd>';
  }).join("");
  kolom.forEach(function (k) {
    document.getElementById("in-" + k[0]).value = localStorage.getItem(k[2]) || "";
  });
  btnUbah.textContent = "Simpan data diri";
  modeUbah = true;
  pesanData.hidden = true;
}

btnUbah.addEventListener("click", function () {
  if (!modeUbah) {
    tampilUbah();
    return;
  }
  const nama = document.getElementById("in-nama").value.trim();
  const nim = document.getElementById("in-nim").value.trim();
  if (nama === "" || nim === "") {
    alert("Nama dan NIM wajib diisi.");
    return;
  }
  kolom.forEach(function (k) {
    localStorage.setItem(k[2], document.getElementById("in-" + k[0]).value.trim());
  });
  tampilLihat();
  pesanData.hidden = false;
});

tampilLihat();

// ---------- Ubah password ----------
const formPassword = document.getElementById("form-password");
const f = (id) => document.getElementById(id);

function cek(input, salah, pesan) {
  input.classList.toggle("is-invalid", salah);
  if (salah) input.nextElementSibling.textContent = pesan;
  return !salah;
}

formPassword.addEventListener("submit", function (e) {
  e.preventDefault();
  f("pesan-password").hidden = true;

  let ok = true;
  ok = cek(f("pw-lama"), f("pw-lama").value === "", "Password lama wajib diisi.") && ok;
  ok = cek(f("pw-baru"), f("pw-baru").value.length < 6, "Password baru minimal 6 karakter.") && ok;
  ok = cek(f("pw-ulang"), f("pw-ulang").value !== f("pw-baru").value, "Password tidak sama.") && ok;
  if (!ok) return;

  // Pengecekan password lama yang sebenarnya nanti dilakukan di server (PHP + MySQL).
  formPassword.reset();
  f("pesan-password").hidden = false;
});

formPassword.querySelectorAll("input").forEach(function (input) {
  input.addEventListener("input", function () {
    input.classList.remove("is-invalid");
  });
});