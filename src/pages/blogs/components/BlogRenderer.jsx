import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import yaml from 'js-yaml';
import './SelectedBlog.css';
import rehypeRaw from 'rehype-raw';
import remarkToc from 'remark-toc';
import remarkSlug from 'remark-slug';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; 
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism'; 


function BlogRenderer({ id }) {
  const [content, setContent] = useState('');
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    fetch(`/data/content/blog${id}.md`)
      .then((response) => response.text())
      .then((text) => {
        const part = text.split('---');
        if (part.length >= 3) {
          const meta = yaml.load(part[1]);
          setMetadata(meta);
          setContent(part.slice(2).join('---'));
        }
      })
      .catch((error) => console.error('Error fetching blog content:', error));
  }, [id]); 

  const renderers = {
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter style={solarizedlight} language={match[1]} PreTag="div" {...props}>
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };
  
  

  return (
    <div>
      <div className="blog-title1">
        {metadata.title && <h1>{metadata.title}</h1>}
      </div>
      <div className="blog-description">
        {metadata.description && <p>{metadata.description}</p>}
      </div>
      <div className="blog-author1-date1">
        {metadata.author && <p>{`Author: ${metadata.author} | Date: ${metadata.date}`}</p>}
      </div>
      <div className="blog-content1">
      <ReactMarkdown 
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkToc, remarkSlug]}
        components={renderers} // Passed the custom renderer to ReactMarkdown
      >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogRenderer;
