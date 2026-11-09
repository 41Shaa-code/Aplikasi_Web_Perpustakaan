function filterAnggota() {
    let input = document.getElementById("searchAnggota").value.toLowerCase();
    let table = document.getElementById("tabelAnggota");
    let tr = table.getElementsByTagName("tr");

    // Mulai dari i = 1 agar baris judul (header-row) tidak ikut diseleksi
    for (let i = 1; i < tr.length; i++) {
        let rowText = tr[i].textContent.toLowerCase();
            
        if (rowText.indexOf(input) > -1) {
                tr[i].style.display = ""; // Munculkan baris jika cocok
        } else {
                tr[i].style.display = "none"; // Sembunyikan jika tidak cocok
        }
    }
}