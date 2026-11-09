const riwayat = [
  { judul: "Computer Network", pinjam: "06/10/2026", tempo: "13/10/2026", status: "Dipinjam" },
  { judul: "Naruto", pinjam: "28/09/2026", tempo: "05/10/2026", status: "Terlambat" },
  { judul: "Laut Bercerita", pinjam: "27/09/2026", tempo: "04/10/2026", status: "Dikembalikan" }
];

// Warna label untuk tiap status
const warna = {
  "Dipinjam": "bg-warning-subtle text-warning-emphasis",
  "Terlambat": "bg-danger-subtle text-danger-emphasis",
  "Dikembalikan": "bg-success-subtle text-success-emphasis"
};

const isiTabel = document.getElementById("isi-tabel");
const pilihStatus = document.getElementById("status");
const kosong = document.getElementById("kosong");

function tampilkan() {
  const dipilih = pilihStatus.value;
  const hasil = riwayat.filter(function (r) {
    return dipilih === "" || r.status === dipilih;
  });

  isiTabel.innerHTML = hasil.map(function (r) {
    return `
      <tr>
        <td>${r.judul}</td>
        <td>${r.pinjam}</td>
        <td>${r.tempo}</td>
        <td><span class="badge ${warna[r.status]}">${r.status}</span></td>
      </tr>`;
  }).join("");

  kosong.hidden = hasil.length > 0;
}

pilihStatus.addEventListener("change", tampilkan);
tampilkan();