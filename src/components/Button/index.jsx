import React from 'react'
import { ButtonContainer } from './Button.styled'
import ArrowCircleIcon from '@/images/ArrowCricleIcon'

const Button = (props) => {
    const { size, outline, children, ...rest } = props

    return (
        <ButtonContainer size={size} outline={outline} {...rest}>
            {children} <ArrowCircleIcon />
        </ButtonContainer>
    )
}

export default Button
