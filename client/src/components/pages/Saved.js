import React, { Component } from "react";
import API from "../../utils/API";
import SavedBook from "../SavedBook";

class Saved extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.log(err))
    }

    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <SavedBook savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
        );
    }
};

export default Saved;