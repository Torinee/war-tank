import React from 'react'
import { Header } from './MainLayout.styled'
import LogoIcon from '@/images/LogoIcon'
import Container from '../Container'
import Button from '../Button'

const HeaderContainer = () => {
    const isMobile =
        typeof window === 'object' && window.innerWidth < 992 ? true : false

    return (
        <Header.Container>
            <Container>
                <Header.Left>
                    <Header.Logo>
                        <LogoIcon />
                    </Header.Logo>

                    <Header.LeftItem>Introduction</Header.LeftItem>
                    <Header.LeftItem>Join Us</Header.LeftItem>
                    <Header.LeftItem>Collection</Header.LeftItem>
                </Header.Left>

                <Button>{isMobile ? 'Join' : 'Join Now'}</Button>
            </Container>
        </Header.Container>
    )
}

export default HeaderContainer
