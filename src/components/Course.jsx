import React from 'react'

const Course = ( props ) => (
    <li>
        <span>{props.id} -  </span>
        <span>{props.name} -  </span>
        <span>{props.teacher} </span>
    </li>
)

export default  Course 