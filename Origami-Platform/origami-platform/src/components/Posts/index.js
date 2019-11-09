import React from 'react';
import './styles.css';
import Post from '../Post';

function Posts() {
    return <div className="Posts">
        <Post imageUrl="blue-origami-bird.png" imageAlt="blue-origami-bird" author="Dobri">Test post</Post>
    </div>
};

export default Posts;