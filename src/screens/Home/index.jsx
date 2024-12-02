import React from 'react'
import { Swiper } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import {
    Collection,
    Friendship,
    Introduction,
    Join,
    Responsive,
    Theme
} from './Home.styled'
import Container from '@/components/Container'
import Button from '@/components/Button'
import LogoIcon from '@/images/LogoIcon'

const Home = () => {
    const goToPage = () => {
        window.location.href = 'https://t.me/BotTankWarGame_bot'
    }

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

            <Container>
                <Introduction.Container id='introduction'>
                    <Introduction.Left>
                        <Introduction.TitleSmall>
                            Tank War
                        </Introduction.TitleSmall>
                        <Introduction.Title>Introduction</Introduction.Title>
                        <Introduction.TitleWeight className='gradient-text'>
                            TANK WAR
                        </Introduction.TitleWeight>

                        <Introduction.Text>
                            Tank War is a tank war game that combines a unique
                            Play-to-Earn mechanism, where players can
                            participate in intense battles and use strategic
                            skills to win , and at the same time earn real money
                            through in-game activities with attractive ROI
                        </Introduction.Text>

                        <Button size='lg' outline='dark' onClick={goToPage}>
                            Join Now
                        </Button>
                    </Introduction.Left>

                    <Introduction.Right>
                        <Introduction.RightBg>
                            <Introduction.RightImage>
                                <img src='./images/logo.png' />
                            </Introduction.RightImage>
                        </Introduction.RightBg>
                    </Introduction.Right>
                </Introduction.Container>
            </Container>

            <Container>
                <Join.Container id='join-us'>
                    <Join.Title>
                        Are You Ready <br /> to Play?
                    </Join.Title>

                    <Join.Box>
                        <Join.BoxLeft>
                            <p>Open the Box to get a Tank</p>
                            <Button size='lg' onClick={goToPage}>
                                LET'S GO
                            </Button>
                        </Join.BoxLeft>

                        <Join.BoxRight>
                            <img src='/images/black_box.png' alt='' />
                        </Join.BoxRight>
                    </Join.Box>
                </Join.Container>
            </Container>

            <Container>
                <Collection.Container id='collection'>
                    <Collection.SmallTitle>Collection</Collection.SmallTitle>
                    <Collection.Title>
                        <span className='gradient-text'>TANK WAR</span>
                    </Collection.Title>

                    <Swiper
                        autoplay={{ delay: 2000 }}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={1}
                        modules={[Autoplay]}
                        breakpoints={{
                            993: {
                                slidesPerView: 4
                            },
                            500: {
                                slidesPerView: 2
                            }
                        }}
                    >
                        <Collection.Slide>
                            <img src='/images/tank_01.png' />
                            <img src='/images/logo.png' />
                        </Collection.Slide>
                        <Collection.Slide>
                            <img src='/images/tank_02.png' />
                            <img src='/images/logo.png' />
                        </Collection.Slide>
                        <Collection.Slide>
                            <img src='/images/tank_03.png' />
                            <img src='/images/logo.png' />
                        </Collection.Slide>
                        <Collection.Slide>
                            <img src='/images/tank_04.png' />
                            <img src='/images/logo.png' />
                        </Collection.Slide>
                        <Collection.Slide>
                            <img src='/images/tank_05.png' />
                            <img src='/images/logo.png' />
                        </Collection.Slide>
                        <Collection.Slide>
                            <img src='/images/tank_06.png' />
                            <img src='/images/logo.png' />
                        </Collection.Slide>
                    </Swiper>
                </Collection.Container>
            </Container>

            <Container>
                <Friendship.Container>
                    <Friendship.Background>
                        <Friendship.Image>
                            <img src='/images/tank_isolation.png' alt='' />
                        </Friendship.Image>
                        <Friendship.Text>JOIN THE FRIENDSHIP</Friendship.Text>
                        <Friendship.Button size='lg' onClick={goToPage}>
                            LET'S GO
                        </Friendship.Button>
                    </Friendship.Background>
                </Friendship.Container>
            </Container>
        </Responsive>
    )
}

export default Home
