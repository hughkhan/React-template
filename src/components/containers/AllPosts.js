/**
 * Created by Hugh on 10/13/2018.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class AllPosts extends Component {

    render() {

        return (
            <div>
                <h1 className="post_heading">All Posts</h1>
                {this.props.posts.post.map((post) => (
                    <div key={post.id}>
                        Title: {post.title} --- Message: {post.message}
                    </div>
                ))}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPosts);