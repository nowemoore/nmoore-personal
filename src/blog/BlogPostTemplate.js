// blog/BlogPostTemplate.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './blog.module.css';

import { FaChevronCircleLeft } from "react-icons/fa";

export default function BlogPostTemplate({ title, date, content, backgroundImage }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/#projects');
  };

  return (
    <div 
      className={styles.blogPostWrapper}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none'
      }}
    >
      <div className={styles.blogPostOverlay} />
      
      <div className={styles.blogPostContent}>
        <div className={styles.blogPostNav}>

                <button className={styles.backButton} onClick={handleBack} aria-label="Back">
                    <FaChevronCircleLeft className={styles.backIcon} />
                </button>

        </div>

        <div className={styles.blogPostHeader}>
          <h1 className={styles.blogPostTitle}>{title}</h1>
          {date && <div className={styles.blogPostDate}>{date}</div>}
        </div>

        <div 
          className={styles.blogPostBody}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}