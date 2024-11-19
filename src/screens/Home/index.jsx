import React from 'react'
import { Responsive, Theme } from './Home.styled'

const Home = () => {
    return (
        <Responsive>
            <Theme.Container>
                <Theme.RedBlock />

                <Theme.Image>
                    <img src='/images/theme_tank.png' alt='' />
                </Theme.Image>

                <Theme.Title>
                    <span>TANK</span>WAR&nbsp;
                </Theme.Title>
            </Theme.Container>
        </Responsive>
    )
}

export default Home
