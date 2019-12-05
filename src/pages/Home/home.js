/** @jsx jsx */ import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import * as styles from './home.emotion'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    let [userQuery, setUserQuery] = useState("")
    let [userLocation, setUserLocation] = useState("")

    let history = useHistory()

    const handleEnterKey = (e) => {
        if (e.which === 13) {
            if (userQuery === "" || userLocation === "") {
                toast.error("Please fill out all fields.", { 
                    position: toast.POSITION.BOTTOM_CENTER,
                    className: css({
                        fontSize: '12px'
                    }),
                    bodyClassName: css({
                        fontSize: '12px'
                    })
                })            
            } else {
                history.push(`/search?query=${userQuery}&location=${userLocation}`)
            }
        }
    }
    const handleOnSubmit = () => {
        if (userQuery === "" || userLocation === "") {
            toast.error("Please fill out all fields.", { 
                position: toast.POSITION.BOTTOM_CENTER            
            })
        } else {
            history.push(`/search?query=${userQuery}&location=${userLocation}`)
        }
    }

    return (
        <div css={styles.HomeContainer}>
            <div style={{ marginTop: "-20%", width: "100%" }}>
                <h1 css={styles.Title}>Jobliss. <span style={{ fontSize: "28px", color: "lightgreen" }}>find yours today</span></h1>
                <div css={styles.SearchBar}>
                    <input css={styles.QueryInput}                 
                        onChange={e => setUserQuery(e.target.value)} 
                        type="text" 
                        placeholder="'Software Developer'"
                        onKeyPress={handleEnterKey}
                        required />
                    <span css={styles.LabelSpan} style={{ left: "21.8%" }}>Keyword</span>
                    <input css={styles.QueryInput} 
                        onChange={e => setUserLocation(e.target.value)} 
                        style={{ width: "15%", marginRight: "2em" }} 
                        type="text" 
                        placeholder="'Toronto, ON'"
                        onKeyPress={handleEnterKey} 
                        required />
                    <span css={styles.LabelSpan} style={{ left: "55.1%" }}>Location</span>
                    <button css={styles.SubmitSearch} onClick={handleOnSubmit} type="submit">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Home