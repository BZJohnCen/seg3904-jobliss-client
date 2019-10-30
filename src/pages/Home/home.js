import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as styles from './home.emotion'

const Home = () => {
    let [userQuery, setUserQuery] = useState("")
    let [userCity, setUserCity] = useState("")

    return (
        <span>
            <h1 style={{ marginTop: "-3em" }}>Jobliss.</h1>
            <div css={styles.SearchBar}>
                <input type="text" placeholder="Enter Job Position, Title, Role, etc"></input>
                <input css={styles.CityInput} type="text" placeholder="City/State"></input>
                <Link to="/search"><button css={styles.SubmitSearch} type="submit">Search</button></Link>
            </div>
        </span>
    )
}

export default Home