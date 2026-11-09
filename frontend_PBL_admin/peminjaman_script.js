function cekStok(selectElement) {
        let selectedOption = selectElement.options[selectElement.selectedIndex];
        let stok = selectedOption.getAttribute('data-stok');
        let errorText = document.getElementById('errorText');

        if (stok === "0") {
            errorText.style.display = "block"; // Munculin peringatan kalo stok 0
        } else {
            errorText.style.display = "none";  // Sembunyiin kalo ada stoknya
        }
}