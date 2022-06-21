import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";

const SearchForm = () => {

    const [searchTerm, setSearchTerm] = useState("dog");
    const [imgSrc, setImgSrc] = useState("");
    const [imgAlt, setImgAlt] = useState("");
   



    const API_KEY = "FitRJLoO2ymVxWWU0LwookQPTPuQqQOR";
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=3&offset=0&rating=g&lang=en
    `;


    useEffect( () => {

            fetch(`${URL}`)
            .then((response) => response.json())
            .then( (response ) => {
                setImgSrc(response.data[0].images.downsized.url)
                setImgAlt(response.data[0].title)
                console.log(imgSrc);
                console.log(imgAlt);
            })        
    
    

    const setUserInput = (value) => {
        setSearchTerm(value);
    
    };


    
  

    const sendGiphySearch = (event) => {
        event.preventDefault();
        const enteredInput = encodeURI(searchTerm);
        const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${enteredInput}&limit=1&offset=0&rating=g&lang=en`;
        fetch(`${URL}`)
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                if(response.data.length > 0)
                {
                    setImgSrc(response.data[0].images.downsized.url);
                    setImgAlt(response.data[0].title);
                    console.log(imgSrc);
                    console.log(imgAlt);
                    
                }

                });
    };

    return (
        <div >
            <form onSubmit={sendGiphySearch}>
                <SearchBar setUserInput={setUserInput} searchTerm={searchTerm}/>
                <SearchButton/>
            </form>
          
        </div>

    )

});
}
export default SearchForm;