// Data Dummy Buku lengkap dengan Tanggal Pinjam & Jatuh Tempo
const dataBuku = [
    { kode: "BK-001", judul: "Naruto", kategori: "Komik", tglPinjam: "2026-10-01", tglTempo: "2026-10-08", jumlah: 12 },
    { kode: "BK-002", judul: "Laut Bercerita", kategori: "Novel", tglPinjam: "2026-10-05", tglTempo: "2026-10-12", jumlah: 8 },
    { kode: "BK-003", judul: "Computer Networks", kategori: "Pelajaran", tglPinjam: "2026-10-10", tglTempo: "2026-10-17", jumlah: 4 },
    { kode: "BK-004", judul: "Dasar Phyton", kategori: "Pelajaran", tglPinjam: "2026-10-12", tglTempo: "2026-10-19", jumlah: 6 },
    { kode: "BK-005", judul: "Kalkulus Dasar", kategori: "Pelajaran", tglPinjam: "2026-10-15", tglTempo: "2026-10-22", jumlah: 3 },
    { kode: "BK-006", judul: "If We Make It Through December", kategori: "Antologi", tglPinjam: "2026-10-14", tglTempo: "2026-10-21", jumlah: 2 },
];

function tampilkanLaporan() {
    const jenisKategori = document.getElementById("jenis").value.toLowerCase();
    const dariTanggal = document.getElementById("dari").value;
    const sampaiTanggal = document.getElementById("sampai").value;
    const table = document.getElementById("tabelLaporan");

    // Reset isi tabel, tambahin kolom tanggal di header
    table.innerHTML = `
        <tr class="header-row">
            <td><b>Kode</b></td>
            <td><b>Judul</b></td>
            <td><b>Kategori</b></td>
            <td><b>Tanggal Pinjam</b></td>
            <td><b>Jatuh Tempo</b></td>
            <td class="text-right"><b>Jumlah dipinjam</b></td>
        </tr>
    `;

    let totalPeminjaman = 0;

    // Filter data berdasarkan kategori DAN rentang tanggal
    const dataFiltered = dataBuku.filter(buku => {
        let matchKategori = (jenisKategori === "semua" || buku.kategori.toLowerCase() === jenisKategori);
        
        // Filter berdasarkan tanggal jika diisi oleh user
        let matchDari = true;
        let matchSampai = true;
        
        if (dariTanggal) {
            matchDari = buku.tglPinjam >= dariTanggal;
        }
        if (sampaiTanggal) {
            matchSampai = buku.tglPinjam <= sampaiTanggal;
        }

        return matchKategori && matchDari && matchSampai;
    });

    if (dataFiltered.length === 0) {
        const rowKosong = document.createElement("tr");
        rowKosong.innerHTML = `<td colspan="6" style="text-align: center; color: #888;">Tidak ada data peminjaman untuk filter tersebut</td>`;
        table.appendChild(rowKosong);
    } else {
        dataFiltered.forEach(buku => {
            totalPeminjaman += buku.jumlah;

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${buku.kode}</td>
                <td>${buku.judul}</td>
                <td>${buku.kategori}</td>
                <td>${buku.tglPinjam}</td>
                <td>${buku.tglTempo}</td>
                <td class="text-right">${buku.jumlah}</td>
            `;
            table.appendChild(row);
        });

        // Baris total (colspan jadi 5 karena kolomnya nambah)
        const rowTotal = document.createElement("tr");
        rowTotal.className = "footer-row";
        rowTotal.innerHTML = `
            <td colspan="5"><b>Total Peminjaman</b></td>
            <td class="text-right"><b>${totalPeminjaman}</b></td>
        `;
        table.appendChild(rowTotal);
    }
}

// Otomatis jalankan fungsi saat halaman pertama kali dimuat
window.onload = tampilkanLaporan;