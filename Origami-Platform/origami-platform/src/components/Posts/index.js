import React from 'react';
import './styles.css';
import Post from '../Post';
import postService from '../../services/post-service';

class Posts extends React.Component {
    state = {
        posts: null
    };

    componentDidMount() {
        postService.load()
            .then(posts => {
                this.setState({ posts });
            });
    };

    render() {
        const { posts } = this.state;
        return posts ? <div className="Posts">
            {posts.map((post) => <Post key={post.id} imageUrl="blue-origami-bird.png" imageAlt="blue-origami-bird" author={post.userId}>{post.body}</Post>)}
        </div> : <div>Loading...</div>;
    };
};

export default Posts;