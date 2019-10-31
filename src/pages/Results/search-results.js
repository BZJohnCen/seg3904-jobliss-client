/** @jsx jsx */ import { jsx, css } from '@emotion/core'
import React, { useState, useEffect } from 'react'
import { Row, Col, List } from 'antd'
import axios from 'axios'
import * as styles from './search-results.emotion'
import IndeedListItem from '../../components/IndeedListItem/indeed-list-item'

const getIndeedJobs = async () => {
    try {
        let response = await axios.get(`https://9lgqy0jdu1.execute-api.us-east-1.amazonaws.com/dev/indeed?host=www.indeed.ca&query=software engineer`)
        return response.data
    } catch (err) {
        console.error("Could not fetch indeed results")
    }
}

const SearchResults = (props) => {
    const [indeedResults, setIndeedResults] = useState([])
    // const [monsterResults, setMonsterResults] = useState([])
    // const [jobBanksResults, setJobBanksResults] = useState([])
    // const [wowJobsResults, setWowJobsResults] = useState([])
    // const [allResults, setAllResults] = useState([])

    useEffect(() => {
        const fetchIndeedJobs = async () => {
            setIndeedResults(await getIndeedJobs())
        }
        fetchIndeedJobs()
    }, [])

    return (
        <div css={styles.SearchResultsContainer}>
            <Row>
                <Col md={{ span: 22, offset: 1 }} xs={{ span: 24 }}>
                    <h2 style={{ fontWeight: "100", marginTop: '7%', color: "white" }}>Search Results</h2>
                    <div css={styles.ResultsContent}>
                        {indeedResults ?
                            <List
                                split={false}
                                size="large"
                                dataSource={indeedResults.map((item) => <IndeedListItem {...item} />)} //render IndeedListItem for now
                                renderItem={item => <List.Item style={{ padding: "0 !important" }}>{item}</List.Item>}
                            /> :
                            <h2>No jobs postings Found</h2>
                        }
                    </div>
                </Col>
            </Row>   
        </div>
    )
}

export default SearchResults