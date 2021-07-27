const formUtamaElement = document.querySelector("#form-utama");
const judulElement = document.querySelector("#judul");
const penulisElement = document.querySelector("#penulis");
const tahunElement = document.querySelector("#tahun");
const selesaiElement = document.querySelector("#isSelesai");
const rakBelumSelesai = document.querySelector("#belum-selesai");
const rakSudahSelesai = document.querySelector("#sudah-selesai");
const btnTambah = document.querySelector("#tambahData");
const btnUpdate = document.querySelector("#updateData");
const btnCancelUpdate = document.querySelector("#cancelUpdateData");
const searchInput = document.querySelector("#search");
const spanJmlSudah = document.querySelector("#jmlhSudah");
const spanJmlBelum = document.querySelector("#jmlhBelum");
const spanModal = document.querySelector("#notifikasi");

function showModal(title, description, autohide=false, extraElement=false){
    spanModal.querySelector("h3").innerText = title;
    spanModal.querySelector("p").innerHTML = description;
    if (extraElement){
        spanModal.appendChild(extraElement);
    }
    spanModal.classList.remove("hidden");
    if(autohide > 0){
        setTimeout(function(){
            closeModal();
        }, autohide)
    }
}

function closeModal(){
    if(spanModal.getElementsByTagName("*").length > 3){
        spanModal.removeChild(spanModal.lastChild);
    }
    spanModal.classList.add("hidden");
}

function tambahBuku(){
    if(
        judulElement.value === "" ||
        penulisElement.value === "" ||
        tahunElement.value === "" 
    ){
        return alert("Mohon isi semua data");
    }
    let judul = judulElement.value;
    let selesai = selesaiElement.checked;
    DataBuku.addDataBuku(
        judulElement.value,
        penulisElement.value,
        tahunElement.value,
        selesaiElement.checked
    );
    showModal("BERHASIL", "buku berhasil ditambahkan!", 1700);
    updateDisplay();
}

function resetForm(){
    judulElement.value = "";
    penulisElement.value = "";
    tahunElement.value = "";
    selesaiElement.checked = false;
    btnUpdate.classList.add("hidden");
    btnCancelUpdate.classList.add("hidden");
    btnTambah.classList.remove("hidden");
}

function isiForm(idBuku, nilaiselesai){
    let item = DataBuku.getBukuById(idBuku, nilaiselesai);
    judulElement.value = item.buku.judul;
    penulisElement.value = item.buku.penulis;
    tahunElement.value = item.buku.tahun;
    selesaiElement.checked = item.buku.selesai;
    btnUpdate.setAttribute("data-id", item.buku.id);
    btnUpdate.setAttribute("data-selesai", item.buku.selesai);
    btnUpdate.classList.remove("hidden");
    btnCancelUpdate.classList.remove("hidden");
    btnTambah.classList.add("hidden");
}

function generateRakBuku(dataList, parentElementList, nilaiselesai){
    for (buku of dataList){
        let list = document.createElement("li");
        list.innerHTML += `<h3>${buku.judul}</h3>`;
        list.innerHTML += `<p>Penulis : ${buku.penulis}</p>`;
        list.innerHTML += `<p>Tahun: ${buku.tahun}</p>`;
        if(nilaiselesai){
            list.innerHTML += `<p>
                <button onclick="belumbaca(${buku.id})" class="aksi belum-baca">Belum baca</button>
                <button onclick="edit(${buku.id},true)" class="aksi edit">Edit</button>
                <button onclick="hapus(${buku.id},true)" class="aksi hapus">Hapus</button>
            </p>`;
        } else {
            list.innerHTML += `<p>
                <button onclick="sudahbaca(${buku.id})" class="aksi selesai-baca">Selesai baca</button>
                <button onclick="edit(${buku.id}, false)" class="aksi edit">Edit</button>
                <button onclick="hapus(${buku.id}, false)" class="aksi hapus">Hapus</button>
            </p>`;
        }
        
        parentElementList.appendChild(list);
    }
}

function updateCountData(countDataBelum, countDataSudah){
    spanJmlBelum.innerHTML = countDataBelum + " buku";
    spanJmlSudah.innerHTML = countDataSudah + " buku";
}

function updateDisplay(modePencarian=false, q=""){
    resetForm();
    btnUpdate.setAttribute("data-id", "");
    btnUpdate.setAttribute("data-selesai", "");
    let dataBukuSelesai;
    let dataBukuBelumSelesai;
    rakBelumSelesai.innerHTML = "";
    rakSudahSelesai.innerHTML = "";
    spanJmlBelum.innerHTML = "";
    spanJmlSudah.innerHTML = "";

    if(modePencarian){
        let AllData = DataBuku.searchBuku(q);
        dataBukuBelumSelesai = AllData.belum;
        dataBukuSelesai = AllData.selesai;

        updateCountData(dataBukuBelumSelesai.length, dataBukuSelesai.length);

        if(dataBukuSelesai.length < 1){
            rakSudahSelesai.innerHTML = "<h3>Kosong</h3>";
        } else {
            generateRakBuku(dataBukuSelesai, rakSudahSelesai, true);
        }
    
        if(dataBukuBelumSelesai.length < 1){
            rakBelumSelesai.innerHTML = "<h3>Kosong</h3>";
        } else {
            generateRakBuku(dataBukuBelumSelesai, rakBelumSelesai, false);
        }
    } else {
        dataBukuSelesai = DataBuku.getAllDataBuku(true);
        dataBukuBelumSelesai = DataBuku.getAllDataBuku(false);

        updateCountData(dataBukuBelumSelesai.length, dataBukuSelesai.length);

        if(dataBukuSelesai.length < 1){
            rakSudahSelesai.innerHTML = "<h3>Kosong</h3>";
        } else {
            generateRakBuku(dataBukuSelesai, rakSudahSelesai, true);
        }
    
        if(dataBukuBelumSelesai.length < 1){
            rakBelumSelesai.innerHTML = "<h3>Kosong</h3>";
        } else {
            generateRakBuku(dataBukuBelumSelesai, rakBelumSelesai, false);
        }
    }

    
}