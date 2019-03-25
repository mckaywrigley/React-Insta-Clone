import React from 'react';
import './Comment.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentDiv = styled.div`
    display: flex;
    align-items: center;
    margin: 0 20px 5px 20px;
`;

const Username = styled.h2`
    font-size: 1rem;
    margin: 0;
    font-weight: bold;
`;

const Text = styled.p`
    margin: 0 5px;
    font-size: 1rem;
`;

const Comment = props => {
    return (
        <CommentDiv>
            {/* Comment */}
            <Username>
                {props.username}
            </Username>
            <Text>
                {props.text}
            </Text>
        </CommentDiv>
    );
}

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
}

export default Comment;