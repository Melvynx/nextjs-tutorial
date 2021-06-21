import React from 'react';
import { getSortedPostsData } from '../../src/libs/posts';
import utilStyles from '../../src/styles/utils.module.css';
import BaseLayout from '../../src/components/BaseLayout';
import Date from '../../src/components/Date';
import Link from 'next/link';

export default function Dynamo({ allPostsData }) {
  return (
    <BaseLayout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
