/** @jsx jsx */ import { jsx, css } from '@emotion/core'
import React, { useState, useEffect } from 'react'
import { Modal, Row, Col, Checkbox, Button } from 'antd'
import * as styles from './filter-modal.emotion'

const FilterModal = (props) => {
    let hidden = props.isHidden
    const [isLoading, setIsLoading] = useState(false)
    const [sourceFilter, setSourceFilter] = useState({
        indeed: props.showSource.showIndeed,
        monster: props.showSource.showMonster,
        wowjobs: props.showSource.showWowJobs,
        jobbank: props.showSource.showJobBank
    })

    const onChange = (e, key) => {
        console.log('checked: ', e.target.checked)
        let newSourceFilter = { ...sourceFilter }
        newSourceFilter[key] = e.target.checked
        setSourceFilter(newSourceFilter)
    }

    const handleOnOK = () => {
        setIsLoading(true)
        props.stateCallback.modalActiveFn()
        props.stateCallback.updateSourceFilter(sourceFilter.indeed, sourceFilter.monster, sourceFilter.wowjobs, sourceFilter.jobbank)
        setIsLoading(false)
    }

    return (
        <Modal 
            visible={!hidden}
            title="Search Filters"
            onOk={handleOnOK}
            onCancel={props.hideModal}
            footer={[
                <Button key="back" onClick={props.hideModal}>
                    Cancel
                </Button>,
                <Button key="submit" disabled={isLoading} type="primary" loading={isLoading} onClick={handleOnOK}>
                    Filter
                </Button>,
            ]}
        >
            <Checkbox defaultChecked={true} checked={sourceFilter.indeed} onChange={(e) => onChange(e, 'indeed')}>Indeed</Checkbox>
            <Checkbox defaultChecked={true} checked={sourceFilter.monster} onChange={(e) => onChange(e, 'monster')}>Monster</Checkbox>
            <Checkbox defaultChecked={true} checked={sourceFilter.wowjobs} onChange={(e) => onChange(e, 'wowjobs')}>Wow Jobs</Checkbox>
            <Checkbox defaultChecked={true} checked={sourceFilter.jobbank} onChange={(e) => onChange(e, 'jobbank')}>Job Banks</Checkbox>
        </Modal>
    )
}

export default FilterModal