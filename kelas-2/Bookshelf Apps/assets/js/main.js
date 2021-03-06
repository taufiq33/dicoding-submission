updateDisplay();

function sudahbaca(idBuku) {
    let item = DataBuku.getBukuById(idBuku, false);
    DataBuku.addDataBuku(
        item.buku.title,
        item.buku.author,
        item.buku.year,
        !item.buku.isComplete,
    );
    DataBuku.deleteBuku(item.indexBuku, item.buku.isComplete);
    updateDisplay();
}

function belumbaca(idBuku) {
    let item = DataBuku.getBukuById(idBuku, true);
    DataBuku.addDataBuku(
        item.buku.title,
        item.buku.author,
        item.buku.year,
        !item.buku.isComplete,
    );
    DataBuku.deleteBuku(item.indexBuku, item.buku.isComplete);
    updateDisplay();
}

function hapus(idBuku, nilaiselesai) {
    let item = DataBuku.getBukuById(idBuku, nilaiselesai);
    let extraElement = document.createElement("div");
    extraElement.innerHTML = `
            <hr>
            <button class="aksi hapus" onclick="prosesHapus(${item.indexBuku}, ${item.buku.isComplete})">Hapus</button>
    `;
    showModal("KONFIRMASI",
        `Apakah anda yakin ingin menghapus buku "${item.buku.title}" dari rak buku ${nilaiselesai ? "selesai dibaca" : "belum selesai dibaca"} ?`,
        false, extraElement);
}

function prosesHapus(index, nilaiselesai) {
    DataBuku.deleteBuku(index, nilaiselesai);
    spanModal.removeChild(spanModal.lastChild);
    showModal("BERHASIL", "buku berhasil dihapus!", 1700);
    updateDisplay();
}

function edit(idBuku, nilaiselesai) {
    isiForm(idBuku, nilaiselesai);
}

btnTambah.addEventListener("click", function () {
    tambahBuku();
});

btnUpdate.addEventListener("click", function (event) {
    let idBuku = event.target.getAttribute("data-id");
    let statusSelesaiBuku = false;
    if (event.target.getAttribute("data-selesai") == "true") {
        statusSelesaiBuku = true;
    }
    let item = DataBuku.getBukuById(parseInt(idBuku), statusSelesaiBuku);
    let objBaru = {
        id: parseInt(idBuku),
        title: judulElement.value,
        author: penulisElement.value,
        year: parseInt(tahunElement.value),
        isComplete: selesaiElement.checked
    }
    DataBuku.editBuku(item.indexBuku, item.buku.isComplete, objBaru);
    showModal("BERHASIL", "buku berhasil diedit!", 1700);
    updateDisplay();
});

btnCancelUpdate.addEventListener("click", function () {
    resetForm();
})

searchButton.addEventListener("click", function (event) {
    let q = new RegExp(searchInput.value, "i");
    updateDisplay(true, q);
})