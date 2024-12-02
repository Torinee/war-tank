import FacebookIcon from '@/images/FacebookIcon'
import InstagramIcon from '@/images/InstagramIcon'
import TwitterIcon from '@/images/TwitterIcon'
import YoutubeIcon from '@/images/YoutubeIcon'
import React from 'react'
import { Footer } from './MainLayout.styled'
import TelegramIcon from '@/images/TelegramIcon'

const FooterContainer = () => {
    return (
        <Footer.Container>
            <Footer.TankContainer>
                <img src='/images/tank_footer.png' /> <span>TANK WAR</span>
            </Footer.TankContainer>

            <Footer.SocialContainer>
                <Footer.SocialText>NFT TANK WAR</Footer.SocialText>
                <Footer.SocialTitle className='gradient-text'>
                    Join To Our <br />
                    Company
                </Footer.SocialTitle>
                <Footer.SocialList>
                    <TelegramIcon
                        onClick={() => window.open('https://t.me/tankwarvip')}
                    />
                    <TwitterIcon
                        onClick={() =>
                            window.open('https://x.com/tankwar_gamep2e')
                        }
                    />
                </Footer.SocialList>
            </Footer.SocialContainer>
        </Footer.Container>
    )
}

export default FooterContainer
