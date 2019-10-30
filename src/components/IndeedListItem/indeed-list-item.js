/** @jsx jsx */ import { jsx, css } from '@emotion/core'
import React, { useState, useEffect } from 'react'
import { Card, Row, Col } from 'antd'
import * as styles from './indeed-list-item.emotion'

const IndeedListItem = (props) => {
    return (
        <Card css={styles.CardContainer} bordered={false} bodyStyle={styles.CardBodyStyle}>
            <Row style={{ height: '100%' }}>
                <Col lg={{ span: 4 }} xl={{ span: 3 }} css={styles.SourceLogoCol}>
                    <div css={styles.SourceLogoContainer}>
                        <img src="" style={{ objectFit: 'contain', width: '75%' }} alt="no_logo" />
                    </div>
                </Col >
                <Col lg={{ span: 20 }} xl={{ span: 11 }} css={styles.JobInfoCol}>
                    <div css={styles.JobInfoContainer}>
                        <h4 css={styles.CardText} style={{ fontWeight: "250", fontStyle: "italic" }}>{props.title}</h4>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <h4 css={styles.CardText} style={{ marginBottom: "2%", fontWeight: "400", color: "darkblue" }}>{props.company}</h4>
                            <h4 css={styles.LocationText}>{props.location}</h4>
                        </div>
                        <div css={styles.SummaryContainer}>{props.summary}</div>
                        <div css={styles.MetaDataContainer}>
                            <h4 css={styles.CardText}>{props.salary}</h4>
                            <h4 css={styles.DateReviewText}>{props.postDate}</h4>
                        </div>
                    </div>
                </Col>
            </Row>
        </Card>
    )
}

export default IndeedListItem