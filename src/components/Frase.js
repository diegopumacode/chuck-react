import React,{ useState ,useEffect} from 'react'
export default function Frase() {

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(true)
    const [data , setData] = useState({})
    
    const getData = async() => {
        setIsLoaded(true)
        try {
            const result = await fetch("https://api.chucknorris.io/jokes/random")
            const  frase = await result.json()
            setData(frase)
            setIsLoaded(false)    
        } catch (error) {
            setIsLoaded(false)
            setError(error)
        }    
 
    }

    useEffect(() => {
        getData()
    }, [])

    return  <div className="content">
                <div className="container-phrase">
                    {isLoaded ? <img src="https://media.giphy.com/media/GCZc1sUMhgCh2LMyWJ/source.gif" width="100" height="100"/>: <p className="phrase">{data.value}</p>}
                </div>
                <button className="btn-phrase" onClick={getData}>
                    <img src="./reload.svg" width="30" height="30"/>
                </button>
            </div>    
}
