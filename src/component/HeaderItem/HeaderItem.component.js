import React from 'react'
import { HeaderItemDiv } from './HeaderItem.style'

const HeaderItem = ({children}) => {
    return (
        <HeaderItemDiv>
            {children}
        </HeaderItemDiv>
    )
}

export default HeaderItem
