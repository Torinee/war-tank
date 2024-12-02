import styled, { css } from 'styled-components'

export const Header = {
    Container: styled.div`
        position: sticky;
        top: 0;
        left: 0;
        background: white;
        z-index: 2;

        > div {
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    `,
    Left: styled.div`
        display: flex;
        align-items: center;
    `,
    LeftItem: styled.div`
        font-weight: 700;
        padding: 0 10px;
        cursor: pointer;

        ${({ isHideOnMobile }) =>
            isHideOnMobile &&
            css`
                @media (max-width: 992px) {
                    display: none;
                }
            `}
    `,
    Logo: styled.div`
        margin-right: 40px;
        cursor: pointer;

        > img {
            height: 50px;
        }
    `
}

export const Footer = {
    Container: styled.div`
        background: #1f1f1f;
        padding: 40px;
        display: flex;
    `,
    TankContainer: styled.div`
        width: 70%;
        position: relative;
        font-size: 64px;
        font-weight: 900;
        color: white;

        display: flex;
        justify-content: center;
        align-items: center;

        > img {
            margin-right: 20px;
        }
    `,
    SocialContainer: styled.div`
        width: 30%;
    `,
    SocialText: styled.div`
        color: white;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 5px;
    `,
    SocialTitle: styled.div`
        font-size: 36px;
        font-weight: 800;
        line-height: 40px;
    `,
    SocialList: styled.div`
        display: flex;
        gap: 20px;
        margin-top: 20px;

        > svg {
            cursor: pointer;
        }
    `
}

export const Responsive = styled.div`
    @media (max-width: 992px) {
        ${Header.LeftItem} {
            font-size: 12px;
            padding: 0 5px;
        }
        ${Header.Logo} {
            margin-right: 10px;
            > img {
                height: 35px;
            }
        }

        ${Footer.Container} {
            flex-direction: column;
            padding: 40px 20px;
        }
        ${Footer.TankContainer} {
            width: 100%;
            font-size: 30px;
        }
        ${Footer.SocialContainer} {
            width: 100%;
            text-align: center;
            margin-top: 30px;
        }
        ${Footer.SocialList} {
            justify-content: center;
        }
    }
`
