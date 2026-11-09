const buku = [
  { kode: "PEL-001", judul: "Computer Networks", penulis: "Andrew S. Tanenbaum", kategori: "Pelajaran", stok: 1, gambar: "computernetworks.webp" },
  { kode: "NOV-001", judul: "Laut Bercerita", penulis: "Leila S. Chudori", kategori: "Novel", stok: 3, gambar: "lautbercerita.webp" },
  { kode: "KOM-001", judul: "Naruto", penulis: "Masashi Kishimoto", kategori: "Komik", stok: 0, gambar: "naruto.jpg" },
  { kode: "ANT-001", judul: "If We Make It through December", penulis: "Aurya Vientania dkk.", kategori: "Antologi", stok: 2, gambar: "december.jpg" }
];

const daftar = document.getElementById("daftar-buku");
const kosong = document.getElementById("kosong");
const inputCari = document.getElementById("cari");
const pilihKategori = document.getElementById("kategori");

function tampilkan() {
  const kata = inputCari.value.trim().toLowerCase();
  const kategori = pilihKategori.value;

  const hasil = buku.filter(function (b) {
    const cocokKata = (b.judul + " " + b.penulis + " " + b.kode).toLowerCase().includes(kata);
    const cocokKategori = kategori === "" || b.kategori === kategori;
    return cocokKata && cocokKategori;
  });

  daftar.innerHTML = hasil.map(function (b) {
    const status = b.stok > 0
      ? '<div class="small fw-bold teks-hijau">Tersedia</div>'
      : '<div class="small fw-bold text-danger">Dipinjam (stok habis)</div>';

    return `
      <div class="col">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <div class="sampul mb-3">
              <img src="${b.gambar}" alt="Sampul ${b.judul}" onerror="this.style.display='none'">
            </div>
            <h2 class="h6 fw-bold mb-1">${b.judul}</h2>
            <div class="small text-muted mb-3">${b.penulis}</div>
            ${status}
            <a href="detail.html?kode=${b.kode}" class="small fw-bold teks-hijau text-decoration-none">Lihat detail</a>
          </div>
        </div>
      </div>`;
  }).join("");

  kosong.hidden = hasil.length > 0;
}

document.getElementById("form-cari").addEventListener("submit", function (e) {
  e.preventDefault();
  tampilkan();
});
pilihKategori.addEventListener("change", tampilkan);

// Kata kunci dari "Cari buku cepat" di Beranda (katalog.html?cari=...)
const dariBeranda = new URLSearchParams(window.location.search).get("cari");
if (dariBeranda) inputCari.value = dariBeranda;

tampilkan();