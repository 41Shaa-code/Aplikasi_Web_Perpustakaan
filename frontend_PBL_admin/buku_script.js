function filterTable() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let filterCategory = document.getElementById("categorySelect").value;
    let table = document.getElementById("bookTable");
    let tr = table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {
        let tdCategory = tr[i].getAttribute("data-category");
        let rowText = tr[i].textContent.toLowerCase();
        
        let matchesCategory = (filterCategory === "" || tdCategory === filterCategory);
        let matchesSearch = (rowText.indexOf(input) > -1);

        if (matchesCategory && matchesSearch) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}