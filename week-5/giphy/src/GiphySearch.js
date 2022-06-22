import {useState, useEffect} from 'react';

function GiphySearch() {
    const [search, setSearch] = useState("dog");
    const [imgSrc, setImgSrc] = useState("");
    const [imgAlt, setImgAlt] = useState("");

    const API = 'FitRJLoO2ymVxWWU0LwookQPTPuQqQOR';
    const URL = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API}`;

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API}`)
            .then((res) => res.json())
            .then((data) => {
                setImgSrc(data.data[0].images.original.url);
                setImgAlt(data.data[0].title)
            })
            .catch((error) => console.log(error))
    }, )

    const getImage = () => {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setImgSrc(data.data[0].images.original.url);
                setImgAlt(data.data[0].title)
            })
            .catch((error) => console.log(error))
    }
    
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        getImage();
    }
    
    return (
        <form>
            <label className="subtitle">Type search item below:</label>
            <input type="text" value= {search} onChange= {handleChange} className="input"></input>
            <button onClick={handleClick}>Search</button>
            <div>
               {imgSrc && <img src={imgSrc} imgAlt={imgAlt}/>} 
            </div>
        </form>
    );
}
export default GiphySearch;