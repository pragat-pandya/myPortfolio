import React from "react";
import { blogs } from '../data/blogsdata.js';
import './SelectedBlog.css';
import BlogRenderer from "./BlogRenderer.jsx";
import HeadingOfBlogs from './HeadingOfBlogs';

function SelectedBlog({ match, history }) {
    const id  = match.params.id; 
    const blog = blogs.find(blog => blog.id === parseInt(id));
    
    if (!blog) {
        return <div>Blog post not found</div>;
    }

    return (
        <div>
            <div>
                <HeadingOfBlogs/>
            </div>
            <div className="blog-container1">
            
            <div className="blog-card1015">
                <div className="go-back-button">
                    <i className="arrow left"></i>
                    <button onClick={() => history.goBack()}>Go Back</button>
                </div>
                <div>
                    <BlogRenderer id={id} />
                </div>
            </div>
        </div>

        </div>
        
    );
}

export default SelectedBlog;
