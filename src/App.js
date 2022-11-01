import React, { useState, useEffect } from "react"
import LocationBar from "./components/location-bar"
import MapBox from "./components/mapbox";
import { FaArrowRight } from "react-icons/fa"
import "./app.scss"

const App = () => {
    const key = "at_GSDfEyjZTL6gKp95HLkn8Lsv1jsPj"
    const placeholder = "Search for an IP Address or Domain"
    const [input, setInput] = useState("")
    const [searchTerm, setSearchTerm] = useState("")
    const [location, setLocation] = useState("")
    const base = "https://geo.ipify.org/api/v2/country,city"
    const query = `?apiKey=${key}&ipAddress=${searchTerm}&domain=${searchTerm}`

    useEffect(() => {
        fetch(base + query)
            .then(res => res.json())
            .then(data => setLocation(data))

    }, [query])


    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchTerm(input)
    }

    return (
        <div className="app">
            <div className="hero">
                <h1>IP Address Tracker</h1>
                <div className="find-location">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="search"
                            placeholder={placeholder}
                            className="search"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                        />
                        <button><FaArrowRight color="white" /></button>
                    </form>
                    {location === "" ? null : <LocationBar info={location} />}
                </div>
            </div>
            {location === "" ? null : <MapBox coordinates={location} />}
        </div>
    )
}

export default App;
