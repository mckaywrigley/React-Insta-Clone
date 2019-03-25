import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = props => {
    return (
        <div className="post-container">
            {/* Poster Profile */}
            <div className="profile">
                <img 
                    className="profile-img" 
                    src={props.post.thumbnailUrl} 
                    alt="profile"
                />
                <h2 
                    className="username"
                >
                    {props.post.username}
                </h2>
            </div>

            {/* Image */}
            <div className="post-img">
                <img src={props.post.imageUrl} alt="post"/>
            </div>

            {/* Likes */}
            <div className="likes">
                <div className="icons">
                    <i 
                        className="far fa-heart"
                        onClick = {() => props.likeHandler(props.post.timestamp)}
                    >
                    </i>
                    <i className="far fa-comment"></i>
                </div>
                <div className="likes-counter">
                    <p>{props.post.likes} likes</p>
                </div>
            </div>

            {/* Comment Section */}
            <CommentSection 
                comments = {props.post.comments}
            />
        </div>
    );
}

PostContainer.propTypes = {
    post: PropTypes.object
};

export default PostContainer;