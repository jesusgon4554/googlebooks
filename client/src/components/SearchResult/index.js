import React from "react";
import "./style.css";

const SearchResult = props => {
    return (
        <div className="searchBox">
            {/* <h3>Search Results</h3> */}
            {props.books.map(book => {
                return (
                
                    <div id={book.title + "Card"} key={book.key} className="cards__container">
                    {/* <ul> */}
                      <li className='cards__item' >
                        <a className='cards__item__link' href={book.link}>
                          <figure className='cards__item__pic-wrap' data-category={book.label}>
                            <img
                              className='cards__item__img'
                              alt={book.title}
                              src={book.image}
                              
                            />
                          </figure>
                          <div className='cards__item__info'>
                            <h5 className='cards__item__text'>{book.authors}</h5>
                            <h5 className='cards__item__text'>{book.description}</h5>
                            {console.log(book.key, props.authors, book.authors)}
                          </div>
                        </a>
                      </li>
                      {/* </ul> */}
                    </div>
                  );
            })}
        </div>
    )
};

export default SearchResult;
