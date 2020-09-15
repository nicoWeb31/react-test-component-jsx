import React from 'react';



const CommentItems = ({name,content,image,date}) => {
    return (
        
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar"
                    src={image}

                    />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {name}
                </a>
                    <div className="metadata">
                        <span className='date'>{date}</span>
                    </div>
                    <div className="text">
                        {content}
                </div>
                </div>
            </div>
    );
}

export default CommentItems;