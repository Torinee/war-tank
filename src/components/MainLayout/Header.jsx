import React from 'react'
import { Header } from './MainLayout.styled'
import LogoIcon from '@/images/LogoIcon'
import Container from '../Container'
import Button from '../Button'

const HeaderContainer = () => {
    const isMobile =
        typeof window === 'object' && window.innerWidth < 992 ? true : false

    const scrollToElement = (id) => {
        const element = document.getElementById(id)
        const offset = 100 // Distance from the top
        const elementPosition =
            element.getBoundingClientRect().top + window.scrollY

        window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth' // Smooth scrolling
        })
    }

    return (
        <Header.Container>
            <Container>
                <Header.Left>
                    <Header.Logo>
                        <LogoIcon />
                    </Header.Logo>

                    <Header.LeftItem
                        onClick={() => scrollToElement('introduction')}
                    >
                        Introduction
                    </Header.LeftItem>
                    <Header.LeftItem onClick={() => scrollToElement('join-us')}>
                        Join Us
                    </Header.LeftItem>
                    <Header.LeftItem
                        onClick={() => scrollToElement('collection')}
                    >
                        Collection
                    </Header.LeftItem>
                </Header.Left>

                <Button>{isMobile ? 'Join' : 'Join Now'}</Button>
            </Container>
        </Header.Container>
    )
}

export default HeaderContainer
