import styled from 'styled-components'

export const Responsive = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`

export const Theme = {
    Container: styled.div`
        height: 600px;
        position: relative;
    `,
    Title: styled.div`
        position: relative;
        font-size: 128px;
        font-weight: 900;
        line-height: 100px;
        text-align: center;
        padding-top: 80px;
        color: white;

        > span {
            color: red;
            margin-right: 20px;
            padding-right: 20px;
        }
    `,
    RedBlock: styled.div`
        position: absolute;
        top: 0;
        right: 0;
        width: 50%;
        height: 100%;
        background: red;
    `,
    Image: styled.div`
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%);

        > img {
            max-width: 500px;
            width: 100%;
            height: 100%;
        }
    `
}

export const Introduction = {
    Container: styled.div`
        display: flex;
        gap: 30px;
        align-items: center;
    `,
    TitleSmall: styled.div`
        font-size: 32px;
        font-weight: 600;
        line-height: 61px;
    `,
    Title: styled.div`
        font-size: 64px;
        font-weight: 600;
        line-height: 61px;
    `
}
