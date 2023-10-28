import React, { ReactElement } from 'react'

type Props = {
    params: {
        slug: string;
    }
}

const page = ({ params }: Props): ReactElement => {
    return (
        <div>page : {params.slug}</div>
    )
}

export default page