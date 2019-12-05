import { css } from '@emotion/core'

export const CardContainer = css`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: fit-content;
    height: fit-content;
    padding: 16px 2em;
    border-radius: 5px;
    position: absolute;

    @media (min-width: 992px) {
        height: 225px;
    }
    @media (min-width: 1200px) {
        height: fit-content;
    }
`
export const CardBodyStyle = {
    width: "100%",
    padding: "0",
    display: "flex",
    flexDirection: "column"
}