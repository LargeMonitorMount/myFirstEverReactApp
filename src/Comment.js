import React from 'react'
import PropTypes from 'prop-types'

function Comment(props) {
    return (
        <div>
            <b>{props.user}</b> {props.text}
            
        </div>
    )
}

Comment.propTypes = {

}

export default Comment

