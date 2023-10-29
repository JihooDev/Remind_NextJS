import { getPosts } from '@/service/blog'
import { Blog } from '@/types/types';
import Link from 'next/link';
import React, { ReactElement, useEffect } from 'react'
import ContentBox from '../components/ContentBox';

const page = async () => {

    const blogMenu = getPosts();
    // 서버가 빌드 될 때 fetch 이후 변동 되지 않음
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    // 3 초 간격으로 자동 업데이트 (ISR)
    // 0 초를 사용 시  or cache : 'no-store' (SSR)
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    // next: { revalidate: 3 },
    // cache : 'no-store'
    // });

    // const blogData = await res.json();

    return (
        <div>
            <ul>
                {
                    blogMenu.map(({ id, title }: Blog) => (
                        <li key={id}>
                            <Link href={`/blog/${id}`}>{title}</Link>
                        </li>
                    ))
                }
            </ul>
            <article>
                {/* {blogData[0].title} */}
                <ContentBox />
            </article>
        </div>
    )
}

export default page