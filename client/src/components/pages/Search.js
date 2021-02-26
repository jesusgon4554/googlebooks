import React, { Component } from "react";
import SearchResult from "../SearchResult";
import SearchInput from "../SearchInput";
import API from "../../utils/API"



class Search extends Component {
    state = {
        search: "",
        books: []
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value
        });
    };

    handleButtonSubmit = event => {
        event.preventDefault();
        API.searchBooks(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {
                    // this stores response
                    let results = res.data.items
                    // this maps through array (result)
                    results = results.map(result => {
                        // this stores book info in new object
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            authors: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }
                        return result;
                    })
                    this.setState({ books: results, search: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }));
    }

    handleSavedButton = event => {
        event.preventDefault();
        let savedBooks = this.state.books.filter(book => book.id === event.target.id)
        API.saveBook(savedBooks)
            .then(console.log(savedBooks))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div>
                    <div>
                        <div>
                            <SearchInput
                                handleFormSubmit={this.handleButtonSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <SearchResult books={this.state.books} handleSavedButton={this.handleSavedButton} />
                </div>
            </div>
        );
    }
};

export default Search;