import { GetServerSideProps } from 'next'
import React from 'react'

const ServerSideRenderingPage = async () => {

    let num = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${num}`, {
        // revalidate : 0 = SSR
        // revalidate : > 0 = ISR
        next: { revalidate: 3 }
    });

    const data = await res.json();

    const title = data.title;

    return (
        <div>
            {title}
        </div>
    )
}


export default ServerSideRenderingPage