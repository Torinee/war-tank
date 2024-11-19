import React from 'react'
import { Header } from './MainLayout.styled'
import LogoIcon from '@/images/LogoIcon'
import Container from '../Container'

const HeaderContainer = () => {
    return (
        <Container>
            <Header.Container>
                <Header.Left>
                    <Header.Logo>
                        <LogoIcon />
                    </Header.Logo>

                    <Header.LeftItem>Introduction</Header.LeftItem>
                    <Header.LeftItem>Join</Header.LeftItem>
                    <Header.LeftItem>Collection</Header.LeftItem>
                </Header.Left>
            </Header.Container>
        </Container>
    )
}

export default HeaderContainer
