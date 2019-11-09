import React from 'react';
import './styles.css';

function Post({ imageUrl, imageAlt, children, author }) {
    return <div className="Post">
        <img src={imageUrl} alt={imageAlt} />
        <p>{children}</p>
        <div>
            <span>
                <small>Author: </small>
                {author}
            </span>
        </div>
    </div>
};

export default Post;