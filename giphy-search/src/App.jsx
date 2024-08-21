import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'
import { handleFetch } from './utils';
import { useState } from 'react';
import key from './components/config';
import { useEffect } from 'react';


const trending = `https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=3&rating=g`






function App() {
  const [data, setData] = useState([])
  const [gifError, setGifError] = useState([])
  const [query, setQuery] = useState(null)
  const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=3&rating=g`

  const handleSubmit = (formData) => {
    
    console.log(formData)
    setQuery(formData)
  }

  useEffect(() => {
    const doFetch = async () => {
      const [response, error] = await handleFetch(query? searchUrl: trending)
      if(response) setData(response.data)
      if(error) setGifError(error)
    }
    doFetch()
  }, [query])

  useEffect(() => {
    console.log(data)
  }, [data]) // see data on console
  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <div className="ui container">
        <GifSearch handleSubmit = {handleSubmit}/>
        <br />
        <GifContainer thingsToRender = {data}/>
      </div>
    </div>
  );
}

export default App;

// api key "N8f6pDe9eiwPaXxFr3CC62e7VZnRLpQ2"

// https://api.giphy.com/v1/gifs/trending?api_key=N8f6pDe9eiwPaXxFr3CC62e7VZnRLpQ2&limit=3&rating=g