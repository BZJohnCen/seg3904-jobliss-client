/** @jsx jsx */ import { jsx, css } from '@emotion/core'
import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'antd'
import * as styles from './indeed-list-item.emotion'
import IndeedLogo from './indeed-logo.png'

const IndeedListItem = (props) => {
    return (
        <Card css={styles.CardContainer} bordered={false} bodyStyle={styles.CardBodyStyle}>
            <Row style={{ height: '100%' }}>
                <Col lg={{ span: 4 }} xl={{ span: 3 }} css={styles.SourceLogoCol}>
                    <div css={styles.SourceLogoContainer}>
                        <img src={IndeedLogo} style={{ objectFit: 'contain', width: '50%' }} alt="no_logo" />
                    </div>
                </Col >
                <Col lg={{ span: 20 }} xl={{ span: 17 }} css={styles.JobInfoCol}>
                    <div css={styles.JobInfoContainer}>
                        <h4 css={styles.CardText} style={{ fontSize: "25px", fontWeight: "600", width: "800px" }}>
                            <a href={props.url} rel="noopener noreferrer" target="_blank" css={styles.TitleLink}>{props.title}</a>
                        </h4>                         
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <h4 css={styles.CardText} style={{ fontWeight: "400", color: "darkblue" }}>{props.company}</h4>
                            <h4 css={styles.LocationText}>{props.location}</h4>
                        </div>
                        <div css={styles.SummaryContainer}>{props.summary}</div>
                        <div css={styles.MetaDataContainer}>
                            <h4 css={styles.DateReviewText}>Posted: {(props.postDate) ? props.postDate : "N/A"}</h4>
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

export default IndeedListItem