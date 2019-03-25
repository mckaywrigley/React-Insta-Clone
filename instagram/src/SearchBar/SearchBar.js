import React from 'react';
import './SearchBar.css';
import { Input } from 'reactstrap';

const SearchBar = props => {
    return (
        <div className="searchbar">
            {/* Logo */}
            <div className="logo">
                <a href="index.html"><i className="fab fa-instagram"></i></a>
                <h1> | Instagram</h1>
            </div>
            
            {/* Search */}
            <div className="search-input">
                <Input 
                    type = "text"
                    name = "search"
                    placeholder = "Search"
                    onChange = {props.searchHandler}
                    value = {props.searchText}
                />
            </div>

            {/* Nav */}
            <div className="navbar">
                <nav>
                    <a href="#"><i className="far fa-compass"></i></a>
                    <a href="#"><i className="far fa-heart"></i></a>
                    <a href="#"><i className="far fa-user"></i></a>
                </nav>
            </div>
        </div>
    );
}

export default SearchBar;