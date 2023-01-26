import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

function GifSearch({ handleSubmit }) {
    const [search, setSearch] = useState();
    function handleSubmitSearch(event) {
        event.preventDefault();
        handleSubmit(search);
    }
    function handleChange(event) {
        setSearch(event.target.value);
    }
    return (
        <form onSubmit={handleSubmitSearch}>
            <label for="search">Enter a Search Term</label>
            <input id="search" type="text" onChange={handleChange}></input>
            <Button as="input" type="submit" value="Search" />{' '}
        </form>
    )
}
export default GifSearch;
