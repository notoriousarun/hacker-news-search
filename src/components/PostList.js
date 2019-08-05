import React from 'react';
import PropTypes from 'prop-types';
import PostListItem from 'PostListItem';

/* STATELESS POSTLIST PAGE USING LIST PROP */
const PostList = ({ posts_data }) => {
    return (
        <div className="post-list">
          <div className="post">
            {posts_data.map((post, index)=> (
                <PostListItem key={post.id} index={index} post={post}/>
            ))}
          </div>
        </div>
    );
};


PostList.propTypes = {
    posts_data: PropTypes.array.isRequired
};

export default PostList;
