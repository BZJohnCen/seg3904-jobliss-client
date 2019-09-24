import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    let [userQuery, setUserQuery] = useState("")
    let [userCity, setUserCity] = useState("")

    return (
        <span>
            <h1 style={{ marginTop: "-3em" }}>jobliss.</h1>
            <div id="homepage-searchbar">
                <input type="text" placeholder="Enter Job Position, Title, Role, etc"></input>
                <input id="cityInput" type="text" placeholder="City/State"></input>
                <Link to="/search"><button id="searchSubmitBtn" type="submit">Search</button></Link>
            </div>
        </span>
    )
}

export default Home