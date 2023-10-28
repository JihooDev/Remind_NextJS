import Link from 'next/link'
import React, { ReactElement } from 'react'

interface Props {
    children: ReactElement
}

const ProductLayout = ({ children }: Props) => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href={'/blog'}>블로그</Link>
                    </li>
                    <li>
                        <Link href={'/about'}>소개</Link>
                    </li>
                </ul>
            </nav>
            {children}
        </div>
    )
}

export default ProductLayout