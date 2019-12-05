/** @jsx jsx */ import { jsx, css } from '@emotion/core'
import React, { useState, useEffect } from 'react'
import { Row, Col, List, Icon } from 'antd'
import axios from 'axios'
import * as styles from './search-results.emotion'
import { useLocation, Link } from 'react-router-dom'
import IndeedListItem from '../../components/IndeedListItem/indeed-list-item'
import MonsterListItem from '../../components/MonsterListItem/monster-list-item'
import JobBanksListItem from '../../components/JobbanksListItem/jobbanks-list-item'
import WowJobsListItem from '../../components/WowjobsListItem/wowjobs-list-item'

const useQuery = () => {
    return new URLSearchParams(useLocation().search)
}

const SearchResults = (props) => {
    const [indeedResults, setIndeedResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [monsterResults, setMonsterResults] = useState([])
    // const [jobBanksResults, setJobBanksResults] = useState([])
    // const [wowJobsResults, setWowJobsResults] = useState([])
    const [allResults, setAllResults] = useState([])
    let queryParams = useQuery()
    let query = queryParams.get("query")
    let location = queryParams.get("location")

    const getIndeedJobs = async (q, locationParam) => {
        try {
            let response = await axios.get(`https://9lgqy0jdu1.execute-api.us-east-1.amazonaws.com/dev/indeed?host=www.indeed.ca&query=${q}&city=${locationParam}`)
            return response.data
        } catch (err) {
            console.error("Could not fetch indeed results")
        }
    }

    const getMonsterJobs = async (q, locationParam) => {
        try {
            let response = await axios.get(`https://9lgqy0jdu1.execute-api.us-east-1.amazonaws.com/dev/monster?query=${q}&location=${locationParam}`)
            return response.data
        } catch (err) {
            console.error("Could not fetch monster results")
        }
    }

    useEffect(() => {
        // setIsLoading(true)
        const fetchIndeedJobs = async (query, location) => {
            setIndeedResults(await getIndeedJobs(query, location))
        }
        const fetchMonsterJobs = async (query, location) => {
            setMonsterResults(await getMonsterJobs(query, location))
        }
        fetchIndeedJobs(query, location)
        fetchMonsterJobs(query, location)
        // setAllResults(indeedResults.concat(monsterResults))
        // setIsLoading(false)
    }, [])

    return (
        <div css={styles.SearchResultsContainer}>
            <Row>
                <Col md={{ span: 22, offset: 1 }} xs={{ span: 24 }}>
                    <div css={styles.HeaderContainer}>
                        <Link to="/" style={{ position: "absolute", left: "0", bottom: "10%" }}>
                            <svg width="60" height="35" viewBox="1 0 22 24" fill="white" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-4.828 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z"/></svg>
                        </Link>
                        <h2 style={{ fontWeight: "100", marginTop: '7%', color: "white" }}>Search Results</h2>
                    </div>
                    <div css={styles.ResultsContent}>
                        {indeedResults ?
                            <List
                                split={false}
                                size="large"
                                dataSource={indeedResults.map((item, i) => <WowJobsListItem key={i} {...item} />)} //render IndeedListItem for now
                                renderItem={item => <List.Item style={{ padding: "0 !important" }}>{item}</List.Item>}
                            /> :
                            <h2 style={{ color: "white" }}>No Jobs Postings Found.</h2>
                        }
                        {/* {monsterResults ?
                            <List
                                split={false}
                                size="large"
                                dataSource={monsterResults.map((item, i) => <MonsterListItem key={i} {...item} />)} //render MonsterListItem for now
                                renderItem={item => <List.Item style={{ padding: "0 !important" }}>{item}</List.Item>}
                            /> :
                            <h2 style={{ color: "white" }}>No Jobs Postings Found.</h2>
                        } */}
                    </div>
                </Col>
            </Row>   
        </div>
    )
}

export default SearchResults