import styled from 'styled-components'

export const Header = {
    Container: styled.div`
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: white;

        position: sticky;
        top: 0;
        left: 0;
    `,
    Left: styled.div`
        display: flex;
        align-items: center;
    `,
    LeftItem: styled.div`
        font-weight: 700;
        padding: 0 10px;
        cursor: pointer;
    `,
    Logo: styled.div`
        margin-right: 40px;
        cursor: pointer;
    `
}
