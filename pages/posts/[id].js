import React from 'react';
import { useRouter } from 'next/router';
import { getAllPostIds, getPostData } from '../../src/libs/posts';
import BaseLayout from '../../src/components/BaseLayout';
import Date from '../../src/components/Date';
import utilStyles from '../../src/styles/utils.module.css';
import Head from 'next/head';

export default function Show({ postData }) {
  console.log(postData);
  return (
    <BaseLayout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </article>
    </BaseLayout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
