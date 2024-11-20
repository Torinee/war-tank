import FacebookIcon from '@/images/FacebookIcon'
import InstagramIcon from '@/images/InstagramIcon'
import TwitterIcon from '@/images/TwitterIcon'
import YoutubeIcon from '@/images/YoutubeIcon'
import React from 'react'
import { Footer } from './MainLayout.styled'

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
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                    <YoutubeIcon />
                </Footer.SocialList>
            </Footer.SocialContainer>
        </Footer.Container>
    )
}

export default FooterContainer
