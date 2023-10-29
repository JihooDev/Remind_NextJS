import { getPost, getPosts } from '@/service/blog';
import { Blog } from '@/types/types';
import { notFound } from 'next/navigation';
import React, { ReactElement } from 'react'

type Props = {
    params: {
        slug: string;
    }
}

const page = ({ params: { slug } }: Props): ReactElement => {

    const postData = getPost(slug);

    if (!postData) {
        return notFound();
    }

    return (
        <div>{postData.title}</div>
    )
}

export const generateStaticParams = () => {
    const blog = getPosts();

    return blog.map((item: Blog) => ({
        slug: String(item.id)
    }))
}

export default page