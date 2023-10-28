import React, { ReactElement } from 'react'

type Props = {
    params: {
        slug: string;
    }
}

const page = ({ params }: Props): ReactElement => {

    console.log(params)


    return (
        <div>page : {params.slug}</div>
    )
}

export const generateStaticParams = () => {
    const blog = ['개발', '일상'];

    return blog.map((item: string) => ({
        slug: item
    }))
}

export default page