/** @jsx jsx */ import { jsx, css } from '@emotion/core'
import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'antd'
import * as styles from './jobbanks-list-item.emotion'
import JobBanksLogo from './jobbanks-logo.png'

const JobBanksListItem = (props) => {
    return (
        <Card css={styles.CardContainer} bordered={false} bodyStyle={styles.CardBodyStyle}>
            <Row style={{ height: '100%' }}>
                <Col lg={{ span: 4 }} xl={{ span: 3 }} css={styles.SourceLogoCol}>
                    <div css={styles.SourceLogoContainer}>
                        <img src={JobBanksLogo} style={{ objectFit: 'contain', width: '55%' }} alt="no_logo" />
                    </div>
                </Col >
                <Col lg={{ span: 20 }} xl={{ span: 17 }} css={styles.JobInfoCol}>
                    <div css={styles.JobInfoContainer}>
                        <h4 css={styles.CardText} style={{ fontSize: "25px", fontWeight: "600" }}>
                            <a href={props.url} rel="noopener noreferrer" target="_blank" css={styles.TitleLink}>{props.job_title}</a>
                        </h4>                        
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <h4 css={styles.CardText} style={{ fontWeight: "400", color: "darkblue" }}>{props.job_company}</h4>
                            <h4 css={styles.LocationText}>{props.location}</h4>
                        </div>
                        <div css={styles.MetaDataContainer}>
                            <h4 css={styles.DateReviewText}>Posted: {(props.date_posted) ? props.date_posted : "N/A"}</h4>
                            <h4 css={styles.CardText} style={{ width: "100%", paddingLeft: "0%" }}>Salary: {(props.salary) ? props.salary: "N/A"}</h4>
                        </div>
                    </div>
                </Col>
                <Col xl={{ span: 4 }} style={{ height: "100%" }}>
                    <div css={styles.ApplySection}>
                        <a href={props.url} rel="noopener noreferrer" target="_blank" css={styles.ApplyButton}>Apply Now</a>
                    </div>
                </Col>
            </Row>
        </Card>
    )
}

export default JobBanksListItem