import React from 'react';
import { Item } from '@/models/contentful';
import styles from '@/styles/Home.module.scss';
import Image from 'next/image';

const BlogPost: React.FC<Item> = (blogPost) => {
  return (
    <article className={styles.article} key={blogPost.sys.id}>
      <Image
        className={styles.article__img}
        width={300}
        height={200}
        src={'https:' + blogPost.fields.articleImage.fields.file.url}
        alt={blogPost.fields.articleImage.fields.title}
      />
      <p className={styles.article__type}>{blogPost.fields.articleType}</p>
      <h2 className={styles.article__name}>{blogPost.fields.articleTitle}</h2>
      <p className={styles.article__date}>
        {blogPost.sys.createdAt.slice(0, 10).replaceAll('-', '/')}
      </p>
    </article>
  );
};

export default BlogPost;
