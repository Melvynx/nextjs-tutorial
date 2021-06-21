import Link from 'next/link';
import React from 'react';

export default function Nav({ urls }) {
  return (
    <ul>
      {urls.map(({ url, title }) => (
        <li key={title}>
          <Link href={url}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
