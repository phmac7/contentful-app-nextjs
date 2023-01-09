import Image from 'next/image';
import { Epilogue } from '@next/font/google';
import styles from '../styles/Home.module.scss';
import { createClient } from 'contentful';
import { GetStaticProps } from 'next';
import { Item } from '@/models/contentful';

const epilogue = Epilogue({ subsets: ['latin'] });

interface BlogProps {
  blogPosts: Item[];
}

export const Blog: React.FC<BlogProps> = ({ blogPosts }) => {
  console.log(blogPosts[1].sys.createdAt);

  return (
    <div className={`${styles.container} ${epilogue.className}`}>
      <h1 className={styles.title}>Latest Blog Articles</h1>
      <div className={styles.articleList}>
        {blogPosts.map((blogPost: Item) => (
          <article className={styles.article} key={blogPost.sys.id}>
            <Image
              className={styles.article__img}
              width={300}
              height={200}
              src={'https:' + blogPost.fields.articleImage.fields.file.url}
              alt={blogPost.fields.articleImage.fields.title}
            />
            <p className={styles.article__type}>
              {blogPost.fields.articleType}
            </p>
            <h2 className={styles.article__name}>
              {blogPost.fields.articleTitle}
            </h2>
            <p className={styles.article__date}>
              {blogPost.sys.createdAt.slice(0, 10).replaceAll('-', '/')}
            </p>
          </article>
        ))}
      </div>
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
