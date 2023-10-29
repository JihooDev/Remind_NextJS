import Link from 'next/link'
import React, { ReactElement } from 'react'

interface Props {
    children: ReactElement
}

const ProductLayout = ({ children }: Props) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default ProductLayout