import React, { Component } from 'react'
import Directory from '../Components/Directory'
import Food from '../Components/Food'
import Performances from '../Components/Performances'
import PropTypes from 'prop-types'

const event = () => (
    <div>
        <Directory />
        <Food />
        <Performances />
    </div>
)

export default event;