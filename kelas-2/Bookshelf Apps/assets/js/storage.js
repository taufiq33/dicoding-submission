

if (typeof (Storage) === "undefined") {
    document.write("maaf aplikasi tidak bisa berjalan, browser anda tidak mendukung localStorage");
} else {
    if (localStorage.getItem("DATABUKU_BELUM_SELESAI") === null || localStorage.getItem("DATABUKU_SUDAH_SELESAI") === null) {
        localStorage.setItem("DATABUKU_BELUM_SELESAI", "");
        localStorage.setItem("DATABUKU_SUDAH_SELESAI", "");
    }
}

const DataBuku = {
    keyBelumSelesai: "DATABUKU_BELUM_SELESAI",
    keySudahSelesai: "DATABUKU_SUDAH_SELESAI",
    getAllDataBuku: function (nilaiselesai) {
        if (nilaiselesai) {
            if (localStorage.getItem(this.keySudahSelesai) === "") {
                return [];
            } else {
                return JSON.parse(localStorage.getItem(this.keySudahSelesai));
            }
        } else {
            if (localStorage.getItem(this.keyBelumSelesai) === "") {
                return [];
            } else {
                return JSON.parse(localStorage.getItem(this.keyBelumSelesai));
            }
        }
    },
    addDataBuku: function (nilaijudul, nilaipenulis, nilaitahun, nilaiselesai) {
        let tempData = this.getAllDataBuku(nilaiselesai);

        let newData = {
            id: +new Date(),
            title: nilaijudul,
            author: nilaipenulis,
            year: parseInt(nilaitahun),
            isComplete: nilaiselesai,
        }
        tempData.unshift(newData);

        this.saveData(tempData, nilaiselesai);
    },
    saveData: function (data, nilaiselesai) {
        let tempData = JSON.stringify(data);
        if (nilaiselesai) {
            localStorage.setItem(this.keySudahSelesai, tempData);
        } else {
            localStorage.setItem(this.keyBelumSelesai, tempData);
        }
    },
    getBukuById: function (idBuku, nilaiselesai) {
        let dataBukuAll = this.getAllDataBuku(nilaiselesai);
        let returnData;
        dataBukuAll.forEach(function (currentItem, index, dataBukuAll) {
            if (currentItem.id === idBuku) {
                returnData = {
                    buku: currentItem,
                    indexBuku: index
                }
            }
        });
        return returnData;
    },
    deleteBuku: function (index, nilaiselesai) {
        let tempData = this.getAllDataBuku(nilaiselesai);
        tempData.splice(index, 1);
        this.saveData(tempData, nilaiselesai);
    },
    editBuku: function (index, nilaiselesai, objBaru) {
        if (nilaiselesai == objBaru.selesai) {
            let tempData = this.getAllDataBuku(nilaiselesai);
            tempData.splice(index, 1, objBaru);
            this.saveData(tempData, nilaiselesai);
        } else {
            let tempDataLama = this.getAllDataBuku(nilaiselesai);
            tempDataLama.splice(index, 1);
            this.saveData(tempDataLama, nilaiselesai);
            let tempDataBaru = this.getAllDataBuku(!nilaiselesai);
            tempDataBaru.unshift(objBaru);
            this.saveData(tempDataBaru, !nilaiselesai);
        }
    },
    searchBuku: function (q) {
        let returnData = {
            "selesai": [],
            "belum": [],
        }

        let allDataBukuSelesai = this.getAllDataBuku(true);
        let allDataBukuBelumSelesai = this.getAllDataBuku(false);

        allDataBukuSelesai.forEach(function (currentItem, index, selfArray) {
            if (currentItem.title.match(q)) {
                returnData.selesai.push(currentItem);
            }
        })

        allDataBukuBelumSelesai.forEach(function (currentItem, index, selfArray) {
            if (currentItem.title.match(q)) {
                returnData.belum.push(currentItem);
            }
        })

        return returnData;
    },
}