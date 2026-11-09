const form = document.getElementById("form-daftar");
const f = (id) => document.getElementById(id);

// Tampilkan / hilangkan error pada satu kolom. Mengembalikan true jika valid.
function cek(input, salah, pesan) {
  input.classList.toggle("is-invalid", salah);
  if (salah) input.nextElementSibling.textContent = pesan;
  return !salah;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nim = f("nim").value.trim();
  const terdaftar = JSON.parse(localStorage.getItem("nimTerdaftar") || "[]");

  let ok = true;
  ok = cek(f("nama"), f("nama").value.trim() === "", "Nama lengkap wajib diisi.") && ok;

  if (nim === "") ok = cek(f("nim"), true, "NIM / NIS wajib diisi.") && ok;
  else ok = cek(f("nim"), terdaftar.includes(nim), "NIM ini sudah terdaftar.") && ok;

  ok = cek(f("kelas"), f("kelas").value.trim() === "", "Kelas wajib diisi.") && ok;

  const hp = f("hp").value.trim();
  ok = cek(f("hp"), hp !== "" && !/^[0-9]{9,15}$/.test(hp), "No HP harus berupa angka (9-15 digit).") && ok;

  ok = cek(f("password"), f("password").value.length < 6, "Password minimal 6 karakter.") && ok;
  ok = cek(f("password2"), f("password2").value !== f("password").value, "Password tidak sama.") && ok;

  if (!ok) return;

  terdaftar.push(nim);
  localStorage.setItem("nimTerdaftar", JSON.stringify(terdaftar));
  localStorage.setItem("namaPengguna", f("nama").value.trim());

  f("pesan-sukses").hidden = false;
  setTimeout(function () {
    window.location.href = "Perpustakaankelas.html"; // pindah ke halaman Login
  }, 1500);
});

// Hilangkan error saat pengguna mulai mengetik lagi
form.querySelectorAll("input").forEach(function (input) {
  input.addEventListener("input", function () {
    input.classList.remove("is-invalid");
  });
});