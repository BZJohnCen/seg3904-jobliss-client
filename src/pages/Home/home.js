/** @jsx jsx */ import { jsx, css } from '@emotion/core'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import * as styles from './home.emotion'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import BinocularsIcon from './binoculars.png'

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
                <div style={{ display: "flex", width: "fit-content", position: "absolute", left: "45%", top: "14.5%" }}><img src={BinocularsIcon} style={{ width: "100px", height: "100px" }} /></div>
                <h1 css={styles.Title}>Jobliss. <span style={{ fontSize: "28px", color: "lightgreen" }}>start your search</span></h1>
                <div css={styles.SearchBar}>
                    <div css={styles.queryContainer}>
                        <input css={styles.QueryInput}                 
                            onChange={e => setUserQuery(e.target.value)} 
                            type="text" 
                            placeholder="'Software Developer'"
                            onKeyPress={handleEnterKey}
                            required />
                        <span css={styles.LabelSpan}>Keyword</span>
                    </div>
                    <div css={styles.locationContainer}>
                        <input css={styles.QueryInput} 
                            onChange={e => setUserLocation(e.target.value)} 
                            style={{ width: "85%" }} 
                            type="text" 
                            placeholder="'Toronto, ON'"
                            onKeyPress={handleEnterKey} 
                            required />
                        <span css={styles.LabelSpan}>Location</span>
                    </div>
                    <button css={styles.SubmitSearch} onClick={handleOnSubmit} type="submit">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Home