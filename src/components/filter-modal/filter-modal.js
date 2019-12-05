/** @jsx jsx */ import { jsx, css } from '@emotion/core'
import React, { useState, useEffect } from 'react'
import { Modal, Row, Col, Checkbox, Button } from 'antd'
import * as styles from './filter-modal.emotion'

const FilterModal = (props) => {
    let hidden = props.isHidden
    const [isLoading, setIsLoading] = useState(false)

    const onChange = (e) => {
        console.log('checked: ', e.target.checked)
    }

    const handleOnOK = () => {

    }

    return (
        <Modal visible={!hidden}
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
            <Checkbox onChange={onChange}>Indeed</Checkbox>
            <Checkbox onChange={onChange}>Monster</Checkbox>
            <Checkbox onChange={onChange}>Wow Jobs</Checkbox>
            <Checkbox onChange={onChange}>Job Banks</Checkbox>
        </Modal>
    )
}

export default FilterModal