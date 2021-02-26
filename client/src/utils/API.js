import axios from "axios";

export default {
    // this gets books from Google search
    searchBooks: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
    },

    // all books
    getBooks: function () {
        return axios.get("/api/books");
    },

    // one book
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

    // tosave
    saveBook: function (savedBooks) {
        return axios.post("/api/books", savedBooks);
    },

    //to delete a book
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }
};