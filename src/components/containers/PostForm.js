/**
 * Created by Hugh on 10/13/2018.
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const post = {
            id: new Date(),
            title,
            message,
            editing: false
        }
//        this.props.posts.posts.push(post);
        this.props.dispatch({
            type: 'ADD_POST',
            post
        })
        this.getTitle.value = '';
        this.getMessage.value = '';
    }
    render() {

        var x = this.props.posts;
        return (
            <div className="post-container">
                <h1 className="post_heading">Create Post</h1>
                <form className="form" onSubmit={this.handleSubmit} >
                    <input required type="text" ref={(input) => this.getTitle = input}
                           placeholder="Enter Post Title" /><br /><br />
                    <textarea required rows="5" ref={(input) => this.getMessage = input}
                              cols="28" placeholder="Enter Post" /><br /><br />
                    <button>Post</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(PostForm);