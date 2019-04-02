import React, { Component } from 'react';
import Comment from '../Comment/Comment';
import './CommentSection.css';
import PropTypes from 'prop-types';


class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            inputText: ''
        };
    }

    inputChange = e => {
        this.setState({
            inputText: e.target.value
        });
    }

    addNewComment = e => {
        e.preventDefault();
        this.setState({
          comments: [
            ...this.state.comments, {
              username: localStorage.user,
              text: this.state.inputText,
              index: Date.now()
            }
          ],
          inputText: ''
        })
      }

    render() {
        return (
            <div className="comment-section">
                {/* Render Comments */}
                {
                    this.state.comments.map((comment, i) => {
                        return <Comment 
                        username = {comment.username}
                        text = {comment.text}
                        key = {i}
                        />
                    })
                }
    
                {/* Timestamp */}
                <div className="timestamp">
                    <p>2 HOURS AGO</p>
                </div>
    
                {/* Add Comment */}
                <div className="add-comment">
                    <form onSubmit={this.addNewComment}>
                        <input
                            type = "text"
                            name = "addComment"
                            placeholder = "Add a comment..."
                            onChange = {this.inputChange}
                            value = {this.state.inputText}
                        />
                    </form>
                    <a href="#"><i className="fas fa-ellipsis-h"></i></a>
                </div>
            </div>
        );
    }
}

CommentSection.propTypes = {
    comment: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection;