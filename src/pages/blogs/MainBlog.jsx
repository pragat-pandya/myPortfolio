import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeadingOfBlogs from './components/HeadingOfBlogs';
import BlogRenderInSingleCard from './components/Blogs';
import SelectedBlog from './components/SelectedBlog';

function MainBlog() {
  return (
    <div>
      <HeadingOfBlogs />
      <BlogRenderInSingleCard />
    </div>
  );
}

export default MainBlog;

