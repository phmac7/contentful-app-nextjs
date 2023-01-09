import { Epilogue } from '@next/font/google';
import styles from '../styles/Home.module.scss';
import { createClient } from 'contentful';
import { GetStaticProps } from 'next';
import { Item } from '@/models/contentful';
import BlogPostList from '@/components/BlogPostList';

const epilogue = Epilogue({ subsets: ['latin'] });

export interface BlogProps {
  blogPosts: Item[];
}

export const Blog: React.FC<BlogProps> = ({ blogPosts }) => {
  console.log(blogPosts[1].sys.createdAt);

  return (
    <div className={`${styles.container} ${epilogue.className}`}>
      <h1 className={styles.title}>Latest Blog Articles</h1>
      <BlogPostList blogPosts={blogPosts} />
    </div>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_DELIVERY_ACCESSTOKEN!,
    space: process.env.CONTENTFUL_SPACE_ID!,
  });
  const res = await client.getEntries({ content_type: 'blogPost' });
  return {
    props: {
      blogPosts: res.items,
    },
  };
};
