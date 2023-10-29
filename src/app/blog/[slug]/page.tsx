import { getPost, getPosts } from '@/service/blog';
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
        <div>page : {postData}</div>
    )
}

export const generateStaticParams = () => {
    const blog = getPosts();

    return blog.map((item: string) => ({
        slug: item
    }))
}

export default page