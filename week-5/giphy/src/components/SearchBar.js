const SearchBar=({setUserInput, searchTerm})=>{
    const setSearchTermChild=(event)=>{
        setUserInput(event.target.value);
    };
    return(
        <>
        <input type="text" value={searchTerm} onChange={setSearchTermChild}/>
        </>
    )
};
export default SearchBar;