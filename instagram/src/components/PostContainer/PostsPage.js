import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';
import dummyData from '../../dummy-data';

class PostsPage extends Component {
    constructor(){
        super();
        this.state = {
            posts: [],
            filteredPosts: [],
            searchText: '',
            liked: false
        };
    }

    componentDidMount() {
        this.setState({
          posts: dummyData,
          filteredPosts: dummyData,
          searchText: ''
        });
      }

      searchHandler = e => {
        const posts = this.state.posts.filter(post => {
            if (post.username.includes(e.target.value)) {
                return post;
            }
        });
        this.setState({
            filteredPosts: posts
        });
      }

      likeHandler = timestamp => {
        this.state.posts.map(post => {
            if(timestamp === post.timestamp) {
                let liked = this.state.liked;
                if(liked === false) {
                    post.likes += 1;
                    liked = true;
                    this.setState({
                        posts: this.state.posts,
                        liked: liked
                });
                } else {
                    post.likes = post.likes - 1;
                    liked = false;
                    this.setState({
                        posts: this.state.posts,
                        liked: liked
                });
                }
            }
            return post;
      });
    }

    render() {
        return (
            <div className="app">
                <div>
                    <SearchBar 
                        searchHandler = {this.searchHandler}
                        searchText = {this.searchText}
                    />
                </div>
            <div>
                {
                    this.state.filteredPosts.map(post => {
                        return <PostContainer 
                            post = {post}
                            key = {post.timestamp}
                            likeHandler = {this.likeHandler}
                            liked = {this.state.liked}
                        />
                    })
                }
            </div>
        </div>
        );
    }
}

export default PostsPage;