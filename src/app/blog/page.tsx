import { getPosts } from '@/service/blog'
import { Blog } from '@/types/types';
import Link from 'next/link';
import React, { ReactElement } from 'react'

const page = (): ReactElement => {

    const blogMenu = getPosts();

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
        </div>
    )
}

export default page