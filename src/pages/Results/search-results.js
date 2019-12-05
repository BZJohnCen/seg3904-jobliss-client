/** @jsx jsx */ import { jsx, css } from '@emotion/core'
import React, { useState, useEffect } from 'react'
import { Row, Col, List, Icon } from 'antd'
import axios from 'axios'
import Chance from 'chance'
import * as styles from './search-results.emotion'
import { useLocation, Link } from 'react-router-dom'
import IndeedListItem from '../../components/IndeedListItem/indeed-list-item'
import MonsterListItem from '../../components/MonsterListItem/monster-list-item'
import JobBanksListItem from '../../components/JobbanksListItem/jobbanks-list-item'
import WowJobsListItem from '../../components/WowjobsListItem/wowjobs-list-item'
import FilterModal from '../../components/filter-modal/filter-modal'

const useQuery = () => {
    return new URLSearchParams(useLocation().search)
}

const SearchResults = (props) => {
    const [indeedResults, setIndeedResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [monsterResults, setMonsterResults] = useState([])
    const [jobBanksResults, setJobBanksResults] = useState([])
    const [wowJobsResults, setWowJobsResults] = useState([])
    const [allResults, setAllResults] = useState([])
    // const [filteredResults, setFilteredResults] = useState([])
    const [isModalHidden, setIsModalHidden] = useState(true)
    // let [typingTimer, setTypingTimer] = useState(null)
    const chanceSeed = new Chance(124)
    const [showSource, setShowSource] = useState({
        showIndeed: false,
        showMonster: false,
        showWowJobs: false,
        showJobBank: false
    })

    let queryParams = useQuery()
    let query = queryParams.get("query")
    let location = queryParams.get("location")

    const getIndeedJobs = async (q, locationParam) => {
        try {
            let response = await axios.get(`https://9lgqy0jdu1.execute-api.us-east-1.amazonaws.com/dev/indeed?host=www.indeed.ca&query=${q}&city=${locationParam}`)
            console.log('indeed response.data:', response.data)
            return response.data
        } catch (err) {
            console.error("Could not fetch indeed results")
        }
    }
    const getMonsterJobs = async (q, locationParam) => {
        try {
            let response = await axios.get(`https://9lgqy0jdu1.execute-api.us-east-1.amazonaws.com/dev/monster?query=${q}&location=${locationParam}`)
            console.log('monster response.data:', response.data)
            return response.data
        } catch (err) {
            console.error("Could not fetch monster results")
        }
    }
    const getJBJobs = async (q) => {
        try {
            let response = await axios.get(`https://9lgqy0jdu1.execute-api.us-east-1.amazonaws.com/dev/jobbanks?query=${q}`)
            console.log('job banks response.data:', response.data)
            return response.data
        } catch (err) {
            console.error("Could not fetch job banks results")
        }
    }
    const getWJJobs = async (q, locationParam) => {
        try {
            let response = await axios.get(`https://9lgqy0jdu1.execute-api.us-east-1.amazonaws.com/dev/wowjobs?query=${q}&location=${locationParam}`)
            console.log('wow jobs response.data:', response.data)
            return response.data
        } catch (err) {
            console.error("Could not fetch wowjobs results")
        }
    }

    useEffect(() => {
        const fetchIndeedJobs = async (query, location) => {
            setIsLoading(true)
            setIndeedResults(await getIndeedJobs(query, location))
        }
        const fetchMonsterJobs = async (query, location) => {
            setMonsterResults(await getMonsterJobs(query, location))
        }
        const fetchJBJobs = async (query) => {
            setJobBanksResults(await getJBJobs(query))
        }
        const fetchWJJobs = async (query, location) => {
            setWowJobsResults(await getWJJobs(query, location))
        }

        fetchIndeedJobs(query, location)
        fetchMonsterJobs(query, location)
        fetchJBJobs(`${query} in ${location}`)
        fetchWJJobs(query, location)

        setIsLoading(false)
    }, [showSource])

    const showModal = () => {
        setIsModalHidden(false)
    }
    const hideModal = () => {
        setIsModalHidden(true)
    }

    const stateCallback = {
        modalActiveFn: () => setIsModalHidden(true),
        updateSourceFilter: (i, m, w, j) => setShowSource({
            showIndeed: i,
            showMonster: m,
            showWowJobs: w,
            showJobBank: j
        })
    }

    const ListResults = () => {
        let result = []
        //base four filters
        if (showSource.showIndeed && !showSource.showMonster && !showSource.showWowJobs && !showSource.showJobBank){ //indeed only
            result = [...indeedResults]            
        } else if (!showSource.showIndeed && showSource.showMonster && !showSource.showWowJobs && !showSource.showJobBank){ //monster only
            result = [...monsterResults]
        } else if (!showSource.showIndeed && !showSource.showMonster && showSource.showWowJobs && !showSource.showJobBank){ //wowjobs only
            result = [...wowJobsResults]
        } else if (!showSource.showIndeed && !showSource.showMonster && !showSource.showWowJobs && showSource.showJobBank){ //jobbanks only
            result = [...jobBanksResults]
        } else if (showSource.showIndeed && showSource.showMonster && !showSource.showWowJobs && !showSource.showJobBank){ //combinations: indeed + monster
            result = chanceSeed.shuffle([...indeedResults, ...monsterResults])
        } else if (showSource.showIndeed && !showSource.showMonster && showSource.showWowJobs && !showSource.showJobBank){ //indeed + wowjobs
            result = chanceSeed.shuffle([...indeedResults, ...wowJobsResults])
        } else if (showSource.showIndeed && !showSource.showMonster && !showSource.showWowJobs && showSource.showJobBank){ //indeed + jobbanks
            result = chanceSeed.shuffle([...indeedResults, ...jobBanksResults])
        } else if (showSource.showIndeed && showSource.showMonster && showSource.showWowJobs && !showSource.showJobBank){ //indeed + monster + wowjobs
            result = chanceSeed.shuffle([...indeedResults, ...monsterResults, ...wowJobsResults])
        } else if (showSource.showIndeed && showSource.showMonster && !showSource.showWowJobs && showSource.showJobBank){ //indeed + monster +jobbanks
            result = chanceSeed.shuffle([...indeedResults, ...monsterResults, ...jobBanksResults])
        } else if (showSource.showIndeed && !showSource.showMonster && showSource.showWowJobs && showSource.showJobBank){ //indeed + wowjobs + jobbanks
            result = chanceSeed.shuffle([...indeedResults, ...wowJobsResults, ...jobBanksResults])
        } else if (!showSource.showIndeed && showSource.showMonster && showSource.showWowJobs && !showSource.showJobBank){ //monster + wowjobs
            result = chanceSeed.shuffle([...monsterResults, ...wowJobsResults])
        } else if (!showSource.showIndeed && showSource.showMonster && !showSource.showWowJobs && showSource.showJobBank){ //monster + jobbanks
            result = chanceSeed.shuffle([...monsterResults, ...jobBanksResults])
        } else if (!showSource.showIndeed && showSource.showMonster && showSource.showWowJobs && showSource.showJobBank){ //monster + wowjobs + jobbanks
            result = chanceSeed.shuffle([...monsterResults, ...wowJobsResults, ...jobBanksResults])
        } else if (!showSource.showIndeed && !showSource.showMonster && showSource.showWowJobs && showSource.showJobBank){ //wowjobs + jobbanks
            result = chanceSeed.shuffle([...wowJobsResults, ...jobBanksResults])
        } else if (showSource.showIndeed && showSource.showMonster && showSource.showWowJobs && showSource.showJobBank){ //all true, in order
            result = [...indeedResults, ...monsterResults, ...wowJobsResults, ...jobBanksResults]
        } else if (!showSource.showIndeed && !showSource.showMonster && !showSource.showWowJobs && !showSource.showJobBank){ // all false, mixed
            result = chanceSeed.shuffle([...indeedResults, ...monsterResults, ...wowJobsResults, ...jobBanksResults])
        }
      
        return result.length !== 0 ?
            <List
                split={false}
                size="large"
                pagination={{
                    showSizeChanger: true,
                    onChange: (page, pageSize) => { window.scrollTo({ top: 0 }) },
                    onShowSizeChange: (current, size) => { window.scrollTo({ top: 0 }) },
                    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
                }}
                dataSource={result.map((job, i) => {
                    if (job.url.includes("indeed")){
                        return <IndeedListItem key={i} {...job} />
                    } else if (job.url.includes("monster")) {
                        return <MonsterListItem key={i} {...job} />
                    } else if (job.url.includes("jobbank")) {
                        return <JobBanksListItem key={i} {...job} />
                    } else {
                        return <WowJobsListItem key={i} {...job} />
                    }
                })}
                renderItem={item => <List.Item style={{ padding: "0 !important" }}>{item}</List.Item>}
            /> : <h2 style={{ color: "white" }}>{(result.length === 0) ? "No Postings Found" : "Loading..."}</h2>
    }

    return (
        <div css={styles.SearchResultsContainer}>
            <Row>
                <Col md={{ span: 22, offset: 1 }} xs={{ span: 24 }}>
                    <div css={styles.HeaderContainer}>
                        <Link to="/" style={{ position: "absolute", left: "0", bottom: "10%" }}>
                            <svg width="60" height="35" viewBox="1 0 22 24" fill="white" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-4.828 11.5l4.608 3.763-.679.737-6.101-5 6.112-5 .666.753-4.604 3.747h11.826v1h-11.828z"/></svg>
                        </Link>
                        <h2 style={{ fontWeight: "100", marginTop: '7%', color: "white" }}>Search Results</h2>
                        <button onClick={showModal} css={styles.FilterBtn}>Filter</button>                        
                    </div>
                    <FilterModal
                        isHidden={isModalHidden}
                        hideModal={hideModal}
                        stateCallback={stateCallback}
                        showSource={showSource}
                    />
                    <div css={styles.ResultsContent}>
                        {ListResults()}
                    </div>
                </Col>
            </Row>   
        </div>
    )
}

export default SearchResults