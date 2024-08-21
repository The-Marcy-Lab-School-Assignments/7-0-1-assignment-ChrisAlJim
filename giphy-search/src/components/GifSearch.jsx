import { useState } from "react";
function GifSearch({handleSubmit}) {
    const [inputValue, setInputValue] = useState('');

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit(inputValue)
            }}>
            <label htmlFor="searchInput">Enter a Search Term </label>
            <input type="text" id="searchInput" value={inputValue} className="form-control" onChange={(e) => setInputValue(e.target.value)} name ="searchInput"/>
            <button type="submit">Search</button>
        </form>
    )
}

export default GifSearch
