function main() {

    // const xhr = new XMLHttpRequest();
    const messageElement = document.querySelector("#message");
    const baseURL = "https://web-server-book-dicoding.appspot.com";

    const getBook = async () => {
        // tuliskan kode di sini!
/* 
        xhr.onload = function () {
            if (xhr.status !== 200) {
                showResponseMessage(`${xhr.status}, ${xhr.statusText}`);
                throw new Error(`${xhr.status}, ${xhr.statusText}`);
            }
            const responseFromServer = JSON.parse(this.responseText);
            if (responseFromServer.error) {
                showResponseMessage(responseFromServer.message);
            }
            renderAllBooks(responseFromServer.books);
        }

        xhr.onerror = function () {
            showResponseMessage();
        }

        xhr.open("GET", `${baseURL}/list`);
        xhr.send(); */
        try{
            const ajax = await fetch(`${baseURL}/list`);
            const response = await ajax.json();
            showResponseMessage(response.message);
            renderAllBooks(response.books);
            resetFormInput();
        } catch (error) {
            console.error(error);
        }
    };


    const insertBook = async (book) => {
        // tuliskan kode di sini!

        /* xhr.onload = function () {
            if (xhr.status !== 200) {
                showResponseMessage(`${xhr.status}, ${xhr.statusText}`);
                throw new Error(`${xhr.status}, ${xhr.statusText}`);
            }
            const responseFromServer = JSON.parse(this.responseText);

            showResponseMessage(responseFromServer.message);

            resetFormInput();
            getBook();
        }

        xhr.onerror = function () {
            showResponseMessage();
        }

        xhr.open("POST", `${baseURL}/add`);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("X-Auth-Token", 12345);
        xhr.send(JSON.stringify(book)); */
        try{
            const ajax = await fetch(`${baseURL}/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Auth-Token": "12345"
                },
                body: JSON.stringify(book)
            });
            const response = await ajax.json();
            showResponseMessage(response.message);
            getBook();
        } catch (error) {
            console.error(error);
        }
    };

    const updateBook = async (book) => {
        // tuliskan kode di sini!

        /* xhr.onload = function () {
            if (xhr.status !== 200) {
                showResponseMessage(`${xhr.status}, ${xhr.statusText}`);
                throw new Error(`${xhr.status}, ${xhr.statusText}`);
            }
            const responseFromServer = JSON.parse(this.responseText);

            showResponseMessage(responseFromServer.message);

            resetFormInput();
            getBook();
        }

        xhr.onerror = function () {
            showResponseMessage();
        }

        xhr.open("PUT", `${baseURL}/edit/${book.id}`);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("X-Auth-Token", 12345);
        xhr.send(JSON.stringify(book)); */

        try{
            const ajax = await fetch(`${baseURL}/edit/${book.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "X-Auth-Token": "12345"
                },
                body: JSON.stringify(book)
            });
            const response = await ajax.json();
            showResponseMessage(response.message);
            getBook();
        } catch (error) {
            console.error(error);
        }
    };

    const removeBook = async (bookId) => {
        // tuliskan kode di sini!

        /* xhr.onload = function () {
            if (xhr.status !== 200) {
                showResponseMessage(`${xhr.status}, ${xhr.statusText}`);
                throw new Error(`${xhr.status}, ${xhr.statusText}`);
            }
            const responseFromServer = JSON.parse(this.responseText);

            showResponseMessage(responseFromServer.message);

            getBook();
        }

        xhr.onerror = function () {
            showResponseMessage();
        }

        xhr.open("DELETE", `${baseURL}/delete/${bookId}`);
        xhr.setRequestHeader("X-Auth-Token", 12345);
        xhr.send(); */

        try{
            const ajax = await fetch(`${baseURL}/delete/${bookId}`, {
                method: "DELETE",
                headers: {
                    "X-Auth-Token": "12345"
                },
            });
            const response = await ajax.json();
            showResponseMessage(response.message);
            getBook();
        } catch (error) {
            console.error(error);
        }
    };


    const resetFormInput = () => {
        document.querySelectorAll("input.form-control").forEach((element) => {
            element.value = '';
        })
    }



    /*
        jangan ubah kode di bawah ini ya!
    */

    const renderAllBooks = (books) => {
        const listBookElement = document.querySelector("#listBook");
        listBookElement.innerHTML = "";

        books.forEach(book => {
            listBookElement.innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                    <div class="card">
                        <div class="card-body">
                            <h5>(${book.id}) ${book.title}</h5>
                            <p>${book.author}</p>
                            <button type="button" class="btn btn-danger button-delete" id="${book.id}">Hapus</button>
                        </div>
                    </div>
                </div>
            `;
        });

        const buttons = document.querySelectorAll(".button-delete");
        buttons.forEach(button => {
            button.addEventListener("click", event => {
                if(confirm("Anda yakin ingin menghapus data ini?")) {
                    const bookId = event.target.id;
                    removeBook(bookId);
                }
            })
        })
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        messageElement.innerText = message;
        messageElement.classList.toggle("d-none");

        setTimeout(() => {
            messageElement.classList.toggle("d-none");
        }, 10000);
    };

    document.addEventListener("DOMContentLoaded", () => {

        const inputBookId = document.querySelector("#inputBookId");
        const inputBookTitle = document.querySelector("#inputBookTitle");
        const inputBookAuthor = document.querySelector("#inputBookAuthor");
        const buttonSave = document.querySelector("#buttonSave");
        const buttonUpdate = document.querySelector("#buttonUpdate");

        buttonSave.addEventListener("click", function () {
            const book = {
                id: Number.parseInt(inputBookId.value),
                title: inputBookTitle.value,
                author: inputBookAuthor.value
            };
            insertBook(book)
        });

        buttonUpdate.addEventListener("click", function () {
            const book = {
                id: Number.parseInt(inputBookId.value),
                title: inputBookTitle.value,
                author: inputBookAuthor.value
            };

            updateBook(book)
        });
        getBook();
    });
}

export default main;