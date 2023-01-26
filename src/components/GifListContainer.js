import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch"

function GifListContainer() {
    const [gifList, setGifList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("cheeseburgers");

    //use useEffect Fnc
    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=3&api_key=jgvz6ktxaxKgK8S6oDrPu6HyngVzd745`)
            .then(res => res.json())
            .then(data => {
                setGifList(data.data)
            })
    }, [searchTerm])
    function onSubmit(search) {
        setSearchTerm(search);
    }
    return (
        <div>
            <GifList gifs={gifList} />
            <GifSearch handleSubmit={onSubmit} />
        </div>
    )
}
export default GifListContainer;