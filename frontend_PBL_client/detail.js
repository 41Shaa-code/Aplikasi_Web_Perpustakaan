// Isi penerbit, tahun, dan sinopsis sesuaikan dengan buku aslinya.
const buku = {
  "PEL-001": { judul: "Computer Networks", penulis: "Andrew S. Tanenbaum", penerbit: "Prentice Hall", tahun: "2003", kategori: "Pelajaran", stok: 1, gambar: "computernetworks.webp",
    sinopsis: "Buku pelajaran jaringan komputer yang membahas lapisan jaringan dari fisik sampai aplikasi." },
  "NOV-001": { judul: "Laut Bercerita", penulis: "Leila S. Chudori", penerbit: "Kepustakaan Populer Gramedia", tahun: "2017", kategori: "Novel", stok: 3, gambar: "lautbercerita.webp",
    sinopsis: "Kisah Biru Laut, aktivis mahasiswa 1998 yang hilang, dan keluarga yang terus mencari kejelasan nasibnya." },
  "KOM-001": { judul: "Naruto", penulis: "Masashi Kishimoto", penerbit: "PT Elex Media Komputindo", tahun: "2003", kategori: "Komik", stok: 0, gambar: "naruto.jpg",
    sinopsis: "Petualangan Naruto Uzumaki, ninja muda yang bercita-cita menjadi Hokage." },
  "ANT-001": { judul: "If We Make It through December", penulis: "Aurya Vientania dkk.", penerbit: "PT. Bukune Kreatif Cipta", tahun: "2023", kategori: "Antologi", stok: 2, gambar: "december.jpg",
    sinopsis: "Antologi cerita dari lima penulis." }
};

const kode = new URLSearchParams(window.location.search).get("kode");
const b = buku[kode];
const isi = document.getElementById("isi-detail");

if (!b) {
  isi.innerHTML = '<p class="text-muted">Buku tidak ditemukan.</p>';
} else {
  const stokTeks = b.stok > 0
    ? '<span class="teks-hijau">' + b.stok + ' Tersedia</span>'
    : '<span class="text-danger">Stok habis</span>';

  isi.innerHTML = `
    <div class="col-md-4 text-center">
      <div class="sampul" style="height:320px">
        <img src="${b.gambar}" alt="Sampul ${b.judul}" onerror="this.style.display='none'">
      </div>
    </div>
    <div class="col-md-8">
      <div class="card border-0 shadow-sm">
        <div class="card-body p-4">
          <h1 class="judul-kartu h3 fw-bold mb-3">${b.judul}</h1>
          <dl class="row small mb-4">
            <dt class="col-sm-3">Penulis:</dt><dd class="col-sm-9">${b.penulis}</dd>
            <dt class="col-sm-3">Penerbit:</dt><dd class="col-sm-9">${b.penerbit}</dd>
            <dt class="col-sm-3">Tahun:</dt><dd class="col-sm-9">${b.tahun}</dd>
            <dt class="col-sm-3">Kategori:</dt><dd class="col-sm-9">${b.kategori}</dd>
            <dt class="col-sm-3">Stok:</dt><dd class="col-sm-9">${stokTeks}</dd>
          </dl>
          <h2 class="h6 fw-bold">Sinopsis</h2>
          <p class="small mb-0">${b.sinopsis}</p>
        </div>
      </div>
    </div>`;
}