/** @jsx jsx */ import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import * as styles from './home.emotion'

const Home = () => {
    let [userQuery, setUserQuery] = useState("")
    let [userLocation, setUserLocation] = useState("")

    let history = useHistory()

    const handleEnterKey = (e) => {
        if (e.which === 13) {
            history.push(`/search?query=${userQuery}&location=${userLocation}`)
        }
    }

    return (
        <div css={styles.HomeContainer}>
            <div style={{ marginTop: "-20%", width: "100%" }}>
                <h1 css={styles.Title}>Jobliss.</h1>
                <div css={styles.SearchBar}>
                    <input css={styles.QueryInput} 
                        onChange={e => setUserQuery(e.target.value)} 
                        type="text" 
                        placeholder="Type: 'Software Developer' or 'Business Analyst'"
                        onKeyPress={handleEnterKey} />
                    <input css={styles.QueryInput} 
                        onChange={e => setUserLocation(e.target.value)} 
                        style={{ width: "15%", marginRight: "2em" }} 
                        type="text" 
                        placeholder="Ex. 'Toronto, ON'"
                        onKeyPress={handleEnterKey} />
                    <Link to={`/search?query=${userQuery}&location=${userLocation}`}>
                        <button css={styles.SubmitSearch} type="text">Search</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home