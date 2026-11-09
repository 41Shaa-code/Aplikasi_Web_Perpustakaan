const nama = localStorage.getItem("namapengguna");
if (nama) {
    document.getElementById("nama-pengguna").textContent = nama;
}
document.getElementById("form-cari").addEventListener("submit", function (e) {
    e.preventDefault();
    const kata = document.getElementById("cari").value.trim();
    window.location.href = "katalog.html?cari=" + encodeURIComponent(kata);
});