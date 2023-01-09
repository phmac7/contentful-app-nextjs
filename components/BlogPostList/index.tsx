import React from 'react';
import styles from '@/styles/Home.module.scss';
import { Item } from '@/models/contentful';
import BlogPost from '../BlogPost';
import { BlogProps } from '@/pages';

const BlogPostList: React.FC<BlogProps> = ({ blogPosts }) => {
  return (
    <div className={styles.articleList}>
      {blogPosts.map((blogPost: Item) => (
        <BlogPost {...blogPost} key={blogPost.sys.id} />
      ))}
    </div>
  );
};

export default BlogPostList;
