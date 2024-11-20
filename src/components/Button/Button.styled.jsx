import { css, styled } from 'styled-components'

export const ButtonContainer = styled.button`
    background: #ffcc00;
    height: 35px;
    display: flex;
    align-items: center;
    gap: 5px;
    border-radius: 20px;
    padding: 5px 5px 5px 10px;

    font-weight: 700;
    font-size: 14px;
    line-height: 20px;

    svg {
        width: 23px;
        height: 23px;
    }

    ${({ size }) =>
        size === 'lg' &&
        css`
            height: 80px;
            padding: 10px 10px 10px 25px;
            font-size: 40px;
            line-height: 43px;
            border-radius: 40px;
            gap: 15px;

            svg {
                width: 60px;
                height: 60px;
            }

            @media (max-width: 992px) {
                height: 50px;
                padding: 8px 8px 8px 20px;
                font-size: 24px;
                line-height: normal;
                border-radius: 24px;
                gap: 15px;

                svg {
                    width: 35px;
                    height: 35px;
                }
            }
        `}
    ${({ outline }) =>
        outline === 'dark' &&
        css`
            background: #2b1321;
            color: white;
        `}
`
